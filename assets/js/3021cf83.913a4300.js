"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[538],{5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2435:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(5773),a=n(808),l=(n(7378),n(5318)),o=["components"],i={sidebar_label:"Getting Started",title:"Getting Started"},s='<p align="center">',c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"\u2705 &nbsp;178 Functions",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/falso/docs/getting-started",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/getting-started.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Getting Started",title:"Getting Started"},sidebar:"falso",next:{title:"Address",permalink:"/falso/docs/address"}},d=[{value:"All the Fake Data for All Your Real Needs \ud83d\ude42",id:"all-the-fake-data-for-all-your-real-needs-",children:[],level:3},{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Setting a Randomness Seed",id:"setting-a-randomness-seed",children:[],level:3}],level:2}],u={toc:d};function p(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:""}),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{width:"20%",height:"20%",src:n(6122).Z})),(0,l.kt)("p",null,"\u2705 ","\xa0","178 Functions",(0,l.kt)("br",{parentName:"p"}),"\n","\u2705 ","\xa0","Tree Shakable",(0,l.kt)("br",{parentName:"p"}),"\n","\u2705 ","\xa0","Fully Typed",(0,l.kt)("br",{parentName:"p"}),"\n","\u2705 ","\xa0","Entity Functions",(0,l.kt)("br",{parentName:"p"}),"\n","\u2705 ","\xa0","Single and Array Result"),(0,l.kt)("h3",{id:"all-the-fake-data-for-all-your-real-needs-"},"All the Fake Data for All Your Real Needs \ud83d\ude42"),(0,l.kt)("p",null,"Create massive amounts of fake data in the browser and NodeJS. Tree Shakeable & Fully Typed."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\ud83d\udd25 Run it on ",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-pjao1u?file=index.ts"},"Stackblitz")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i @ngneat/falso\nyarn add @ngneat/falso\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { randEmail, randFullName } from '@ngneat/falso';\n\nconst user = { email: randEmail(), name: randFullName() };\n\nconst emails = randEmail({ length: 10 });\n")),(0,l.kt)("h3",{id:"setting-a-randomness-seed"},"Setting a Randomness Seed"),(0,l.kt)("p",null,"You can set your own seed if you want consistent results:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { rand, seed } from '@ngneat/falso';\n\nseed('some-constant-seed');\n\n// Always returns 2\nrand([1, 2, 3, 4, 5]);\n\n// Reset random seed\nseed();\n")),(0,l.kt)("p",null,"Credit: Some data was taken from the old implementation of Faker.js"))}p.isMDXComponent=!0},6122:function(e,t,n){t.Z=n.p+"assets/images/logo-265bb188d7ac3ac69d4238c387591ecc.png"}}]);