(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{9943:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/how-to-build",function(){return n(7827)}])},7827:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return l}});var i=n(5893),a=n(2673),o=n(3679),r=n(9296);n(4759);var s=n(2643),d=n(208);let l=[{depth:2,value:"Building with Nix",id:"building-with-nix"}];function c(e){let t=Object.assign({h1:"h1",p:"p",a:"a",code:"code",em:"em",h2:"h2"},(0,s.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"How to build?"}),"\n",(0,i.jsx)(t.p,{children:"We currently support GHC version 9.6.5 and compilation is tested with cabal version 3.10.2.0."}),"\n",(0,i.jsxs)(t.p,{children:["Besides basic Haskell tooling (GHC and cabal), since we depend upon libraries used in ",(0,i.jsx)(t.a,{href:"https://github.com/IntersectMBO/cardano-node",children:(0,i.jsx)(t.code,{children:"cardano-node"})}),", one would need to have additional dependencies as described in ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/cardano-node-wiki/blob/602fe3a56a13a773cd6c0e00420ee3e5c56f2857/docs/getting-started/install.md",children:"this"})," guide related to building node from source. When referring to that guide, for our purposes, section on ",(0,i.jsx)(t.em,{children:'"Installing the Haskell environment"'})," and sections following (& including) ",(0,i.jsx)(t.em,{children:'"Downloading the source code for cardano-node"'})," are irrelevant."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally one would need ",(0,i.jsx)(t.code,{children:"libpq-dev"})," or ",(0,i.jsx)(t.code,{children:"postgresql"})," installed in their environment otherwise an error suggesting missing ",(0,i.jsx)(t.code,{children:"pg_config"})," can occur."]}),"\n",(0,i.jsxs)(t.p,{children:["We build Atlas in our Github CI using environment described ",(0,i.jsx)(t.a,{href:"https://github.com/geniusyield/atlas/blob/main/.github/workflows/haskell.yml",children:"here"})," which one can also refer if they encounter a build failure."]}),"\n",(0,i.jsxs)(t.p,{children:["To verify if environment is configured properly, one can clone Atlas repository from ",(0,i.jsx)(t.a,{href:"https://github.com/geniusyield/atlas/tree/main",children:"here"})," and run ",(0,i.jsx)(t.code,{children:"cabal update && cabal build all"})," to see if build is successful."]}),"\n",(0,i.jsx)(d.UW,{children:(0,i.jsxs)(t.p,{children:["If you receive an error related to building ",(0,i.jsx)(t.code,{children:"postgresql-libpq:+use-pkg-config"}),", try unsetting ",(0,i.jsx)(t.code,{children:"use-pkg-config"})," flag in your ",(0,i.jsx)(t.code,{children:"cabal.project.local"})," file."]})}),"\n",(0,i.jsx)(t.h2,{id:"building-with-nix",children:"Building with Nix"}),"\n",(0,i.jsxs)(t.p,{children:["Alternatively, we provide a nix shell with all dependencies baked in. Please refer to ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/iogx/blob/c6ce7f034717ed0c0e9c6dd8fa2f898a15439627/doc/nix-setup-guide.md",children:"this"})," guide on how to configure nix and later one can enter development shell via ",(0,i.jsx)(t.code,{children:"nix develop"}),"."]})]})}let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"src/pages/getting-started/how-to-build.mdx",route:"/getting-started/how-to-build",timestamp:1736860187e3,pageMap:[{kind:"Meta",data:{index:{title:"Atlas",display:"hidden",theme:{layout:"raw"}},documentation:{title:"Documentation",type:"page",href:"/introduction"},introduction:"Introduction","getting-started":"Getting Started","additional-features":"Additional Features","more-tutorials":"More Tutorials",haddock:{title:"API Reference (Haddock) ⬈",href:"https://haddock.atlas-app.io/",newWindow:!0}}},{kind:"Folder",name:"additional-features",route:"/additional-features",children:[{kind:"Meta",data:{blueprint:"Blueprint","simple-scripts":"Simple Scripts",certificates:"Certificates",governance:"Governance Procedures","monad-io":"Provide MonadIO instances"}},{kind:"MdxPage",name:"blueprint",route:"/additional-features/blueprint"},{kind:"MdxPage",name:"certificates",route:"/additional-features/certificates"},{kind:"MdxPage",name:"governance",route:"/additional-features/governance"},{kind:"MdxPage",name:"monad-io",route:"/additional-features/monad-io"},{kind:"MdxPage",name:"simple-scripts",route:"/additional-features/simple-scripts"}]},{kind:"Folder",name:"getting-started",route:"/getting-started",children:[{kind:"Meta",data:{"how-to-build":"How to build?","smart-contract-intro":"Smart Contract",operations:"Operations over Contract",testing:"Testing",endpoints:"Creating Endpoints","browser-integration":"Browser Integration","unit-tests":{display:"hidden",title:"Unit Tests"},"integration-tests":{display:"hidden",title:"Integration Tests"}}},{kind:"MdxPage",name:"browser-integration",route:"/getting-started/browser-integration"},{kind:"MdxPage",name:"endpoints",route:"/getting-started/endpoints"},{kind:"MdxPage",name:"how-to-build",route:"/getting-started/how-to-build"},{kind:"MdxPage",name:"integration-tests",route:"/getting-started/integration-tests"},{kind:"MdxPage",name:"operations",route:"/getting-started/operations"},{kind:"MdxPage",name:"smart-contract-intro",route:"/getting-started/smart-contract-intro"},{kind:"MdxPage",name:"testing",route:"/getting-started/testing"},{kind:"MdxPage",name:"unit-tests",route:"/getting-started/unit-tests"}]},{kind:"MdxPage",name:"getting-started",route:"/getting-started"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"introduction",route:"/introduction"},{kind:"MdxPage",name:"more-tutorials",route:"/more-tutorials"}],flexsearch:{codeblocks:!0},title:"How to build?",headings:l},pageNextRoute:"/getting-started/how-to-build",nextraLayout:o.ZP,themeConfig:r.Z};t.default=(0,a.j)(u)},9296:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(5893);n(7294);var a=n(5675),o=n.n(a),r={src:"/_next/static/media/atlas-logo-light-mode.6077cdd3.svg",height:320,width:937,blurWidth:0,blurHeight:0},s={src:"/_next/static/media/atlas-logo-dark-mode.62b4f6dd.svg",height:320,width:945,blurWidth:0,blurHeight:0},d=n(2010),l=n(1163),c={logo:(0,i.jsx)(()=>{let{resolvedTheme:e}=(0,d.F)();return(0,i.jsx)(o(),{src:"light"===e?r:s,alt:"Atlas Logo",height:"42"})},{}),project:{link:"https://github.com/geniusyield/atlas"},docsRepositoryBase:"https://github.com/geniusyield/atlas-docs/tree/main",useNextSeoProps(){let{asPath:e}=(0,l.useRouter)(),t="All-in-one solution for writing off-chain code for Plutus contracts";return{titleTemplate:"/"===e?"ATLAS Plutus Application Backend | by Genius Yield":"Atlas | %s",description:t,canonical:"https://atlas-app.io",openGraph:{url:"https://atlas-app.io",description:t,images:[{url:"/open-graph.png",width:1200,height:630,alt:"Atlas - Application backend for Plutus smart contracts on Cardano",type:"image/png"}]},siteName:"Atlas",twitter:{handle:"@GeniusyieldO",site:"https://www.geniusyield.co",cardType:"summary_large_image"}}},head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,i.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,i.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,i.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),footer:{component:(0,i.jsx)(i.Fragment,{})},nextThemes:{defaultTheme:"dark"},darkMode:!1,sidebar:{toggleButton:!0}}},5789:function(){}},function(e){e.O(0,[526,888,774,179],function(){return e(e.s=9943)}),_N_E=e.O()}]);