"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[315],{5318:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>c});var a=r(7378);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),p=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(r),c=t,g=u["".concat(i,".").concat(c)]||u[c]||m[c]||o;return r?a.createElement(g,l(l({ref:n},s),{},{components:r})):a.createElement(g,l({ref:n},s))}));function c(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=u;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:t,l[1]=d;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3477:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=r(5773),t=(r(7378),r(5318));const o={slug:"/internet"},l="Internet",d={unversionedId:"auto-generated/internet",id:"auto-generated/internet",title:"Internet",description:"`randBrowser`",source:"@site/docs/auto-generated/internet.mdx",sourceDirName:"auto-generated",slug:"/internet",permalink:"/falso/docs/internet",draft:!1,editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/internet"},sidebar:"falso",previous:{title:"Git",permalink:"/falso/docs/git"},next:{title:"Jobs",permalink:"/falso/docs/jobs"}},i={},p=[{value:"<code>randBrowser</code>",id:"randbrowser",level:3},{value:"<code>randDomainName</code>",id:"randdomainname",level:3},{value:"<code>randDomainSuffix</code>",id:"randdomainsuffix",level:3},{value:"<code>randEmailProvider</code>",id:"randemailprovider",level:3},{value:"<code>randHttpMethod</code>",id:"randhttpmethod",level:3},{value:"<code>randIntegration</code>",id:"randintegration",level:3},{value:"<code>randIp</code>",id:"randip",level:3},{value:"<code>randIpv6</code>",id:"randipv6",level:3},{value:"<code>randOAuthProvider</code>",id:"randoauthprovider",level:3},{value:"<code>randPort</code>",id:"randport",level:3},{value:"<code>randPost</code>",id:"randpost",level:3},{value:"<code>randProtocol</code>",id:"randprotocol",level:3},{value:"<code>randSemver</code>",id:"randsemver",level:3},{value:"<code>randSlug</code>",id:"randslug",level:3},{value:"<code>randSocial</code>",id:"randsocial",level:3},{value:"<code>randUrl</code>",id:"randurl",level:3},{value:"<code>randUserAgent</code>",id:"randuseragent",level:3}],s={toc:p};function m(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"internet"},"Internet"),(0,t.kt)("h3",{id:"randbrowser"},(0,t.kt)("inlineCode",{parentName:"h3"},"randBrowser")),(0,t.kt)("p",null,"Generate a random browser."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randBrowser } from '@ngneat/falso';\n\nrandBrowser()\nrandBrowser({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randBrowser()}/>;\n}\n")),(0,t.kt)("h3",{id:"randdomainname"},(0,t.kt)("inlineCode",{parentName:"h3"},"randDomainName")),(0,t.kt)("p",null,"Generate a random domain name."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDomainName } from '@ngneat/falso';\n\nrandDomainName()\nrandDomainName({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDomainName()}/>;\n}\n")),(0,t.kt)("h3",{id:"randdomainsuffix"},(0,t.kt)("inlineCode",{parentName:"h3"},"randDomainSuffix")),(0,t.kt)("p",null,"Generate a random domain suffix."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDomainSuffix } from '@ngneat/falso';\n\nrandDomainSuffix()\nrandDomainSuffix({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDomainSuffix()}/>;\n}\n")),(0,t.kt)("h3",{id:"randemailprovider"},(0,t.kt)("inlineCode",{parentName:"h3"},"randEmailProvider")),(0,t.kt)("p",null,"Generate a random email provider."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randEmailProvider } from '@ngneat/falso';\n\nrandEmailProvider()\nrandEmailProvider({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randEmailProvider()}/>;\n}\n")),(0,t.kt)("h3",{id:"randhttpmethod"},(0,t.kt)("inlineCode",{parentName:"h3"},"randHttpMethod")),(0,t.kt)("p",null,"Generate a random http method."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randHttpMethod } from '@ngneat/falso';\n\nrandHttpMethod()\nrandHttpMethod({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randHttpMethod()}/>;\n}\n")),(0,t.kt)("h3",{id:"randintegration"},(0,t.kt)("inlineCode",{parentName:"h3"},"randIntegration")),(0,t.kt)("p",null,"Generate a random integration."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randIntegration } from '@ngneat/falso';\n\nrandIntegrations()\nrandIntegrations({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randIntegration()}/>;\n}\n")),(0,t.kt)("h3",{id:"randip"},(0,t.kt)("inlineCode",{parentName:"h3"},"randIp")),(0,t.kt)("p",null,"Generate a random ip."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randIp } from '@ngneat/falso';\n\nrandIp()\nrandIp({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randIp()}/>;\n}\n")),(0,t.kt)("h3",{id:"randipv6"},(0,t.kt)("inlineCode",{parentName:"h3"},"randIpv6")),(0,t.kt)("p",null,"Generate a random ipv6."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randIpv6 } from '@ngneat/falso';\n\nrandIpv6()\nrandIpv6({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randIpv6()}/>;\n}\n")),(0,t.kt)("h3",{id:"randoauthprovider"},(0,t.kt)("inlineCode",{parentName:"h3"},"randOAuthProvider")),(0,t.kt)("p",null,"Generate a random OAuth provider."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randOAuthProvider } from '@ngneat/falso';\n\nrandOAuthProvider()\nrandOAuthProvider({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randOAuthProvider()}/>;\n}\n")),(0,t.kt)("h3",{id:"randport"},(0,t.kt)("inlineCode",{parentName:"h3"},"randPort")),(0,t.kt)("p",null,"Generate a random port."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPort } from '@ngneat/falso';\n\nrandPort()\nrandPort({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randPort()}/>;\n}\n")),(0,t.kt)("h3",{id:"randpost"},(0,t.kt)("inlineCode",{parentName:"h3"},"randPost")),(0,t.kt)("p",null,"Generate a random post."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPost } from '@ngneat/falso';\n\nrandPost()\nrandPost({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randPost()}/>;\n}\n")),(0,t.kt)("h3",{id:"randprotocol"},(0,t.kt)("inlineCode",{parentName:"h3"},"randProtocol")),(0,t.kt)("p",null,"Generate a random protocol."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randProtocol } from '@ngneat/falso';\n\nrandProtocol()\nrandProtocol({ length: 10 })\nrandProtocol({ fullName: true })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randProtocol()}/>;\n}\n")),(0,t.kt)("h3",{id:"randsemver"},(0,t.kt)("inlineCode",{parentName:"h3"},"randSemver")),(0,t.kt)("p",null,"Generate a random semantic version."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSemver } from '@ngneat/falso';\n\nrandSemver()\nrandSemver({ length: 10 })\nrandSemver({ prefix: 'v' })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSemver()}/>;\n}\n")),(0,t.kt)("h3",{id:"randslug"},(0,t.kt)("inlineCode",{parentName:"h3"},"randSlug")),(0,t.kt)("p",null,"Generate a random slug."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSlug } from '@ngneat/falso';\n\nrandSlug()\nrandSlug({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSlug()}/>;\n}\n")),(0,t.kt)("h3",{id:"randsocial"},(0,t.kt)("inlineCode",{parentName:"h3"},"randSocial")),(0,t.kt)("p",null,"Generate random social network"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSocial } from '@ngneat/falso';\n\nrandSocial()\nrandSocial({ length: 2 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSocial()}/>;\n}\n")),(0,t.kt)("h3",{id:"randurl"},(0,t.kt)("inlineCode",{parentName:"h3"},"randUrl")),(0,t.kt)("p",null,"Generate a random url."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randUrl } from '@ngneat/falso';\n\nrandUrl()\nrandUrl({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randUrl()}/>;\n}\n")),(0,t.kt)("h3",{id:"randuseragent"},(0,t.kt)("inlineCode",{parentName:"h3"},"randUserAgent")),(0,t.kt)("p",null,"Generate a random user agent."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randUserAgent } from '@ngneat/falso';\n\nrandUserAgent()\nrandUserAgent({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randUserAgent()}/>;\n}\n")))}m.isMDXComponent=!0}}]);