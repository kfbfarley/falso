"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[520],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=n(5773),a=n(808),i=(n(7378),n(5318)),o=["components"],l={slug:"/git"},c="Git",m={unversionedId:"auto-generated/git",id:"auto-generated/git",title:"Git",description:"`randGitBranch`",source:"@site/docs/auto-generated/git.mdx",sourceDirName:"auto-generated",slug:"/git",permalink:"/falso/docs/git",editUrl:"https://github.com/ngneat/falso/blob/main/docs/updating-docs.md",tags:[],version:"current",frontMatter:{slug:"/git"},sidebar:"falso",previous:{title:"General",permalink:"/falso/docs/general"},next:{title:"Internet",permalink:"/falso/docs/internet"}},s=[{value:"<code>randGitBranch</code>",id:"randgitbranch",children:[],level:3},{value:"<code>randGitCommitEntry</code>",id:"randgitcommitentry",children:[],level:3},{value:"<code>randGitCommitMessage</code>",id:"randgitcommitmessage",children:[],level:3},{value:"<code>randGitCommitSha</code>",id:"randgitcommitsha",children:[],level:3},{value:"<code>randGitShortSha</code>",id:"randgitshortsha",children:[],level:3}],d={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git"},"Git"),(0,i.kt)("h3",{id:"randgitbranch"},(0,i.kt)("inlineCode",{parentName:"h3"},"randGitBranch")),(0,i.kt)("p",null,"Generate a random git branch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { randGitBranch } from '@ngneat/falso';\n\nrandGitBranch()\nrandGitBranch({ length: 10 })\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randGitBranch()}/>;\n}\n")),(0,i.kt)("h3",{id:"randgitcommitentry"},(0,i.kt)("inlineCode",{parentName:"h3"},"randGitCommitEntry")),(0,i.kt)("p",null,"Generate a random git commit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { randGitCommitEntry } from '@ngneat/falso';\n\nrandGitCommitEntry()\nrandGitCommitEntry({ length: 10 })\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randGitCommitEntry()}/>;\n}\n")),(0,i.kt)("h3",{id:"randgitcommitmessage"},(0,i.kt)("inlineCode",{parentName:"h3"},"randGitCommitMessage")),(0,i.kt)("p",null,"Generate a random git message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { randGitCommitMessage } from '@ngneat/falso';\n\nrandGitCommitMessage()\nrandGitCommitMessage({ length: 10 })\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randGitCommitMessage()}/>;\n}\n")),(0,i.kt)("h3",{id:"randgitcommitsha"},(0,i.kt)("inlineCode",{parentName:"h3"},"randGitCommitSha")),(0,i.kt)("p",null,"Generate a random git sha."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { randGitCommitSha } from '@ngneat/falso';\n\nrandGitCommitSha()\nrandGitCommitSha({ length: 10 })\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randGitCommitSha()}/>;\n}\n")),(0,i.kt)("h3",{id:"randgitshortsha"},(0,i.kt)("inlineCode",{parentName:"h3"},"randGitShortSha")),(0,i.kt)("p",null,"Generate a random git short sha."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { randGitShortSha } from '@ngneat/falso';\n\nrandGitShortSha()\nrandGitShortSha({ length: 10 })\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randGitShortSha()}/>;\n}\n")))}u.isMDXComponent=!0}}]);