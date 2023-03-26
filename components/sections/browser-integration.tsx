import { Field, Form, Formik } from 'formik';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
  Radio,
  RadioGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Input,
  Box
} from '@chakra-ui/react'
import * as yup from "yup";
import axios from "axios";
import { bech32 } from 'bech32'
import * as C from '@dcspark/cardano-multiplatform-lib-browser'
import { brandButtonStyle } from 'theme/simple'

export type WalletApi = {
  getNetworkId(): Promise<number>;
  getUtxos(): Promise<string[] | undefined>;
  getBalance(): Promise<string>;
  getUsedAddresses(): Promise<string[]>;
  getUnusedAddresses(): Promise<string[]>;
  getChangeAddress(): Promise<string>;
  getRewardAddresses(): Promise<string[]>;
  signTx(tx: string, partialSign: boolean): Promise<string>;
  signData(
    address: string,
    payload: string,
  ): Promise<{ signature: string; key: string }>;
  submitTx(tx: string): Promise<string>;
  getCollateral(): Promise<string[]>;
  experimental: {
    getCollateral(): Promise<string[]>;
    on(eventName: string, callback: (...args: unknown[]) => void): void;
    off(eventName: string, callback: (...args: unknown[]) => void): void;
  };
};

declare global {
  interface Window {
    cardano: any;
  }
}

interface BrpParamsRaw {
  brpOracleAddress: string,
  brpBetUntil: string,
  brpBetReveal: string,
  brpBetStep: number
}

interface BrpParams {
  brpOracleAddress: string,
  brpBetUntil: string,
  brpBetReveal: string,
  brpBetStep: {
    lovelace: number
  }
}

type SupportedWallets = "nami" | "eternl";

export const fromHex = (hexString: string): Uint8Array =>
  Uint8Array.from(hexString.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)));

export const toHex = (bytes: Uint8Array): string =>
  bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');

const signAndSubmitTx = async (api: WalletApi, txCborHex: string): Promise<string> => {

  console.log('Unsigned transaction CBOR hex is ' + txCborHex);

  // parse the base tx into the serialization lib model
  const transaction = C.Transaction.from_bytes(fromHex(txCborHex));
  const txWitnessses = transaction.witness_set();
  const txVKeyWitnesses = txWitnessses.vkeys() ?? C.Vkeywitnesses.new();

  // Get the user to sign the base tx in the browser via wallet.
  const signedWitnessSet = C.TransactionWitnessSet.from_bytes(
    fromHex(await api.signTx(toHex(transaction.to_bytes()), true))
  );

  // Extract the vkey witnesses from the signing witness.
  const walletVkeyWitnesses = signedWitnessSet.vkeys(); // This won't actually be nullish (CIP 30).

  if (walletVkeyWitnesses) {
    // Combine the wallet vkey witnesses with any existing vkey witnesses.
    for (let i = 0; i < walletVkeyWitnesses?.len() ?? 0; i++) {
      txVKeyWitnesses.add(walletVkeyWitnesses.get(i));
    }
  }

  // Overwrite the vkeys in the tx witnesses.
  txWitnessses.set_vkeys(txVKeyWitnesses);

  // Compose the final tx.
  const finalTx = C.Transaction.new(transaction.body(), txWitnessses, transaction.auxiliary_data());

  // Convert to cbor hex. You can submit this in the browser with `api.submitTx()` or using the submit endpoint at backend.
  const finalTxCbor = toHex(finalTx.to_bytes());
  console.log('Final transaction CBOR is ' + finalTxCbor);
  return finalTxCbor;
}

const adaLovelace: number = 1000000

