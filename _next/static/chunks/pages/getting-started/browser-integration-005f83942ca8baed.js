(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{3636:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/browser-integration",function(){return s(8648)}])},8648:function(e,t,s){"use strict";s.r(t),s.d(t,{__toc:function(){return R},default:function(){return U}});var r=s(5893),n=s(2673),i=s(3679),o=s(9296);s(4759);var l=s(2643),a=s(7066),c=s(7715),d=s(7536),h=s(7294),p=s(1876).Buffer;let x={required:"Required"},y={...x,pattern:{value:/^[0-9]*$/,message:"Only non-negative integers allowed"},setValueAs:e=>parseInt(e)},u={color:"red",fontSize:"0.9em",marginTop:"3px"},k={borderColor:"red"},j={display:"flex",flexDirection:"column",alignItems:"center"},g={minWidth:"300px"},m={},v={textAlign:"center"},f={marginTop:"10px",fontWeight:"bold"},b={marginTop:"20px",fontStyle:"italic",marginBottom:"5px"},w={marginTop:"10px",padding:"10px",borderWidth:"1px",borderStyle:"solid",borderColor:"#ccc",borderRadius:"5px"},A={marginTop:"20px",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",cursor:"pointer"},S="Non negative integer";var T=()=>{let e;let t="nami",s=e=>new Date(e).toISOString(),n=e=>p.from(c.gW.fromWords(c.gW.decode(e,1e3).words)).toString("hex"),i=e=>({brpOracleAddress:n(e.brpOracleAddress),brpBetUntil:s(e.brpBetUntil),brpBetReveal:s(e.brpBetReveal),brpBetStep:{lovelace:1e6*e.brpBetStep}});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{style:{...b},children:"Select the browser wallet you would like to use:"}),(0,r.jsx)(()=>{let{register:e,formState:{isSubmitting:s,isSubmitSuccessful:n},handleSubmit:i}=(0,d.cI)({mode:"onTouched",defaultValues:{browserWallet:t}});return(0,r.jsx)("div",{style:{...g},children:(0,r.jsxs)("form",{onSubmit:i(e=>{console.log("Wallet selected: ",t=e.browserWallet)}),style:{...j},children:[(0,r.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"full"},children:["nami","eternl"].map((t,s)=>(0,r.jsxs)("span",{style:{marginRight:"20px"},children:[(0,r.jsx)("label",{style:{marginRight:"10px"},children:t.charAt(0).toUpperCase()+t.slice(1)}),(0,r.jsx)("input",{...e("browserWallet",x),type:"radio",value:t})]},s))}),(0,r.jsx)("input",{style:{...A,...s&&m},type:"submit"}),n&&(0,r.jsx)("p",{children:"Submitted successfully."})]})})},{}),(0,r.jsx)("p",{style:{...b},children:"Before interacting with this contract, save the required script parameters:"}),(0,r.jsx)(()=>{let{register:t,formState:{errors:s,isSubmitting:n,isSubmitSuccessful:i},handleSubmit:o}=(0,d.cI)({mode:"onTouched"});return(0,r.jsx)("div",{style:{...g},children:(0,r.jsxs)("form",{onSubmit:o(t=>{console.log(e={brpOracleAddress:t.oracleAddress,brpBetUntil:t.betUntil,brpBetReveal:t.betReveal,brpBetStep:t.betStep})}),style:{...j},children:[(0,r.jsx)("label",{style:{...f},children:"Enter the address of Oracle"}),(0,r.jsx)("input",{style:{...w,...s.oracleAddress&&k},type:"text",placeholder:"addr...",...t("oracleAddress",x)}),s.oracleAddress&&(0,r.jsx)("p",{style:{...u},children:s.oracleAddress.message}),(0,r.jsx)("label",{style:{...f},children:"Enter the time until which bets can be placed"}),(0,r.jsx)("input",{style:{...w,...s.betUntil&&k},type:"datetime-local",...t("betUntil",x)}),s.betUntil&&(0,r.jsx)("p",{style:{...u},children:s.betUntil.message}),(0,r.jsx)("label",{style:{...f},children:"Enter the time at which result is out"}),(0,r.jsx)("input",{style:{...w,...s.betReveal&&k},type:"datetime-local",...t("betReveal",x)}),s.betReveal&&(0,r.jsx)("p",{style:{...u},children:s.betReveal.message}),(0,r.jsx)("label",{style:{...f},children:"Enter the bet step amount (in Ada)"}),(0,r.jsx)("input",{style:{...w,...s.betStep&&k},type:"number",...t("betStep",y),placeholder:S}),s.betStep&&(0,r.jsx)("p",{style:{...u},children:s.betStep.message}),(0,r.jsx)("input",{style:{...A,...n&&m},type:"submit"}),i&&(0,r.jsx)("p",{children:"Submitted successfully."})]})})},{}),(0,r.jsx)("p",{style:{...b},children:"Then lets make our first request to add for reference script:"}),(0,r.jsx)(()=>{let[s,o]=(0,h.useState)(""),{register:l,formState:{errors:c,isSubmitting:p},handleSubmit:y}=(0,d.cI)({mode:"onTouched"}),b=async s=>{try{if(void 0===e)throw"Not yet given script parameters";console.log("brp params raw",e);let r=await window.cardano[t].enable(),l=await r.experimental.getCollateral(),c={arsUsedAddrs:await r.getUsedAddresses(),arsChangeAddr:await r.getChangeAddress(),...0 in l&&{arsCollateral:l[0]},arsPutAddress:n(s.putAddress),arsBetParams:i(e)};console.log(c);let{data:d}=await a.Z.post("http://localhost:8081/betref/add-ref-script",c);console.log(d);let{data:h}=await a.Z.post("http://localhost:8081/tx/add-wit-and-submit",{awasTxUnsigned:d.urspTxBodyHex,awasTxWit:await r.signTx(d.urspTxBodyHex,!0)},{headers:{"Content-Type":"application/json"}});console.log(h),o(d.urspUtxoRef)}catch(e){alert(JSON.stringify(e))}};return(0,r.jsx)("div",{style:{...g},children:(0,r.jsxs)("form",{onSubmit:y(b),style:{...j},children:[(0,r.jsx)("label",{style:{...f},children:"Enter the address to put Reference Script at"}),(0,r.jsx)("input",{style:{...w,...c.putAddress&&k},type:"text",placeholder:"addr...",...l("putAddress",x)}),c.putAddress&&(0,r.jsx)("p",{style:{...u},children:c.putAddress.message}),(0,r.jsx)("input",{style:{...A,...p&&m},type:"submit",value:p?"Submitting":"Submit"}),""!==s&&(0,r.jsxs)("p",{style:{...v},children:["Reference Script is added at: ",s]})]})})},{}),(0,r.jsx)("p",{style:{...b},children:"Now you may place some bets."}),(0,r.jsx)(()=>{let[s,n]=(0,h.useState)(""),{register:o,formState:{errors:l,isSubmitting:c},handleSubmit:p}=(0,d.cI)({mode:"onTouched"}),b=async s=>{try{if(void 0===e)throw"Not yet given script parameters";console.log("brp params raw",e);let r=await window.cardano[t].enable(),o=await r.experimental.getCollateral(),l={pbrUsedAddrs:await r.getUsedAddresses(),pbrChangeAddr:await r.getChangeAddress(),...0 in o&&{pbrCollateral:o[0]},pbrBetAmt:{lovelace:1e6*s.betAmt},pbrBetGuess:s.betGuess,pbrBetParams:i(e),pbrRefScript:s.refScript,...""!==s.prevBetRef&&{pbrPrevBetRef:s.prevBetRef}};console.log(l);let{data:c}=await a.Z.post("http://localhost:8081/betref/place",l);console.log(c);let{data:d}=await a.Z.post("http://localhost:8081/tx/add-wit-and-submit",{awasTxUnsigned:c.urspTxBodyHex,awasTxWit:await r.signTx(c.urspTxBodyHex,!0)},{headers:{"Content-Type":"application/json"}});console.log(d),n(c.urspUtxoRef)}catch(e){alert(JSON.stringify(e))}};return(0,r.jsx)("div",{style:{...g},children:(0,r.jsxs)("form",{onSubmit:p(b),style:{...j},children:[(0,r.jsx)("label",{style:{...f},children:"Enter your guess for scores made by the team"}),(0,r.jsx)("input",{style:{...w,...l.betGuess&&k},type:"number",...o("betGuess",y),placeholder:S}),l.betGuess&&(0,r.jsx)("p",{style:{...u},children:l.betGuess.message}),(0,r.jsx)("label",{style:{...f},children:"Enter your bet amount (in Ada)"}),(0,r.jsx)("input",{style:{...w,...l.betAmt&&k},type:"number",...o("betAmt",y),placeholder:S}),l.betAmt&&(0,r.jsx)("p",{style:{...u},children:l.betAmt.message}),(0,r.jsx)("label",{style:{...f},children:"Enter the output-reference for Reference Script"}),(0,r.jsx)("input",{style:{...w,...l.refScript&&k},type:"text",placeholder:"transaction-id#transaction-index",...o("refScript",x)}),l.refScript&&(0,r.jsx)("p",{style:{...u},children:l.refScript.message}),(0,r.jsx)("label",{style:{...f},children:"Enter the output-reference for previously placed bet (if one exists)"}),(0,r.jsx)("input",{style:{...w,...l.prevBetRef&&k},type:"text",placeholder:"transaction-id#transaction-index",...o("prevBetRef")}),l.prevBetRef&&(0,r.jsx)("p",{style:{...u},children:l.prevBetRef.message}),(0,r.jsx)("input",{style:{...A,...c&&m},type:"submit",value:c?"Submitting":"Submit"}),""!==s&&(0,r.jsxs)("p",{style:{...v},children:["Bets output reference is: ",s]})]})})},{}),(0,r.jsx)("p",{style:{...b},children:"Now let's add the actual answer to Oracle's Address"}),(0,r.jsx)(()=>{let[s,i]=(0,h.useState)(""),{register:o,formState:{errors:l,isSubmitting:c},handleSubmit:p}=(0,d.cI)({mode:"onTouched"}),x=async s=>{try{if(void 0===e)throw"Not yet given script parameters";console.log("brp params raw",e);let r=await window.cardano[t].enable(),o=await r.experimental.getCollateral(),l={ariUsedAddrs:await r.getUsedAddresses(),ariChangeAddr:await r.getChangeAddress(),...0 in o&&{ariCollateral:o[0]},ariPutAddress:n(e.brpOracleAddress),ariBetAnswer:s.betAnswer};console.log(l);let{data:c}=await a.Z.post("http://localhost:8081/betref/add-ref-input",l);console.log(c);let{data:d}=await a.Z.post("http://localhost:8081/tx/add-wit-and-submit",{awasTxUnsigned:c.urspTxBodyHex,awasTxWit:await r.signTx(c.urspTxBodyHex,!0)},{headers:{"Content-Type":"application/json"}});console.log(d),i(c.urspUtxoRef)}catch(e){alert(JSON.stringify(e))}};return(0,r.jsx)("div",{style:{...g},children:(0,r.jsxs)("form",{onSubmit:p(x),style:{...j},children:[(0,r.jsx)("label",{style:{...f},children:"Enter the actual team score"}),(0,r.jsx)("input",{style:{...w,...l.betAnswer&&k},type:"number",...o("betAnswer",y),placeholder:S}),l.betAnswer&&(0,r.jsx)("p",{style:{...u},children:l.betAnswer.message}),(0,r.jsx)("input",{style:{...A,...c&&m},type:"submit",value:c?"Submitting":"Submit"}),""!==s&&(0,r.jsxs)("p",{style:{...v},children:["Reference Input is added at: ",s]})]})})},{}),(0,r.jsx)("p",{style:{...b},children:"Finally, let's consume all the previously placed bets by giving actual answer"}),(0,r.jsx)(()=>{let[s,n]=(0,h.useState)(""),{register:o,formState:{errors:l,isSubmitting:c},handleSubmit:p}=(0,d.cI)({mode:"onTouched"}),y=async s=>{try{if(void 0===e)throw"Not yet given script parameters";console.log("brp params raw",e);let r=await window.cardano[t].enable(),o=await r.experimental.getCollateral(),l={tbrUsedAddrs:await r.getUsedAddresses(),tbrChangeAddr:await r.getChangeAddress(),...0 in o&&{tbrCollateral:o[0]},tbrBetParams:i(e),tbrOracleRefInputRef:s.oracleRefInputRef,tbrPrevBetRef:s.prevBetRef,tbrRefScript:s.refScript};console.log(l);let{data:c}=await a.Z.post("http://localhost:8081/betref/take",l);console.log(c);let{data:d}=await a.Z.post("http://localhost:8081/tx/add-wit-and-submit",{awasTxUnsigned:c.urspTxBodyHex,awasTxWit:await r.signTx(c.urspTxBodyHex,!0)},{headers:{"Content-Type":"application/json"}});console.log(d),n(d.submitTxId)}catch(e){alert(JSON.stringify(e))}};return(0,r.jsx)("div",{style:{...g},children:(0,r.jsxs)("form",{onSubmit:p(y),style:{...j},children:[(0,r.jsx)("label",{style:{...f},children:"Enter the output-reference for Reference Script"}),(0,r.jsx)("input",{style:{...w,...l.refScript&&k},type:"text",placeholder:"transaction-id#transaction-index",...o("refScript",x)}),l.refScript&&(0,r.jsx)("p",{style:{...u},children:l.refScript.message}),(0,r.jsx)("label",{style:{...f},children:"Enter the output-reference for previously placed bet"}),(0,r.jsx)("input",{style:{...w,...l.prevBetRef&&k},type:"text",placeholder:"transaction-id#transaction-index",...o("prevBetRef",x)}),l.prevBetRef&&(0,r.jsx)("p",{style:{...u},children:l.prevBetRef.message}),(0,r.jsx)("label",{style:{...f},children:"Enter the output-reference for Oracle's answer UTxO"}),(0,r.jsx)("input",{style:{...w,...l.oracleRefInputRef&&k},type:"text",placeholder:"transaction-id#transaction-index",...o("oracleRefInputRef",x)}),l.oracleRefInputRef&&(0,r.jsx)("p",{style:{...u},children:l.oracleRefInputRef.message}),(0,r.jsx)("input",{style:{...A,...c&&m},type:"submit",value:c?"Submitting":"Submit"}),""!==s&&(0,r.jsxs)("p",{style:{...v},children:["Transaction ID: ",s]})]})})},{})]})},N=s(208);let R=[];function B(e){let t=Object.assign({h1:"h1",p:"p",em:"em",code:"code",a:"a",pre:"pre",span:"span",strong:"strong"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Browser Integration"}),"\n",(0,r.jsx)(t.p,{children:"Now that we have our server running, we need front-end UI to interact with it."}),"\n",(0,r.jsxs)(t.p,{children:["For all of the operations, the approach (",(0,r.jsx)(t.em,{children:"as previously mentioned"}),") is same which is to first get the unsigned transaction from server, use browser wallet's ",(0,r.jsx)(t.code,{children:"signTx"})," method to get spending key witness for this transaction, and then use server's endpoint to add witness to this transaction & submit it."]}),"\n",(0,r.jsx)(N.UW,{type:"warning",emoji:"\uD83D\uDCC3",children:(0,r.jsxs)(t.p,{children:["The entire code pertaining to browser operations is available ",(0,r.jsx)(t.a,{href:"https://github.com/geniusyield/atlas-docs/tree/main/src/components/browser-integration.tsx",children:"here"}),"."]})}),"\n",(0,r.jsxs)(t.p,{children:["An outline of this whole process is given below, illustrated via ",(0,r.jsx)(t.code,{children:"add-ref-script"})," endpoint:"]}),"\n",(0,r.jsx)(t.pre,{"data-language":"typescript","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(t.code,{"data-language":"typescript","data-theme":"default",children:[(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Obtain access to browser wallet api"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"api"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"WalletApi"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"window"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:".cardano[selectedWallet]"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".enable"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(); "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Creating a type such as `WalletApi` was entirely optional."})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Obtaining UTxOs to be used collaterals as given by browser wallet."})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"colls"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"api"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"experimental"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".getCollateral"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Create request body for calling our endpoint"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"body"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  arsUsedAddrs"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"api"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".getUsedAddresses"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  arsChangeAddr"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"api"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".getChangeAddress"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" colls "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { arsCollateral"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" colls["}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] })"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  arsPutAddress"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"convertAddrToRaw"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"values"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:".putAddress)"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// implementation detail"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  arsBetParams"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"processBrpParams"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(brpParams)"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// implementation detail"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(body);"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Call endpoint"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"data"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"axios"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".post"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"http://localhost:8081/betref/add-ref-script"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" body);"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(data);"})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:" "}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// Sign & submit"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { data: "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"submitData"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"axios"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".post"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"http://localhost:8081/tx/add-wit-and-submit"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    awasTxUnsigned"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"data"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:".urspTxBodyHex"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    awasTxWit"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"api"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".signTx"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"data"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:".urspTxBodyHex"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:'// Note that this second argument (corresponding to "partial signing") needs to be `true` as for inputs such as those belonging to script already have their witness and we need to give witness only for inputs belonging to us.'})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  {"})}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    headers"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Content-Type"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"application/json"'}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(t.span,{className:"line",children:[(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,r.jsx)(t.span,{className:"line",children:(0,r.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})}),"\n",(0,r.jsx)(t.p,{children:"What follows is the demo for all of the operations we defined."}),"\n",(0,r.jsx)(N.UW,{type:"warning",emoji:"⚠️",children:(0,r.jsxs)(t.p,{children:["Due to security reasons, you would need to run this page locally (instructions ",(0,r.jsx)(t.a,{href:"https://github.com/geniusyield/atlas-docs/#local-development",children:"here"}),") to check out the following demo."]})}),"\n",T(),"\n",(0,r.jsx)(N.UW,{emoji:"\uD83C\uDF89",children:(0,r.jsxs)(t.p,{children:["And with this, we come to an end of our ",(0,r.jsx)(t.a,{href:"./../getting-started",children:"Getting Started"})," guide \uD83E\uDD73! Hope you enjoyed it \uD83D\uDC99"]})}),"\n",(0,r.jsx)(N.UW,{type:"info",emoji:"❓",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Have questions?"})," Ask them at ",(0,r.jsx)(t.a,{href:"https://cardano.stackexchange.com/questions/tagged/atlas",children:"Cardano StackExchange"}),"."]})})]})}let C={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(B,{...e})}):B(e)},pageOpts:{filePath:"src/pages/getting-started/browser-integration.mdx",route:"/getting-started/browser-integration",timestamp:1735054263e3,pageMap:[{kind:"Meta",data:{index:{title:"Atlas",display:"hidden",theme:{layout:"raw"}},documentation:{title:"Documentation",type:"page",href:"/introduction"},introduction:"Introduction","getting-started":"Getting Started","additional-features":"Additional Features","more-tutorials":"More Tutorials",haddock:{title:"API Reference (Haddock) ⬈",href:"https://haddock.atlas-app.io/",newWindow:!0}}},{kind:"Folder",name:"additional-features",route:"/additional-features",children:[{kind:"Meta",data:{blueprint:"Blueprint","simple-scripts":"Simple Scripts"}},{kind:"MdxPage",name:"blueprint",route:"/additional-features/blueprint"},{kind:"MdxPage",name:"simple-scripts",route:"/additional-features/simple-scripts"}]},{kind:"Folder",name:"getting-started",route:"/getting-started",children:[{kind:"Meta",data:{"how-to-build":"How to build?","smart-contract-intro":"Smart Contract",operations:"Operations over Contract",testing:"Testing",endpoints:"Creating Endpoints","browser-integration":"Browser Integration","unit-tests":{display:"hidden",title:"Unit Tests"},"integration-tests":{display:"hidden",title:"Integration Tests"}}},{kind:"MdxPage",name:"browser-integration",route:"/getting-started/browser-integration"},{kind:"MdxPage",name:"endpoints",route:"/getting-started/endpoints"},{kind:"MdxPage",name:"how-to-build",route:"/getting-started/how-to-build"},{kind:"MdxPage",name:"integration-tests",route:"/getting-started/integration-tests"},{kind:"MdxPage",name:"operations",route:"/getting-started/operations"},{kind:"MdxPage",name:"smart-contract-intro",route:"/getting-started/smart-contract-intro"},{kind:"MdxPage",name:"testing",route:"/getting-started/testing"},{kind:"MdxPage",name:"unit-tests",route:"/getting-started/unit-tests"}]},{kind:"MdxPage",name:"getting-started",route:"/getting-started"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"introduction",route:"/introduction"},{kind:"MdxPage",name:"more-tutorials",route:"/more-tutorials"}],flexsearch:{codeblocks:!0},title:"Browser Integration",headings:R},pageNextRoute:"/getting-started/browser-integration",nextraLayout:i.ZP,themeConfig:o.Z};var U=(0,n.j)(C)},9296:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var r=s(5893);s(7294);var n=s(5675),i=s.n(n),o={src:"/_next/static/media/atlas-logo-light-mode.6077cdd3.svg",height:320,width:937,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/atlas-logo-dark-mode.62b4f6dd.svg",height:320,width:945,blurWidth:0,blurHeight:0},a=s(2010),c=s(1163),d={logo:(0,r.jsx)(()=>{let{resolvedTheme:e}=(0,a.F)();return(0,r.jsx)(i(),{src:"light"===e?o:l,alt:"Atlas Logo",height:"42"})},{}),project:{link:"https://github.com/geniusyield/atlas"},docsRepositoryBase:"https://github.com/geniusyield/atlas-docs/tree/main",useNextSeoProps(){let{asPath:e}=(0,c.useRouter)(),t="All-in-one solution for writing off-chain code for Plutus contracts";return{titleTemplate:"/"===e?"ATLAS Plutus Application Backend | by Genius Yield":"Atlas | %s",description:t,canonical:"https://atlas-app.io",openGraph:{url:"https://atlas-app.io",description:t,images:[{url:"/open-graph.png",width:1200,height:630,alt:"Atlas - Application backend for Plutus smart contracts on Cardano",type:"image/png"}]},siteName:"Atlas",twitter:{handle:"@GeniusyieldO",site:"https://www.geniusyield.co",cardType:"summary_large_image"}}},head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),footer:{component:(0,r.jsx)(r.Fragment,{})},nextThemes:{defaultTheme:"dark"},darkMode:!1,sidebar:{toggleButton:!0}}},5789:function(){}},function(e){e.O(0,[526,563,888,774,179],function(){return e(e.s=3636)}),_N_E=e.O()}]);