"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[286],{5318:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(7378);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),i=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=i(e.components);return t.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(n),m=r,b=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?t.createElement(b,l(l({ref:a},p),{},{components:n})):t.createElement(b,l({ref:a},p))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3174:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var t=n(5773),r=(n(7378),n(5318));const o={slug:"/database"},l="Database",s={unversionedId:"auto-generated/database",id:"auto-generated/database",title:"Database",description:"`randDatabaseCollation`",source:"@site/docs/auto-generated/database.mdx",sourceDirName:"auto-generated",slug:"/database",permalink:"/falso/docs/database",draft:!1,editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/database"},sidebar:"falso",previous:{title:"Company",permalink:"/falso/docs/company"},next:{title:"Datatype",permalink:"/falso/docs/datatype"}},d={},i=[{value:"<code>randDatabaseCollation</code>",id:"randdatabasecollation",level:3},{value:"<code>randDatabaseColumn</code>",id:"randdatabasecolumn",level:3},{value:"<code>randDatabaseEngine</code>",id:"randdatabaseengine",level:3},{value:"<code>randDatabaseType</code>",id:"randdatabasetype",level:3},{value:"<code>randUuid</code>",id:"randuuid",level:3}],p={toc:i};function u(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"database"},"Database"),(0,r.kt)("h3",{id:"randdatabasecollation"},(0,r.kt)("inlineCode",{parentName:"h3"},"randDatabaseCollation")),(0,r.kt)("p",null,"Generate a random database collation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDatabaseCollation } from '@ngneat/falso';\n\nrandDatabaseCollation()\nrandDatabaseCollation({ length: 10 })\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDatabaseCollation()}/>;\n}\n")),(0,r.kt)("h3",{id:"randdatabasecolumn"},(0,r.kt)("inlineCode",{parentName:"h3"},"randDatabaseColumn")),(0,r.kt)("p",null,"Generate a random database column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDatabaseColumn } from '@ngneat/falso';\n\nrandDatabaseColumn()\nrandDatabaseColumn({ length: 10 })\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDatabaseColumn()}/>;\n}\n")),(0,r.kt)("h3",{id:"randdatabaseengine"},(0,r.kt)("inlineCode",{parentName:"h3"},"randDatabaseEngine")),(0,r.kt)("p",null,"Generate a random database engine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDatabaseEngine } from '@ngneat/falso';\n\nrandDatabaseEngine()\nrandDatabaseEngine({ length: 10 })\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDatabaseEngine()}/>;\n}\n")),(0,r.kt)("h3",{id:"randdatabasetype"},(0,r.kt)("inlineCode",{parentName:"h3"},"randDatabaseType")),(0,r.kt)("p",null,"Generate a random database type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { randDatabaseType } from '@ngneat/falso';\n\nrandDatabaseType()\nrandDatabaseType({ length: 10 })\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randDatabaseType()}/>;\n}\n")),(0,r.kt)("h3",{id:"randuuid"},(0,r.kt)("inlineCode",{parentName:"h3"},"randUuid")),(0,r.kt)("p",null,"Generate a random uuid."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { randUuid } from '@ngneat/falso';\n\nrandUuid()\nrandUuid({ length: 10 })\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randUuid()}/>;\n}\n")))}u.isMDXComponent=!0}}]);