import axios from "axios";
import { bech32 } from "bech32";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

const simpleRequired = {
  required: "Required",
};

const onlyIntegerPattern = {
  value: /^[0-9]*$/, // for positive integers: [1-9]+[0-9]*
  message: "Only non-negative integers allowed",
};

const simpleIntRequired = {
  ...simpleRequired,
  pattern: onlyIntegerPattern,
  setValueAs: (v: string) => parseInt(v), // else my number was getting treated as string
};

const formPErrorStyle = {
  color: "red",
  fontSize: "0.9em",
  marginTop: "3px",
};

const formInputErrorStyle = {
  borderColor: "red",
};

const formStyle = {
  display: "flex",
  flexDirection: "column" as "column", // https://github.com/cssinjs/jss/issues/1344#issue-615428512
  alignItems: "center",
};

const formDivStyle = {
  minWidth: "300px",
};

const formButtonSubmittingStyle = {};

const pResultStyle = {
  textAlign: "center" as "center",
};

const labelStyle = {
  marginTop: "10px",
  fontWeight: "bold",
};

const introPStyle = {
  marginTop: "20px",
  fontStyle: "italic",
  marginBottom: "5px",
};

const inputStyle = {
  marginTop: "10px",
  padding: "10px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#ccc",
  borderRadius: "5px",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  cursor: "pointer",
};

const nonNegativeIntegerString = "Non negative integer";

export type WalletApi = {
  getNetworkId(): Promise<number>;
  getUtxos(): Promise<string[] | undefined>;
  getBalance(): Promise<string>;
  getUsedAddresses(): Promise<string[]>;
  getUnusedAddresses(): Promise<string[]>;
  getChangeAddress(): Promise<string>;
  getRewardAddresses(): Promise<string[]>;
  signTx(tx: string, partialSign: boolean): Promise<string>;
  signData(address: string, payload: string): Promise<{ signature: string; key: string }>;
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
  brpOracleAddress: string;
  brpBetUntil: string;
  brpBetReveal: string;
  brpBetStep: number;
}

interface BrpParams {
  brpOracleAddress: string;
  brpBetUntil: string;
  brpBetReveal: string;
  brpBetStep: {
    lovelace: number;
  };
}

type SupportedWallets = "nami" | "eternl";

const adaLovelace: number = 1000000;