const BrowserFunctions = () => {
  let brpParams: BrpParamsRaw | undefined = undefined
  let selectedWallet: SupportedWallets | undefined = undefined
  const inputDateToISO = (inputDate: string) => (new Date(inputDate)).toISOString()
  const convertAddrToRaw = (addr: string) => Buffer.from(bech32.fromWords(bech32.decode(addr, 1000).words)).toString('hex')
  const processBrpParams = (rawBrpParams: BrpParamsRaw): BrpParams => ({
    brpOracleAddress: convertAddrToRaw(rawBrpParams.brpOracleAddress), 
    brpBetUntil: inputDateToISO(rawBrpParams.brpBetUntil),
    brpBetReveal: inputDateToISO(rawBrpParams.brpBetReveal),
    brpBetStep: {
      "lovelace": rawBrpParams.brpBetStep * adaLovelace
    }
  })
  const SaveBrpParams = () => {
    const brpParamsSchema = yup.object().shape({
      oracleAddress: yup.string().required("Required"),
      betUntil: yup.date().required("Required"),
      betReveal: yup.date().required("Required"),
      betStep: yup.number().required("Required").integer(),
    })
    return (

      <Flex>
        <Formik
          initialValues={{ 
            oracleAddress: '', 
            betUntil: '', 
            betReveal: '', 
            betStep: 0 
          }}
          validationSchema={brpParamsSchema}
          onSubmit={async (values) => {
            brpParams = { 
              brpOracleAddress: values.oracleAddress, 
              brpBetUntil: values.betUntil,
              brpBetReveal: values.betReveal,
              brpBetStep: values.betStep
            }
          }}
        >
          {(props) => (
            <Form>
              <FormControl isInvalid={!!props.errors.oracleAddress && props.touched.oracleAddress} borderColor='currentColor' mt='18px'>
                <Flex justify='center'>
                  <FormLabel textAlign='center' fontWeight='bold'>Enter the address of Oracle</FormLabel>
                  <Popover trigger='hover'>
                    <PopoverTrigger>
                      <Text _hover={{cursor: 'pointer'}}>🛈</Text>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverBody>UTxO present at this address will tell the result once it is out.</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
                <Field as={Input} name='oracleAddress' type='text' placeholder='addr...' />
                <FormErrorMessage>{props.errors.oracleAddress}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!props.errors.betUntil && props.touched.betUntil} mt='18px' borderColor='currentColor'>
                <Flex justify='center'>
                  <FormLabel fontWeight='bold'>Enter the time until which bets can be placed</FormLabel>
                </Flex>
                <Field as={Input} name='betUntil' type='datetime-local' />
                <FormErrorMessage>{props.errors.betUntil}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!props.errors.betReveal && props.touched.betReveal} mt='18px' borderColor='currentColor'>
                <Flex justify='center'>
                  <FormLabel fontWeight='bold'>Enter the time at which result is out</FormLabel>
                </Flex>
                <Field as={Input} name='betReveal' type='datetime-local' />
                <FormErrorMessage>{props.errors.betReveal}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!props.errors.betStep && props.touched.betStep} mt='18px' borderColor='currentColor'>
                <Flex justify='center'>
                  <FormLabel fontWeight='bold'>Enter the bet step amount (in Ada)</FormLabel>
                  <Popover trigger='hover'>
                    <PopoverTrigger>
                      <Text _hover={{cursor: 'pointer'}}>🛈</Text>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverBody>Each subsequent bet must be increased by at least this much amount.</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
                <Field as={Input} name='betStep' type='number' />
                <FormErrorMessage>{props.errors.betStep}</FormErrorMessage>
              </FormControl>
              <Flex direction='column' justify='center' align='center'>
                <Button
                  mt={'18px'}
                  isLoading={props.isSubmitting}
                  type='submit'
                  {...brandButtonStyle}
                >
                  Save / Update
                </Button>
                {brpParams === undefined ? null : <Text textAlign='center'>Submitted successfully.</Text>}
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    )
  }

  const SelectWallet = () => {
    const supportedWallets: SupportedWallets[] = ['nami', 'eternl']
    const selectWalletSchema = yup.object().shape({
      browserWallet: yup.string().required("Required").oneOf(supportedWallets),
    })
    return (
      <Flex>
        <Formik
          initialValues={{ browserWallet: 'nami' }}
          validationSchema={selectWalletSchema}
          onSubmit={async (values) => {
            selectedWallet = values.browserWallet as SupportedWallets
          }}
        >
          {(props) => (
            <Form>
              <FormControl isInvalid={!!props.errors.browserWallet && props.touched.browserWallet} borderColor='currentColor' mt='40px'>
                <Flex justify='center'>
                  <FormLabel textAlign='center' fontWeight='bold'>Select the browser wallet you would like to use</FormLabel>
                </Flex>
                <Field as={RadioGroup} name='browserWallet'>
                  <Flex justify='space-evenly' >
                    {supportedWallets.map((elem, ix) => (<Field as={Radio} key={ix} value={elem} >{elem.charAt(0).toUpperCase() + elem.slice(1)}</Field>))}
                  </Flex>
                </Field>
                <FormErrorMessage>{props.errors.browserWallet}</FormErrorMessage>
              </FormControl>
              <Flex direction='column' justify='center' align='center'>
                <Button
                  mt={'18px'}
                  isLoading={props.isSubmitting}
                  type='submit'
                  {...brandButtonStyle}
                >
                  Submit
                </Button>
                {selectedWallet === undefined ? null : 
                  <Text textAlign='center'>
                    Submitted successfully.
                  </Text>
                }
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    )
  }
  const AddRefScript = () => {
    const addRefScriptSchema = yup.object().shape({
      putAddress: yup.string().required("Required"),
    })
    let addTxRef: string | undefined = undefined;
    return (

      <Flex>
        <Formik
          initialValues={{ putAddress: '' }}
          validationSchema={addRefScriptSchema}
          onSubmit={async (values) => {
            console.log("brp params raw", brpParams);
            const api: WalletApi = await window.cardano[selectedWallet ?? 'nami'].enable();
            const body = {
              "arsUsedAddrs"   : await api.getUsedAddresses(),
              "arsChangeAddr"  : await api.getChangeAddress(),
              "arsCollateral"  : (await api.experimental.getCollateral())[0],
              "arsPutAddress"  : convertAddrToRaw(values.putAddress),
              "arsBetParams"   : processBrpParams(brpParams!)
              }
            console.log(JSON.stringify(body))
            const {data} = await axios.post('http://localhost:8081/betref/add-ref-script', body)
            console.log(data)
            const addIdx = data.urspUtxoRefIdx
            const finalTxCbor = await signAndSubmitTx(api, data.urspTxBodyHex)
            // txHash = await wallet.submitTx(finalTxCbor);  // alternate
            const {data: submitData} = await axios.post('http://localhost:8081/tx/submit', finalTxCbor, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            console.log(submitData)
            const addId = submitData.submitTxId
            addTxRef = `${addId}#${addIdx}`
          }}
        >
          {(props) => (
            <Form>
              <FormControl isInvalid={!!props.errors.putAddress && props.touched.putAddress} borderColor='currentColor' mt='18px'>
                <Flex justify='center'>
                  <FormLabel textAlign='center' fontWeight='bold'>Enter the address to put Reference Script at</FormLabel>
                </Flex>
                <Field as={Input} name='putAddress' type='text' placeholder='addr...' />
                <FormErrorMessage>{props.errors.putAddress}</FormErrorMessage>
              </FormControl>
              <Flex direction='column' justify='center' align='center'>
                <Button
                  mt={'18px'}
                  isLoading={props.isSubmitting}
                  type='submit'
                  {...brandButtonStyle}
                >
                  Submit
                </Button>
                {addTxRef === undefined ? null : 
                  <Text textAlign='center'>
                    Reference Script is added at: {addTxRef}
                  </Text>
                }
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    )
  }

  const PlaceBet = () => {
    const placeBetSchema = yup.object().shape({
      betGuess: yup.number().required("Required").integer(),
      betAmt: yup.number().required("Required").integer(),
      refScript: yup.string().required("Required"),
      prevBetRef: yup.string(),
    })
    let placeTxRef: string | undefined = undefined;
    return (
      <Flex>
        <Formik
          initialValues={{ betGuess: 0, betAmt: 0, refScript: '', prevBetRef: '' }}
          validationSchema={placeBetSchema}
          onSubmit={async (values) => {
            console.log("brp params raw", brpParams);
            const api: WalletApi = await window.cardano[selectedWallet ?? 'nami'].enable();
            const body = {
              "pbrUsedAddrs"   : await api.getUsedAddresses(),
              "pbrChangeAddr"  : await api.getChangeAddress(),
              "pbrCollateral"  : (await api.experimental.getCollateral())[0],
              "pbrBetAmt"      : {
                "lovelace": values.betAmt * adaLovelace
              },
              "pbrBetGuess"    : values.betGuess,
              "pbrBetParams"   : processBrpParams(brpParams!),
              "pbrRefScript"   : values.refScript,
              ...(values.prevBetRef !== '' && {"pbrPrevBetRef"  : values.prevBetRef})
              }
            console.log(JSON.stringify(body))
            const {data} = await axios.post('http://localhost:8081/betref/place', body)
            console.log(data)
            const placeIdx = data.urspUtxoRefIdx
            const finalTxCbor = await signAndSubmitTx(api, data.urspTxBodyHex)
            // txHash = await wallet.submitTx(finalTxCbor);  // alternate
            const {data: submitData} = await axios.post('http://localhost:8081/tx/submit', finalTxCbor, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            console.log(submitData)
            const placeId = submitData.submitTxId
            placeTxRef = `${placeId}#${placeIdx}`
          }}
        >
          {(props) => (
            <Form>
              <FormControl isInvalid={!!props.errors.betGuess && props.touched.betGuess} mt='18px' borderColor='currentColor'>
                <Flex justify='center'>
                  <FormLabel fontWeight='bold'>Enter your guess for scores made by the team</FormLabel>
                </Flex>
                <Field as={Input} name='betGuess' type='number' />
                <FormErrorMessage>{props.errors.betGuess}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!props.errors.betAmt && props.touched.betAmt} mt='18px' borderColor='currentColor'>
                <Flex justify='center'>
                  <FormLabel fontWeight='bold'>Enter your bet amount</FormLabel>
                </Flex>
                <Field as={Input} name='betAmt' type='number' />
                <FormErrorMessage>{props.errors.betAmt}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!props.errors.refScript && props.touched.refScript} borderColor='currentColor' mt='18px'>
                <Flex justify='center'>
                  <FormLabel textAlign='center' fontWeight='bold'>Enter the output-reference for Reference Script</FormLabel>
                </Flex>
                <Field as={Input} name='refScript' type='text' placeholder='transaction-id#transaction-index' />
                <FormErrorMessage>{props.errors.refScript}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!props.errors.prevBetRef && props.touched.prevBetRef} borderColor='currentColor' mt='18px'>
                <Flex justify='center'>
                  <FormLabel textAlign='center' fontWeight='bold'>Enter the output-reference for previously placed bet (if one exists)</FormLabel>
                </Flex>
                <Field as={Input} name='prevBetRef' type='text' placeholder='transaction-id#transaction-index' />
                <FormErrorMessage>{props.errors.prevBetRef}</FormErrorMessage>
              </FormControl>
              <Flex direction='column' justify='center' align='center'>
                <Button
                  mt={'18px'}
                  isLoading={props.isSubmitting}
                  type='submit'
                  {...brandButtonStyle}
                >
                  Submit
                </Button>
                {placeTxRef === undefined ? null : 
                  <Text textAlign='center'>
                    Bets output reference is: {placeTxRef}
                  </Text>
                }
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    )
  }

  const AddRefInput = () => {
    const addRefInputSchema = yup.object().shape({
      betAnswer: yup.number().required("Required").integer()
    })
    let addTxRef: string | undefined = undefined;
    return (

      <Flex>
        <Formik
          initialValues={{ betAnswer: 0 }}
          validationSchema={addRefInputSchema}
          onSubmit={async (values) => {
            console.log("brp params raw", brpParams);
            const api: WalletApi = await window.cardano[selectedWallet ?? 'nami'].enable();
            const body = {
              "ariUsedAddrs"   : await api.getUsedAddresses(),
              "ariChangeAddr"  : await api.getChangeAddress(),
              "ariCollateral"  : (await api.experimental.getCollateral())[0],
              "ariPutAddress"  : convertAddrToRaw(brpParams!.brpOracleAddress),
              "ariBetAnswer"   : values.betAnswer
              }
            console.log(JSON.stringify(body))
            const {data} = await axios.post('http://localhost:8081/betref/add-ref-input', body)
            console.log(data)
            const addIdx = data.urspUtxoRefIdx
            const finalTxCbor = await signAndSubmitTx(api, data.urspTxBodyHex)
            // txHash = await wallet.submitTx(finalTxCbor);  // alternate
            const {data: submitData} = await axios.post('http://localhost:8081/tx/submit', finalTxCbor, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            console.log(submitData)
            const addId = submitData.submitTxId
            addTxRef = `${addId}#${addIdx}`
          }}
        >
          {(props) => (
            <Form>
              <FormControl isInvalid={!!props.errors.betAnswer && props.touched.betAnswer} mt='18px' borderColor='currentColor'>
                <Flex justify='center'>
                  <FormLabel fontWeight='bold'>Enter the actual team score</FormLabel>
                  <Popover trigger='hover'>
                    <PopoverTrigger>
                      <Text _hover={{cursor: 'pointer'}}>🛈</Text>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverBody>Reference Input will be added at previously given Oracle Address</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
                <Field as={Input} name='betAnswer' type='number' />
                <FormErrorMessage>{props.errors.betAnswer}</FormErrorMessage>
              </FormControl>
              <Flex direction='column' justify='center' align='center'>
                <Button
                  mt={'18px'}
                  isLoading={props.isSubmitting}
                  type='submit'
                  {...brandButtonStyle}
                >
                  Submit
                </Button>
                {addTxRef === undefined ? null : 
                  <Text textAlign='center'>
                    Reference Input is added at: {addTxRef}
                  </Text>
                }
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    )
  }
  
  const TakeBets = () => {
    const takeBetsSchema = yup.object().shape({
      refScript: yup.string().required("Required"),
      prevBetRef: yup.string().required("Required"),
      oracleRefInputRef: yup.string().required("Required"),
    })
    let takeTxId: string | undefined = undefined;
    return (

      <Flex>
        <Formik
          initialValues={{ refScript: '', prevBetRef: '', oracleRefInputRef: '' }}
          validationSchema={takeBetsSchema}
          onSubmit={async (values) => {
            console.log("brp params raw", brpParams);
            const api: WalletApi = await window.cardano[selectedWallet ?? 'nami'].enable();
            const body = {
              "tbrUsedAddrs"         : await api.getUsedAddresses(),
              "tbrChangeAddr"        : await api.getChangeAddress(),
              "tbrCollateral"        : (await api.experimental.getCollateral())[0],
              "tbrBetParams"         : processBrpParams(brpParams!),
              "tbrOracleRefInputRef" : values.oracleRefInputRef,
              "tbrPrevBetRef"        : values.prevBetRef,
              "tbrRefScript"         : values.refScript,
            }
            console.log(JSON.stringify(body))
            const {data} = await axios.post('http://localhost:8081/betref/take', body)
            console.log(data)
            const finalTxCbor = await signAndSubmitTx(api, data.urspTxBodyHex)
            // txHash = await wallet.submitTx(finalTxCbor);  // alternate
            const {data: submitData} = await axios.post('http://localhost:8081/tx/submit', finalTxCbor, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            console.log(submitData)
            takeTxId = submitData.submitTxId
          }}
        >
          {(props) => (
            <Form>
              <FormControl isInvalid={!!props.errors.refScript && props.touched.refScript} borderColor='currentColor' mt='18px'>
                <Flex justify='center'>
                  <FormLabel textAlign='center' fontWeight='bold'>Enter the output-reference for Reference Script</FormLabel>
                </Flex>
                <Field as={Input} name='refScript' type='text' placeholder='transaction-id#transaction-index' />
                <FormErrorMessage>{props.errors.refScript}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!props.errors.prevBetRef && props.touched.prevBetRef} borderColor='currentColor' mt='18px'>
                <Flex justify='center'>
                  <FormLabel textAlign='center' fontWeight='bold'>Enter the output-reference for previously placed bet</FormLabel>
                </Flex>
                <Field as={Input} name='prevBetRef' type='text' placeholder='transaction-id#transaction-index' />
                <FormErrorMessage>{props.errors.prevBetRef}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!props.errors.oracleRefInputRef && props.touched.oracleRefInputRef} borderColor='currentColor' mt='18px'>
                <Flex justify='center'>
                  <FormLabel textAlign='center' fontWeight='bold'>Enter the output-reference for Oracle&apos;s answer UTxO</FormLabel>
                </Flex>
                <Field as={Input} name='oracleRefInputRef' type='text' placeholder='transaction-id#transaction-index' />
                <FormErrorMessage>{props.errors.oracleRefInputRef}</FormErrorMessage>
              </FormControl>
              <Flex direction='column' justify='center' align='center'>
                <Button
                  mt={'18px'}
                  isLoading={props.isSubmitting}
                  type='submit'
                  {...brandButtonStyle}
                >
                  Submit
                </Button>
                {takeTxId === undefined ? null : 
                  <Text textAlign='center'>
                    Transaction ID: {takeTxId}
                  </Text>
                }
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    )
  }
  return (
    <Box>
      <SelectWallet />
      <Text mt='40px'>
        Before interacting with this contract, save the required script parameters.
      </Text>
      {/* <Text fontWeight='bold' textAlign='center' fontSize='xl' mt='18px' maxW='400px'> */}
      {/*   Enter Script Parameters */}
      {/* </Text> */}
      <SaveBrpParams />
      <Text mt='40px'>
        Then lets make our first request to add for reference script.
      </Text>
      <AddRefScript />
      <Text mt='40px'>
        Now you may place some bets.
      </Text>
      <PlaceBet />
      <Text mt='40px'>
        Now let&apos;s add the actual answer to Oracle&apos;s Address
      </Text>
      <AddRefInput />
      <Text mt='40px'>
        Finally, let&apos;s consume all the previously placed bets by giving actual answer
      </Text>
      <TakeBets />
    </Box>
  )
}

export default BrowserFunctions;
