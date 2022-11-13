"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[117],{5318:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var r=a(7378);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=r.createContext({}),p=function(e){var n=r.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(a),m=t,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(g,o(o({ref:n},s),{},{components:a})):r.createElement(g,o({ref:n},s))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,o=new Array(l);o[0]=u;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:t,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2210:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=a(5773),t=(a(7378),a(5318));const l={slug:"/text"},o="Text",d={unversionedId:"auto-generated/text",id:"auto-generated/text",title:"Text",description:"`randAbbreviation`",source:"@site/docs/auto-generated/text.mdx",sourceDirName:"auto-generated",slug:"/text",permalink:"/falso/docs/text",draft:!1,editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/text"},sidebar:"falso",previous:{title:"System",permalink:"/falso/docs/system"},next:{title:"User",permalink:"/falso/docs/user"}},i={},p=[{value:"<code>randAbbreviation</code>",id:"randabbreviation",level:3},{value:"<code>randAlpha</code>",id:"randalpha",level:3},{value:"<code>randAlphaNumeric</code>",id:"randalphanumeric",level:3},{value:"<code>randCatchPhrase</code>",id:"randcatchphrase",level:3},{value:"<code>randEmoji</code>",id:"randemoji",level:3},{value:"<code>randLine</code>",id:"randline",level:3},{value:"<code>randLines</code>",id:"randlines",level:3},{value:"<code>randParagraph</code>",id:"randparagraph",level:3},{value:"<code>randPhrase</code>",id:"randphrase",level:3},{value:"<code>randQuote</code>",id:"randquote",level:3},{value:"<code>randSentence</code>",id:"randsentence",level:3},{value:"<code>randText</code>",id:"randtext",level:3},{value:"<code>randTextRange</code>",id:"randtextrange",level:3},{value:"<code>randVerb</code>",id:"randverb",level:3},{value:"<code>randWord</code>",id:"randword",level:3}],s={toc:p};function c(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"text"},"Text"),(0,t.kt)("h3",{id:"randabbreviation"},(0,t.kt)("inlineCode",{parentName:"h3"},"randAbbreviation")),(0,t.kt)("p",null,"Generate a random abbreviation."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAbbreviation } from '@ngneat/falso';\n\nrandAbbreviation()\nrandAbbreviation({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAbbreviation()}/>;\n}\n")),(0,t.kt)("h3",{id:"randalpha"},(0,t.kt)("inlineCode",{parentName:"h3"},"randAlpha")),(0,t.kt)("p",null,"Get a random alpha."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAlpha } from '@ngneat/falso';\n\nrandAlpha()\nrandAlpha({ length: 3 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAlpha()}/>;\n}\n")),(0,t.kt)("h3",{id:"randalphanumeric"},(0,t.kt)("inlineCode",{parentName:"h3"},"randAlphaNumeric")),(0,t.kt)("p",null,"Get a random alpha or numeric."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randAlphaNumeric } from '@ngneat/falso';\n\nrandAlphaNumeric()\nrandAlphaNumeric({ length: 3 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randAlphaNumeric()}/>;\n}\n")),(0,t.kt)("h3",{id:"randcatchphrase"},(0,t.kt)("inlineCode",{parentName:"h3"},"randCatchPhrase")),(0,t.kt)("p",null,"Generate a random catch phrase."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCatchPhrase } from '@ngneat/falso';\n\nrandCatchPhrase()\nrandCatchPhrase({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCatchPhrase()}/>;\n}\n")),(0,t.kt)("h3",{id:"randemoji"},(0,t.kt)("inlineCode",{parentName:"h3"},"randEmoji")),(0,t.kt)("p",null,"Generate a random emoji."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randEmoji } from '@ngneat/falso';\n\nrandEmoji()\nrandEmoji({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randEmoji()}/>;\n}\n")),(0,t.kt)("h3",{id:"randline"},(0,t.kt)("inlineCode",{parentName:"h3"},"randLine")),(0,t.kt)("p",null,"Generate random lines."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randLine } from '@ngneat/falso';\n\nrandLine()\nrandLine({ lineCount: 10 }) // default is 5\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randLine()}/>;\n}\n")),(0,t.kt)("h3",{id:"randlines"},(0,t.kt)("inlineCode",{parentName:"h3"},"randLines")),(0,t.kt)("p",null,"Generate a random lines."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randLines } from '@ngneat/falso';\n\nrandLines()\nrandLines({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randLines()}/>;\n}\n")),(0,t.kt)("h3",{id:"randparagraph"},(0,t.kt)("inlineCode",{parentName:"h3"},"randParagraph")),(0,t.kt)("p",null,"Generate a random paragraph."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randParagraph } from '@ngneat/falso';\n\nrandParagraph()\nrandParagraph({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randParagraph()}/>;\n}\n")),(0,t.kt)("h3",{id:"randphrase"},(0,t.kt)("inlineCode",{parentName:"h3"},"randPhrase")),(0,t.kt)("p",null,"Generate a random phrase."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randPhrase } from '@ngneat/falso';\n\nrandPhrase()\nrandPhrase({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randPhrase()}/>;\n}\n")),(0,t.kt)("h3",{id:"randquote"},(0,t.kt)("inlineCode",{parentName:"h3"},"randQuote")),(0,t.kt)("p",null,"Generate a random quote."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randQuote } from '@ngneat/falso';\n\nrandQuote()\nrandQuote({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randQuote()}/>;\n}\n")),(0,t.kt)("h3",{id:"randsentence"},(0,t.kt)("inlineCode",{parentName:"h3"},"randSentence")),(0,t.kt)("p",null,"Generate a random sentence."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSentence } from '@ngneat/falso';\n\nrandSentence()\nrandSentence({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSentence()}/>;\n}\n")),(0,t.kt)("h3",{id:"randtext"},(0,t.kt)("inlineCode",{parentName:"h3"},"randText")),(0,t.kt)("p",null,"Generate a random text."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randText } from '@ngneat/falso';\n\nrandText()\nrandText({ length: 10 })\nrandText({ charCount: 10 }) // default is 10\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randText()}/>;\n}\n")),(0,t.kt)("h3",{id:"randtextrange"},(0,t.kt)("inlineCode",{parentName:"h3"},"randTextRange")),(0,t.kt)("p",null,"Generate a random text range."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randTextRange } from '@ngneat/falso';\n\nrandTextRange({ min: 10, max: 100 })\nrandTextRange({ min: 10, max: 100, length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randTextRange({ min: 10, max: 100 })}/>;\n}\n")),(0,t.kt)("h3",{id:"randverb"},(0,t.kt)("inlineCode",{parentName:"h3"},"randVerb")),(0,t.kt)("p",null,"Generate a random verb."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randVerb } from '@ngneat/falso';\n\nrandVerb()\nrandVerb({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randVerb()}/>;\n}\n")),(0,t.kt)("h3",{id:"randword"},(0,t.kt)("inlineCode",{parentName:"h3"},"randWord")),(0,t.kt)("p",null,"Generate a random word."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { randWord } from '@ngneat/falso';\n\nrandWord()\nrandWord({ capitalize: true }) // default is false\nrandWord({ length: 10 })\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randWord()}/>;\n}\n")))}c.isMDXComponent=!0}}]);