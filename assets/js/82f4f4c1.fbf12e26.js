(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(154)),l={title:"selectorFamily(options)",sidebar_label:"selectorFamily()"},o={unversionedId:"api-reference/utils/selectorFamily",id:"api-reference/utils/selectorFamily",isDocsHomePage:!1,title:"selectorFamily(options)",description:"Returns a function that returns a read-only RecoilValueReadOnly or writeable RecoilState selector.",source:"@site/docs/api-reference/utils/selectorFamily.md",slug:"/api-reference/utils/selectorFamily",permalink:"/docs/api-reference/utils/selectorFamily",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/selectorFamily.md",version:"current",sidebar_label:"selectorFamily()",sidebar:"docs",previous:{title:"atomFamily(options)",permalink:"/docs/api-reference/utils/atomFamily"},next:{title:"constSelector(constant)",permalink:"/docs/api-reference/utils/constSelector"}},c=[{value:"Example",id:"example",children:[]},{value:"Async Query Example",id:"async-query-example",children:[]},{value:"Destructuring Example",id:"destructuring-example",children:[]},{value:"Cache policy configuration",id:"cache-policy-configuration",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Returns a function that returns a read-only ",Object(i.b)("inlineCode",{parentName:"p"},"RecoilValueReadOnly")," or writeable ",Object(i.b)("inlineCode",{parentName:"p"},"RecoilState")," selector."),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"selectorFamily")," is a powerful pattern that is similar to a ",Object(i.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},Object(i.b)("inlineCode",{parentName:"a"},"selector")),", but allows you to pass parameters to the ",Object(i.b)("inlineCode",{parentName:"p"},"get")," and ",Object(i.b)("inlineCode",{parentName:"p"},"set")," callbacks of a ",Object(i.b)("inlineCode",{parentName:"p"},"selector"),".  The ",Object(i.b)("inlineCode",{parentName:"p"},"selectorFamily()")," utility returns a function which can be called with user-defined parameters and returns a selector. Each unique parameter value will return the same memoized selector instance."),Object(i.b)("hr",null),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"function selectorFamily<T, Parameter>({\n  key: string,\n\n  get: Parameter => ({get: GetRecoilValue}) => Promise<T> | RecoilValue<T> | T,\n\n  dangerouslyAllowMutability?: boolean,\n}): Parameter => RecoilValueReadOnly<T>\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"function selectorFamily<T, Parameter>({\n  key: string,\n\n  get: Parameter => ({get: GetRecoilValue}) => Promise<T> | RecoilValue<T> | T,\n\n  set: Parameter => (\n    {\n      get: GetRecoilValue,\n      set: SetRecoilValue,\n      reset: ResetRecoilValue,\n    },\n    newValue: T | DefaultValue,\n  ) => void,\n\n  dangerouslyAllowMutability?: boolean,\n\n  cachePolicy_UNSTABLE?: CachePolicy,\n}): Parameter => RecoilState<T>\n")),Object(i.b)("p",null,"Where"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"type ValueOrUpdater<T> =  T | DefaultValue | ((prevValue: T) => T | DefaultValue);\ntype GetRecoilValue = <T>(RecoilValue<T>) => T;\ntype SetRecoilValue = <T>(RecoilState<T>, ValueOrUpdater<T>) => void;\ntype ResetRecoilValue = <T>(RecoilState<T>) => void;\n\ntype CachePolicy =\n  | {eviction: 'lru', maxSize: number}\n  | {eviction: 'keep-all'}\n  | {eviction: 'most-recent'};\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"key")," - A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get")," - A function that is passed an object of named callbacks that returns the value of the selector, the same as the ",Object(i.b)("inlineCode",{parentName:"li"},"selector()")," interface. This is wrapped by a function which is passed the parameter from calling the selector family function."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set?")," - An optional function that will produce writeable selectors when provided. It should be a function that takes an object of named callbacks, same as the ",Object(i.b)("inlineCode",{parentName:"li"},"selector()")," interface. This is again wrapped by another function with gets the parameters from calling the selector family function."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cachePolicy_UNSTABLE")," - Defines the behavior of the internal selector cache for ",Object(i.b)("strong",{parentName:"li"},"the invidual selectors")," that make up the family (it does not control the number of selectors that are stored in the family). Can be useful to control the memory footprint in apps that have selectors with many changing dependencies.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"eviction")," - can be set to ",Object(i.b)("inlineCode",{parentName:"li"},"lru")," (which requires that a ",Object(i.b)("inlineCode",{parentName:"li"},"maxSize")," is set), ",Object(i.b)("inlineCode",{parentName:"li"},"keep-all")," (default), or ",Object(i.b)("inlineCode",{parentName:"li"},"most-recent"),". An ",Object(i.b)("inlineCode",{parentName:"li"},"lru")," cache will evict the least-recently-used value from the selector cache when the size of the cache exceeds ",Object(i.b)("inlineCode",{parentName:"li"},"maxSize"),". A ",Object(i.b)("inlineCode",{parentName:"li"},"keep-all")," policy will mean all selector dependencies and their values will be indefinitely stored in the selector cache. A ",Object(i.b)("inlineCode",{parentName:"li"},"most-recent")," policy will use a cache of size 1 and will retain only the most recently saved set of dependencies and their values."),Object(i.b)("li",{parentName:"ul"},"Note the ",Object(i.b)("inlineCode",{parentName:"li"},"maxSize")," property used alongside ",Object(i.b)("inlineCode",{parentName:"li"},"lru")," does not control the max size of the family itself, it only controls the eviction policy used in the invidiual selectors that make up the family."),Object(i.b)("li",{parentName:"ul"},"Note the cache stores the values of the selector based on a key containing all dependencies and their values. This means the size of the internal selector cache depends on both the size of the selector values as well as the number of unique values of all dependencies."),Object(i.b)("li",{parentName:"ul"},"Note the default eviction policy (currently ",Object(i.b)("inlineCode",{parentName:"li"},"keep-all"),") may change in the future.")))),Object(i.b)("hr",null),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"selectorFamily")," essentially provides a map from the parameter to a selector.  Because the parameters are often generated at the callsites using the family, and we want equivalent parameters to re-use the same underlying selector, it uses value-equality by default instead of reference-equality.  (There is an unstable API to adjust this behavior).  This imposes restrictions on the types which can be used for the parameter.  Please use a primitive type or an object that can be serialized.  Recoil uses a custom serializer that can support objects and arrays, some containers (such as ES6 Sets and Maps), is invariant of object key ordering, supports Symbols, Iterables, and uses ",Object(i.b)("inlineCode",{parentName:"p"},"toJSON")," properties for custom serialization (such as provided with libraries like Immutable containers).  Using functions or mutable objects, such as Promises, in parameters is problematic."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const myNumberState = atom({\n  key: 'MyNumber',\n  default: 2,\n});\n\nconst myMultipliedState = selectorFamily({\n  key: 'MyMultipliedNumber',\n  get: (multiplier) => ({get}) => {\n    return get(myNumberState) * multiplier;\n  },\n\n  // optional set\n  set: (multiplier) => ({set}, newValue) => {\n    set(myNumberState, newValue / multiplier);\n  },\n});\n\nfunction MyComponent() {\n  // defaults to 2\n  const number = useRecoilValue(myNumberState);\n\n  // defaults to 200\n  const multipliedNumber = useRecoilValue(myMultipliedState(100));\n\n  return <div>...</div>;\n}\n")),Object(i.b)("h2",{id:"async-query-example"},"Async Query Example"),Object(i.b)("p",null,'Selector Families are also useful to use for passing parameters to queries.  Note that using a selector to abstract queries like this should still be "pure" functions which always return the same result for a given set of inputs and dependency values.  See ',Object(i.b)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"this guide")," for more examples."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const myDataQuery = selectorFamily({\n  key: 'MyDataQuery',\n  get: (queryParameters) => async ({get}) => {\n    const response = await asyncDataRequest(queryParameters);\n    if (response.error) {\n      throw response.error;\n    }\n    return response.data;\n  },\n});\n\nfunction MyComponent() {\n  const data = useRecoilValue(myDataQuery({userID: 132}));\n  return <div>...</div>;\n}\n")),Object(i.b)("h2",{id:"destructuring-example"},"Destructuring Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const formState = atom({\n  key: 'formState',\n  default: {\n    field1: \"1\",\n    field2: \"2\",\n    field3: \"3\",\n  },\n});\n\nconst formFieldState = selectorFamily({\n  key: 'FormField',\n  get: field => ({get}) => get(formState)[field],\n  set: field => ({set}, newValue) =>\n    set(formState, prevState => {...prevState, [field]: newValue}),\n});\n\nconst Component1 = () => {\n  const [value, onChange] = useRecoilState(formFieldState('field1'));\n  return (\n    <>\n      <input value={value} onChange={onChange} />\n      <Component2 />\n    </>\n  );\n}\n\nconst Component2 = () => {\n  const [value, onChange] = useRecoilState(formFieldState('field2'));\n  return (\n    <input value={value} onChange={onChange} />\n  );\n}\n")),Object(i.b)("h2",{id:"cache-policy-configuration"},"Cache policy configuration"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cachePolicy_UNSTABLE")," property allows you to configure the caching behavior of ",Object(i.b)("strong",{parentName:"p"},"individual selectors")," that make up the family. This property can be useful for reducing memory in applications that have a large number of selectors that have a large number of changing dependencies.  Please see the ",Object(i.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector#cache-policy-configuration"},"selector cache policy configuration documentation"),"."))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(l,".").concat(b)]||p[b]||m[b]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);