const BrowserFunctions = () => {
  let brpParams: BrpParamsRaw | undefined = undefined;
  let selectedWallet: SupportedWallets = "nami";

  const inputDateToISO = (inputDate: string) => new Date(inputDate).toISOString();
  const convertAddrToRaw = (addr: string) =>
    Buffer.from(bech32.fromWords(bech32.decode(addr, 1000).words)).toString("hex");
  const processBrpParams = (rawBrpParams: BrpParamsRaw): BrpParams => ({
    brpOracleAddress: convertAddrToRaw(rawBrpParams.brpOracleAddress),
    brpBetUntil: inputDateToISO(rawBrpParams.brpBetUntil),
    brpBetReveal: inputDateToISO(rawBrpParams.brpBetReveal),
    brpBetStep: {
      lovelace: rawBrpParams.brpBetStep * adaLovelace,
    },
  });

  const SelectWallet = () => {
    const supportedWallets: SupportedWallets[] = ["nami", "eternl"];
    type swFormValues = {
      browserWallet: SupportedWallets;
    };
    const {
      register,
      formState: { isSubmitting, isSubmitSuccessful },
      handleSubmit,
    } = useForm<swFormValues>({
      mode: "onTouched",
      defaultValues: {
        browserWallet: selectedWallet,
      },
    });
    const onSubmit: SubmitHandler<swFormValues> = (data: any) => {
      selectedWallet = data.browserWallet;
      console.log("Wallet selected: ", selectedWallet);
    };

    return (
      <div style={{ ...formDivStyle }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            ...formStyle,
          }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "full" }}>
            {supportedWallets.map((elem: SupportedWallets, ix: number) => (
              <span key={ix} style={{ marginRight: "20px" }}>
                <label style={{ marginRight: "10px" }}>{elem.charAt(0).toUpperCase() + elem.slice(1)}</label>
                <input {...register("browserWallet", simpleRequired)} type="radio" value={elem} />
              </span>
            ))}
          </div>
          <input style={{ ...buttonStyle, ...(isSubmitting && formButtonSubmittingStyle) }} type="submit" />
          {isSubmitSuccessful && <p>Submitted successfully.</p>}
        </form>
      </div>
    );
  };

  const SaveBrpParams = () => {
    type SbpFormValues = {
      oracleAddress: string;
      betUntil: string;
      betReveal: string;
      betStep: number;
    };
    const {
      register,
      formState: { errors, isSubmitting, isSubmitSuccessful },
      handleSubmit,
    } = useForm<SbpFormValues>({ mode: "onTouched" });
    const onSubmit: SubmitHandler<SbpFormValues> = (data: SbpFormValues) => {
      brpParams = {
        brpOracleAddress: data.oracleAddress,
        brpBetUntil: data.betUntil,
        brpBetReveal: data.betReveal,
        brpBetStep: data.betStep,
      };
      console.log(brpParams);
    };

    return (
      <div style={{ ...formDivStyle }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            ...formStyle,
          }}>
          <label style={{ ...labelStyle }}>Enter the address of Oracle</label>
          <input
            style={{ ...inputStyle, ...(errors.oracleAddress && formInputErrorStyle) }}
            type="text"
            placeholder="addr..."
            {...register("oracleAddress", simpleRequired)}
          />
          {errors.oracleAddress && <p style={{ ...formPErrorStyle }}>{errors.oracleAddress.message}</p>}
          <label style={{ ...labelStyle }}>Enter the time until which bets can be placed</label>
          <input
            style={{ ...inputStyle, ...(errors.betUntil && formInputErrorStyle) }}
            type="datetime-local"
            {...register("betUntil", simpleRequired)}
          />
          {errors.betUntil && <p style={{ ...formPErrorStyle }}>{errors.betUntil.message}</p>}
          <label style={{ ...labelStyle }}>Enter the time at which result is out</label>
          <input
            style={{ ...inputStyle, ...(errors.betReveal && formInputErrorStyle) }}
            type="datetime-local"
            {...register("betReveal", simpleRequired)}
          />
          {errors.betReveal && <p style={{ ...formPErrorStyle }}>{errors.betReveal.message}</p>}
          <label style={{ ...labelStyle }}>Enter the bet step amount (in Ada)</label>
          <input
            style={{ ...inputStyle, ...(errors.betStep && formInputErrorStyle) }}
            type="number"
            {...register("betStep", simpleIntRequired)}
            placeholder={nonNegativeIntegerString}
          />
          {errors.betStep && <p style={{ ...formPErrorStyle }}>{errors.betStep.message}</p>}
          <input style={{ ...buttonStyle, ...(isSubmitting && formButtonSubmittingStyle) }} type="submit" />
          {isSubmitSuccessful && <p>Submitted successfully.</p>}
        </form>
      </div>
    );
  };

  const AddRefScript = () => {
    const [addTxRef, setAddTxRef] = useState<string>("");
    type arsFormValues = {
      putAddress: string;
    };
    const {
      register,
      formState: { errors, isSubmitting },
      handleSubmit,
    } = useForm<arsFormValues>({ mode: "onTouched" });

    const onSubmit: SubmitHandler<arsFormValues> = async (values: arsFormValues) => {
      try {
        if (brpParams === undefined) throw "Not yet given script parameters";

        console.log("brp params raw", brpParams);

        // Obtain access to browser wallet api
        const api: WalletApi = await window.cardano[selectedWallet].enable(); // Creating a type such as `WalletApi` was entirely optional.

        // Create request body for calling our endpoint
        const body = {
          arsUsedAddrs: await api.getUsedAddresses(),
          arsChangeAddr: await api.getChangeAddress(),
          arsCollateral: (await api.experimental.getCollateral())[0],
          arsPutAddress: convertAddrToRaw(values.putAddress), // implementation detail
          arsBetParams: processBrpParams(brpParams), // implementation detail
        };
        console.log(body);

        // Call endpoint
        const { data } = await axios.post("http://localhost:8081/betref/add-ref-script", body);
        console.log(data);

        // Sign & submit
        const { data: submitData } = await axios.post(
          "http://localhost:8081/tx/add-wit-and-submit",
          {
            awasTxUnsigned: data.urspTxBodyHex,
            awasTxWit: await api.signTx(data.urspTxBodyHex, true), // Note that this second argument (corresponding to "partial signing") needs to be `true` as for inputs such as those belonging to script already have their witness and we need to give witness only for inputs belonging to us.
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(submitData);
        setAddTxRef(data.urspUtxoRef);
      } catch (error) {
        alert(JSON.stringify(error));
      }
    };

    return (
      <div style={{ ...formDivStyle }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            ...formStyle,
          }}>
          <label style={{ ...labelStyle }}>Enter the address to put Reference Script at</label>
          <input
            style={{ ...inputStyle, ...(errors.putAddress && formInputErrorStyle) }}
            type="text"
            placeholder="addr..."
            {...register("putAddress", simpleRequired)}
          />
          {errors.putAddress && <p style={{ ...formPErrorStyle }}>{errors.putAddress.message}</p>}
          <input
            style={{ ...buttonStyle, ...(isSubmitting && formButtonSubmittingStyle) }}
            type="submit"
            value={isSubmitting ? "Submitting" : "Submit"}
          />
          {addTxRef !== "" && <p style={{ ...pResultStyle }}>Reference Script is added at: {addTxRef}</p>}
        </form>
      </div>
    );
  };

  const PlaceBet = () => {
    const [placeTxRef, setPlaceTxRef] = useState<string>("");
    type pbFormValues = {
      betGuess: number;
      betAmt: number;
      refScript: string;
      prevBetRef: string;
    };
    const {
      register,
      formState: { errors, isSubmitting },
      handleSubmit,
    } = useForm<pbFormValues>({ mode: "onTouched" });
    const onSubmit: SubmitHandler<pbFormValues> = async (values: pbFormValues) => {
      try {
        if (brpParams === undefined) throw "Not yet given script parameters";
        console.log("brp params raw", brpParams);
        const api: WalletApi = await window.cardano[selectedWallet].enable();
        const body = {
          pbrUsedAddrs: await api.getUsedAddresses(),
          pbrChangeAddr: await api.getChangeAddress(),
          pbrCollateral: (await api.experimental.getCollateral())[0],
          pbrBetAmt: {
            lovelace: values.betAmt * adaLovelace,
          },
          pbrBetGuess: values.betGuess,
          pbrBetParams: processBrpParams(brpParams),
          pbrRefScript: values.refScript,
          ...(values.prevBetRef !== "" && { pbrPrevBetRef: values.prevBetRef }),
        };
        console.log(body);
        const { data } = await axios.post("http://localhost:8081/betref/place", body);
        console.log(data);
        const { data: submitData } = await axios.post(
          "http://localhost:8081/tx/add-wit-and-submit",
          { awasTxUnsigned: data.urspTxBodyHex, awasTxWit: await api.signTx(data.urspTxBodyHex, true) },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(submitData);
        setPlaceTxRef(data.urspUtxoRef);
      } catch (error) {
        alert(JSON.stringify(error));
      }
    };
    return (
      <div style={{ ...formDivStyle }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            ...formStyle,
          }}>
          <label style={{ ...labelStyle }}>Enter your guess for scores made by the team</label>
          <input
            style={{ ...inputStyle, ...(errors.betGuess && formInputErrorStyle) }}
            type="number"
            {...register("betGuess", simpleIntRequired)}
            placeholder={nonNegativeIntegerString}
          />
          {errors.betGuess && <p style={{ ...formPErrorStyle }}>{errors.betGuess.message}</p>}
          <label style={{ ...labelStyle }}>Enter your bet amount (in Ada)</label>
          <input
            style={{ ...inputStyle, ...(errors.betAmt && formInputErrorStyle) }}
            type="number"
            {...register("betAmt", simpleIntRequired)}
            placeholder={nonNegativeIntegerString}
          />
          {errors.betAmt && <p style={{ ...formPErrorStyle }}>{errors.betAmt.message}</p>}
          <label style={{ ...labelStyle }}>Enter the output-reference for Reference Script</label>
          <input
            style={{ ...inputStyle, ...(errors.refScript && formInputErrorStyle) }}
            type="text"
            placeholder="transaction-id#transaction-index"
            {...register("refScript", simpleRequired)}
          />
          {errors.refScript && <p style={{ ...formPErrorStyle }}>{errors.refScript.message}</p>}
          <label style={{ ...labelStyle }}>Enter the output-reference for previously placed bet (if one exists)</label>
          <input
            style={{ ...inputStyle, ...(errors.prevBetRef && formInputErrorStyle) }}
            type="text"
            placeholder="transaction-id#transaction-index"
            {...register("prevBetRef")}
          />
          {errors.prevBetRef && <p style={{ ...formPErrorStyle }}>{errors.prevBetRef.message}</p>}
          <input
            style={{ ...buttonStyle, ...(isSubmitting && formButtonSubmittingStyle) }}
            type="submit"
            value={isSubmitting ? "Submitting" : "Submit"}
          />
          {placeTxRef !== "" && <p style={{ ...pResultStyle }}>Bets output reference is: {placeTxRef}</p>}
        </form>
      </div>
    );
  };

  const AddRefInput = () => {
    const [addTxRef, setAddTxRef] = useState<string>("");
    type ariFormValues = {
      betAnswer: number;
    };
    const {
      register,
      formState: { errors, isSubmitting },
      handleSubmit,
    } = useForm<ariFormValues>({ mode: "onTouched" });
    const onSubmit: SubmitHandler<ariFormValues> = async (values: ariFormValues) => {
      try {
        if (brpParams === undefined) throw "Not yet given script parameters";
        console.log("brp params raw", brpParams);
        const api: WalletApi = await window.cardano[selectedWallet].enable();
        const body = {
          ariUsedAddrs: await api.getUsedAddresses(),
          ariChangeAddr: await api.getChangeAddress(),
          ariCollateral: (await api.experimental.getCollateral())[0],
          ariPutAddress: convertAddrToRaw(brpParams.brpOracleAddress),
          ariBetAnswer: values.betAnswer,
        };
        console.log(body);
        const { data } = await axios.post("http://localhost:8081/betref/add-ref-input", body);
        console.log(data);
        const { data: submitData } = await axios.post(
          "http://localhost:8081/tx/add-wit-and-submit",
          { awasTxUnsigned: data.urspTxBodyHex, awasTxWit: await api.signTx(data.urspTxBodyHex, true) },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(submitData);
        setAddTxRef(data.urspUtxoRef);
      } catch (error) {
        alert(JSON.stringify(error));
      }
    };
    return (
      <div style={{ ...formDivStyle }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            ...formStyle,
          }}>
          <label style={{ ...labelStyle }}>Enter the actual team score</label>
          <input
            style={{ ...inputStyle, ...(errors.betAnswer && formInputErrorStyle) }}
            type="number"
            {...register("betAnswer", simpleIntRequired)}
            placeholder={nonNegativeIntegerString}
          />
          {errors.betAnswer && <p style={{ ...formPErrorStyle }}>{errors.betAnswer.message}</p>}
          <input
            style={{ ...buttonStyle, ...(isSubmitting && formButtonSubmittingStyle) }}
            type="submit"
            value={isSubmitting ? "Submitting" : "Submit"}
          />
          {addTxRef !== "" && <p style={{ ...pResultStyle }}>Reference Input is added at: {addTxRef}</p>}
        </form>
      </div>
    );
  };

  const TakeBets = () => {
    const [takeTxId, setTakeTxId] = useState<string>("");
    type tbFormValues = {
      refScript: string;
      prevBetRef: string;
      oracleRefInputRef: string;
    };
    const {
      register,
      formState: { errors, isSubmitting },
      handleSubmit,
    } = useForm<tbFormValues>({ mode: "onTouched" });
    const onSubmit: SubmitHandler<tbFormValues> = async (values: tbFormValues) => {
      try {
        if (brpParams === undefined) throw "Not yet given script parameters";
        console.log("brp params raw", brpParams);
        const api: WalletApi = await window.cardano[selectedWallet].enable();
        const body = {
          tbrUsedAddrs: await api.getUsedAddresses(),
          tbrChangeAddr: await api.getChangeAddress(),
          tbrCollateral: (await api.experimental.getCollateral())[0],
          tbrBetParams: processBrpParams(brpParams),
          tbrOracleRefInputRef: values.oracleRefInputRef,
          tbrPrevBetRef: values.prevBetRef,
          tbrRefScript: values.refScript,
        };
        console.log(body);
        const { data } = await axios.post("http://localhost:8081/betref/take", body);
        console.log(data);
        const { data: submitData } = await axios.post(
          "http://localhost:8081/tx/add-wit-and-submit",
          { awasTxUnsigned: data.urspTxBodyHex, awasTxWit: await api.signTx(data.urspTxBodyHex, true) },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(submitData);
        setTakeTxId(submitData.submitTxId);
      } catch (error) {
        alert(JSON.stringify(error));
      }
    };
    return (
      <div style={{ ...formDivStyle }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            ...formStyle,
          }}>
          <label style={{ ...labelStyle }}>Enter the output-reference for Reference Script</label>
          <input
            style={{ ...inputStyle, ...(errors.refScript && formInputErrorStyle) }}
            type="text"
            placeholder="transaction-id#transaction-index"
            {...register("refScript", simpleRequired)}
          />
          {errors.refScript && <p style={{ ...formPErrorStyle }}>{errors.refScript.message}</p>}
          <label style={{ ...labelStyle }}>Enter the output-reference for previously placed bet</label>
          <input
            style={{ ...inputStyle, ...(errors.prevBetRef && formInputErrorStyle) }}
            type="text"
            placeholder="transaction-id#transaction-index"
            {...register("prevBetRef", simpleRequired)}
          />
          {errors.prevBetRef && <p style={{ ...formPErrorStyle }}>{errors.prevBetRef.message}</p>}
          <label style={{ ...labelStyle }}>{"Enter the output-reference for Oracle's answer UTxO"}</label>
          <input
            style={{ ...inputStyle, ...(errors.oracleRefInputRef && formInputErrorStyle) }}
            type="text"
            placeholder="transaction-id#transaction-index"
            {...register("oracleRefInputRef", simpleRequired)}
          />
          {errors.oracleRefInputRef && <p style={{ ...formPErrorStyle }}>{errors.oracleRefInputRef.message}</p>}
          <input
            style={{ ...buttonStyle, ...(isSubmitting && formButtonSubmittingStyle) }}
            type="submit"
            value={isSubmitting ? "Submitting" : "Submit"}
          />
          {takeTxId !== "" && <p style={{ ...pResultStyle }}>Transaction ID: {takeTxId}</p>}
        </form>
      </div>
    );
  };

  return (
    <div>
      <p style={{ ...introPStyle }}>Select the browser wallet you would like to use:</p>
      <SelectWallet />
      <p style={{ ...introPStyle }}>Before interacting with this contract, save the required script parameters:</p>
      <SaveBrpParams />
      <p style={{ ...introPStyle }}>Then lets make our first request to add for reference script:</p>
      <AddRefScript />
      <p style={{ ...introPStyle }}>Now you may place some bets.</p>
      <PlaceBet />
      <p style={{ ...introPStyle }}>{"Now let's add the actual answer to Oracle's Address"}</p>
      <AddRefInput />
      <p style={{ ...introPStyle }}>
        {"Finally, let's consume all the previously placed bets by giving actual answer"}
      </p>
      <TakeBets />
    </div>
  );
};

export default BrowserFunctions;
