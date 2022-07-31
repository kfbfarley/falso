"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[193],{5318:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return s}});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),s=a,g=p["".concat(c,".").concat(s)]||p[s]||m[s]||o;return r?t.createElement(g,l(l({ref:n},d),{},{components:r})):t.createElement(g,l({ref:n},d))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8627:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var t=r(5773),a=r(808),o=(r(7378),r(5318)),l=["components"],i={slug:"/math"},c="Math",u={unversionedId:"auto-generated/math",id:"auto-generated/math",title:"Math",description:"`randAggregation`",source:"@site/docs/auto-generated/math.mdx",sourceDirName:"auto-generated",slug:"/math",permalink:"/falso/docs/math",editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/math"},sidebar:"falso",previous:{title:"Jobs",permalink:"/falso/docs/jobs"},next:{title:"Movie",permalink:"/falso/docs/movie"}},d=[{value:"<code>randAggregation</code>",id:"randaggregation",children:[],level:3},{value:"<code>randBinary</code>",id:"randbinary",children:[],level:3},{value:"<code>randFloat</code>",id:"randfloat",children:[],level:3},{value:"<code>randNumber</code>",id:"randnumber",children:[],level:3},{value:"<code>randOctal</code>",id:"randoctal",children:[],level:3}],m={toc:d};function p(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"math"},"Math"),(0,o.kt)("h3",{id:"randaggregation"},(0,o.kt)("inlineCode",{parentName:"h3"},"randAggregation")),(0,o.kt)("p",null,"Generate a list of numbers that add up to a total value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAggregation } from '@ngneat/falso';\n\nrandAggregation() // default values is 2 and totalValue is 100\nrandAggregation({ values: 3, totalValue: 1500, length: 10 })\nrandAggregation({ values: 3 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAggregation()}/>;\n}\n")),(0,o.kt)("h3",{id:"randbinary"},(0,o.kt)("inlineCode",{parentName:"h3"},"randBinary")),(0,o.kt)("p",null,"Generate a random binary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randBinary } from '@ngneat/falso';\n\nrandBinary()\nrandBinary({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randBinary()}/>;\n}\n")),(0,o.kt)("h3",{id:"randfloat"},(0,o.kt)("inlineCode",{parentName:"h3"},"randFloat")),(0,o.kt)("p",null,"Generate a random float."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randFloat } from '@ngneat/falso';\n\nrandFloat()\nrandFloat({ length: 10 })\nrandFloat({ min: 10, max: 20, fraction: 1 }) // 12.5\nrandFloat({ min: 10, max: 20, fraction: 2 }) // 12.52\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randFloat()}/>;\n}\n")),(0,o.kt)("h3",{id:"randnumber"},(0,o.kt)("inlineCode",{parentName:"h3"},"randNumber")),(0,o.kt)("p",null,"Generate a random number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randNumber } from '@ngneat/falso';\n\nrandNumber()\nrandNumber({ length: 10 })\nrandNumber({ min: 10, max: 1000 }) // default is 'min': 0, 'max': 999_999\nrandNumber({ min: 0.1, max: 1, fraction: 2 }) // 0.37\nrandNumber({ min: 1000, max: 100000, precision: 1000 }) // 67_000\nrandNumber({ min: 1000, max: 2000, precision: 100 }) // 1_200\nrandNumber({ min: 1000, max: 2000, precision: 10 }) // 1_250\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randNumber()}/>;\n}\n")),(0,o.kt)("h3",{id:"randoctal"},(0,o.kt)("inlineCode",{parentName:"h3"},"randOctal")),(0,o.kt)("p",null,"Generate a random octal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randOctal } from '@ngneat/falso';\n\nrandOctal()\nrandOctal({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randOctal()}/>;\n}\n")))}p.isMDXComponent=!0}}]);