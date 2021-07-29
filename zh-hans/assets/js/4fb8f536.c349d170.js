(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{154:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=t,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return r?a.a.createElement(f,i(i({ref:n},p),{},{components:r})):a.a.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},98:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(8),o=(r(0),r(154)),c={title:"waitForAny(dependencies)",sidebar_label:"waitForAny()"},i={unversionedId:"api-reference/utils/waitForAny",id:"api-reference/utils/waitForAny",isDocsHomePage:!1,title:"waitForAny(dependencies)",description:"\u4e00\u4e2a\u8fd4\u56de\u4e00\u7ec4\u8868\u793a\u8bf7\u6c42\u4f9d\u8d56\u9879\u5f53\u524d\u72b6\u6001\u7684 Loadables \u7684\u5e76\u53d1 helper \u65b9\u6cd5\u3002\u5b83\u5c06\u4e00\u76f4\u7b49\u5f85\uff0c\u76f4\u5230\u81f3\u5c11\u6709\u4e00\u4e2a\u4f9d\u8d56\u9879\u53ef\u7528\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAny.md",slug:"/api-reference/utils/waitForAny",permalink:"/zh-hans/docs/api-reference/utils/waitForAny",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAny.md",version:"current",sidebar_label:"waitForAny()",sidebar:"docs",previous:{title:"waitForNone(dependencies)",permalink:"/zh-hans/docs/api-reference/utils/waitForNone"},next:{title:"useRecoilTransaction_UNSTABLE(callback, deps)",permalink:"/zh-hans/docs/api-reference/core/useRecoilTransaction"}},l=[],p={toc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u4e00\u4e2a\u8fd4\u56de\u4e00\u7ec4\u8868\u793a\u8bf7\u6c42\u4f9d\u8d56\u9879\u5f53\u524d\u72b6\u6001\u7684 ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},Object(o.b)("inlineCode",{parentName:"a"},"Loadables"))," \u7684\u5e76\u53d1 helper \u65b9\u6cd5\u3002\u5b83\u5c06\u4e00\u76f4\u7b49\u5f85\uff0c\u76f4\u5230\u81f3\u5c11\u6709\u4e00\u4e2a\u4f9d\u8d56\u9879\u53ef\u7528\u3002"),Object(o.b)("p",null,"\u4f9d\u8d56\u9879\u53ef\u4ee5\u4f5c\u4e3a\u5143\u7ec4\u6570\u7ec4\u63d0\u4f9b\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u5bf9\u8c61\u4e2d\u7684\u547d\u540d\u4f9d\u8d56\u9879\u63d0\u4f9b\u3002"),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAny(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArrayOfLoadables>\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAny(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObjectOfLoadables>\n")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"waitForAny()")," \u7c7b\u4f3c\u4e8e ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/utils/waitForNone"},Object(o.b)("inlineCode",{parentName:"a"},"waitForNone()")),"\uff0c\u53ea\u662f\u5b83\u8981\u7b49\u5230\u81f3\u5c11\u6709\u4e00\u4e2a\u4f9d\u8d56\u9879\u5177\u6709\u53ef\u7528\u7684\u503c (\u6216\u9519\u8bef) \uff0c\u800c\u4e0d\u662f\u7acb\u5373\u8fd4\u56de\u3002"))}u.isMDXComponent=!0}}]);