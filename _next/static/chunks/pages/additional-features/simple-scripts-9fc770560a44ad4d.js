(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[541],{3970:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/additional-features/simple-scripts",function(){return i(6844)}])},6844:function(t,e,i){"use strict";i.r(e),i.d(e,{__toc:function(){return d}});var n=i(5893),a=i(2673),s=i(684),r=i(3155);i(9488);var o=i(2643);let d=[];function l(t){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code"},(0,o.a)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Simple Scripts"}),"\n",(0,n.jsxs)(e.p,{children:["Atlas supports simple scripts, also known as native and timelock scripts. The functionality of simple scripts is explained in the ledger design document of Shelley & Mary era ",(0,n.jsx)(e.a,{href:"https://github.com/IntersectMBO/cardano-ledger",children:"here"})," and also in ",(0,n.jsx)(e.a,{href:"https://github.com/input-output-hk/cardano-node-wiki/blob/main/docs/reference/simple-scripts.md",children:"cardano-node-wiki"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Simple scripts can be specified via exposed constructors of ",(0,n.jsx)(e.a,{href:"https://haddock.atlas-app.io/GeniusYield-Types-Script-SimpleScript.html#t:GYSimpleScript",children:(0,n.jsx)(e.code,{children:"GYSimpleScript"})}),". They can also be read from their JSON representation as ",(0,n.jsx)(e.code,{children:"GYSimpleScript"})," has a ",(0,n.jsx)(e.a,{href:"https://hackage.haskell.org/package/aeson-2.2.3.0/docs/Data-Aeson.html#t:FromJSON",children:(0,n.jsx)(e.code,{children:"FromJSON"})})," instance. We also provide a utility function, ",(0,n.jsx)(e.a,{href:"https://haddock.atlas-app.io/GeniusYield-Types-Script-SimpleScript.html#v:readSimpleScript",children:(0,n.jsx)(e.code,{children:"readSimpleScript"})}),", to read JSON representation from a file."]}),"\n",(0,n.jsxs)(e.p,{children:["Simple scripts can also be attached to UTxO outputs, allowing them to be used later as reference scripts when building transactions. You can find an example ",(0,n.jsx)(e.a,{href:"https://github.com/geniusyield/atlas/blob/main/tests-privnet/GeniusYield/Test/Privnet/SimpleScripts.hs",children:"here"}),", that demonstrates how to interact with simple scripts, both when used as a reference and when given directly for transaction validation."]})]})}let c={MDXContent:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),t.components);return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)},pageOpts:{filePath:"src/pages/additional-features/simple-scripts.mdx",route:"/additional-features/simple-scripts",timestamp:1728303206e3,pageMap:[{kind:"Meta",data:{index:{title:"Atlas",display:"hidden",theme:{layout:"raw"}},documentation:{title:"Documentation",type:"page",href:"/introduction"},introduction:"Introduction","getting-started":"Getting Started","additional-features":"Additional Features","more-tutorials":"More Tutorials",haddock:{title:"API Reference (Haddock) ⬈",href:"https://haddock.atlas-app.io/",newWindow:!0}}},{kind:"Folder",name:"additional-features",route:"/additional-features",children:[{kind:"Meta",data:{blueprint:"Blueprint","simple-scripts":"Simple Scripts"}},{kind:"MdxPage",name:"blueprint",route:"/additional-features/blueprint"},{kind:"MdxPage",name:"simple-scripts",route:"/additional-features/simple-scripts"}]},{kind:"Folder",name:"getting-started",route:"/getting-started",children:[{kind:"Meta",data:{"how-to-build":"How to build?","smart-contract-intro":"Smart Contract",operations:"Operations over Contract",testing:"Testing",endpoints:"Creating Endpoints","browser-integration":"Browser Integration","unit-tests":{display:"hidden",title:"Unit Tests"},"integration-tests":{display:"hidden",title:"Integration Tests"}}},{kind:"MdxPage",name:"browser-integration",route:"/getting-started/browser-integration"},{kind:"MdxPage",name:"endpoints",route:"/getting-started/endpoints"},{kind:"MdxPage",name:"how-to-build",route:"/getting-started/how-to-build"},{kind:"MdxPage",name:"integration-tests",route:"/getting-started/integration-tests"},{kind:"MdxPage",name:"operations",route:"/getting-started/operations"},{kind:"MdxPage",name:"smart-contract-intro",route:"/getting-started/smart-contract-intro"},{kind:"MdxPage",name:"testing",route:"/getting-started/testing"},{kind:"MdxPage",name:"unit-tests",route:"/getting-started/unit-tests"}]},{kind:"MdxPage",name:"getting-started",route:"/getting-started"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"introduction",route:"/introduction"},{kind:"MdxPage",name:"more-tutorials",route:"/more-tutorials"}],flexsearch:{codeblocks:!0},title:"Simple Scripts",headings:d},pageNextRoute:"/additional-features/simple-scripts",nextraLayout:s.ZP,themeConfig:r.Z};e.default=(0,a.j)(c)},3155:function(t,e,i){"use strict";i.d(e,{Z:function(){return c}});var n=i(5893);i(7294);var a=i(5675),s=i.n(a),r={src:"/_next/static/media/atlas-logo-light-mode.6077cdd3.svg",height:320,width:937,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/atlas-logo-dark-mode.62b4f6dd.svg",height:320,width:945,blurWidth:0,blurHeight:0},d=i(2010),l=i(1163),c={logo:(0,n.jsx)(()=>{let{resolvedTheme:t}=(0,d.F)();return(0,n.jsx)(s(),{src:"light"===t?r:o,alt:"Atlas Logo",height:"42"})},{}),project:{link:"https://github.com/geniusyield/atlas"},docsRepositoryBase:"https://github.com/geniusyield/atlas-docs/tree/main",useNextSeoProps(){let{asPath:t}=(0,l.useRouter)(),e="All-in-one solution for writing off-chain code for Plutus contracts";return{titleTemplate:"/"===t?"ATLAS Plutus Application Backend | by Genius Yield":"Atlas | %s",description:e,canonical:"https://atlas-app.io",openGraph:{url:"https://atlas-app.io",description:e,images:[{url:"/open-graph.png",width:1200,height:630,alt:"Atlas - Application backend for Plutus smart contracts on Cardano",type:"image/png"}]},siteName:"Atlas",twitter:{handle:"@GeniusyieldO",site:"https://www.geniusyield.co",cardType:"summary_large_image"}}},head:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,n.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,n.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,n.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,n.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,n.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),footer:{component:(0,n.jsx)(n.Fragment,{})},nextThemes:{defaultTheme:"dark"},darkMode:!1,sidebar:{toggleButton:!0}}},5789:function(){}},function(t){t.O(0,[901,888,774,179],function(){return t(t.s=3970)}),_N_E=t.O()}]);