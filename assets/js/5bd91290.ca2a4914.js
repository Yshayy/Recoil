(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||b[d]||l;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<l;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(8),l=(n(0),n(154)),r={title:"selector(options)",sidebar_label:"selector()"},c={unversionedId:"api-reference/core/selector",id:"api-reference/core/selector",isDocsHomePage:!1,title:"selector(options)",description:'Selectors represent a function, or derived state in Recoil.  You can think of them as similar to an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values.  If only a get function is provided, the selector is read-only and returns a RecoilValueReadOnly object.  If a set is also provided, it returns a writeable RecoilState object.',source:"@site/docs/api-reference/core/selector.md",slug:"/api-reference/core/selector",permalink:"/docs/api-reference/core/selector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/selector.md",version:"current",sidebar_label:"selector()",sidebar:"docs",previous:{title:"atom(options)",permalink:"/docs/api-reference/core/atom"},next:{title:"class Loadable",permalink:"/docs/api-reference/core/Loadable"}},i=[{value:"Dynamic Dependencies",id:"dynamic-dependencies",children:[]},{value:"Writeable Selectors",id:"writeable-selectors",children:[]},{value:"Asynchronous Selectors",id:"asynchronous-selectors",children:[]},{value:"Example (Synchronous)",id:"example-synchronous",children:[]},{value:"Example (Asynchronous)",id:"example-asynchronous",children:[]},{value:"Returning objects with callbacks",id:"returning-objects-with-callbacks",children:[]},{value:"Cache policy configuration",id:"cache-policy-configuration",children:[]}],s={toc:i};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Selectors")," represent a function, or ",Object(l.b)("strong",{parentName:"p"},"derived state"),' in Recoil.  You can think of them as similar to an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values.  If only a ',Object(l.b)("inlineCode",{parentName:"p"},"get")," function is provided, the selector is read-only and returns a ",Object(l.b)("inlineCode",{parentName:"p"},"RecoilValueReadOnly")," object.  If a ",Object(l.b)("inlineCode",{parentName:"p"},"set")," is also provided, it returns a writeable ",Object(l.b)("inlineCode",{parentName:"p"},"RecoilState")," object."),Object(l.b)("p",null,"Recoil manages atom and selector state changes to know when to notify components subscribing to that selector to re-render.  If an object value of a selector is mutated directly it may bypass this and avoid properly notifying subscribing components.  To help detect bugs, Recoil will freeze selector value objects in development mode."),Object(l.b)("hr",null),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"function selector<T>({\n  key: string,\n\n  get: ({\n    get: GetRecoilValue,\n    getCallback: GetCallback,\n  }) => T | Promise<T> | RecoilValue<T>,\n\n  set?: (\n    {\n      get: GetRecoilValue,\n      set: SetRecoilState,\n      reset: ResetRecoilState,\n    },\n    newValue: T | DefaultValue,\n  ) => void,\n\n  dangerouslyAllowMutability?: boolean,\n\n  cachePolicy_UNSTABLE?: CachePolicy,\n})\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"type ValueOrUpdater<T> = T | DefaultValue | ((prevValue: T) => T | DefaultValue);\ntype GetCallback =\n  <Args, Return>(\n    fn: ({snapshot: Snapshot}) => (...Args) => Return,\n  ) => (...Args) => Return;\n\ntype GetRecoilValue = <T>(RecoilValue<T>) => T;\ntype SetRecoilState = <T>(RecoilState<T>, ValueOrUpdater<T>) => void;\ntype ResetRecoilState = <T>(RecoilState<T>) => void;\n\ntype CachePolicy =\n  | {eviction: 'lru', maxSize: number}\n  | {eviction: 'keep-all'}\n  | {eviction: 'most-recent'};\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"key")," - A unique string used to identify the selector internally. This string should be unique with respect to other atoms and selectors in the entire application.  It needs to be stable across executions if used for persistence."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"get")," - A function that evaluates the value for the derived state.  It may return either a value directly or an asynchronous ",Object(l.b)("inlineCode",{parentName:"li"},"Promise")," or another atom or selector representing the same type.  It is passed an object as the first parameter containing the following properties:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"get()")," - a function used to retrieve values from other atoms/selectors. All atoms/selectors passed to this function will be implicitly added to a list of ",Object(l.b)("strong",{parentName:"li"},"dependencies")," for the selector. If any of the selector's dependencies change, the selector will re-evaluate."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"getCallback()")," - a function for creating Recoil-aware callbacks.  See ",Object(l.b)("a",{parentName:"li",href:"/docs/api-reference/core/selector#returning-objects-with-callbacks"},"example")," below."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"set?")," - If this property is set, the selector will return ",Object(l.b)("strong",{parentName:"li"},"writeable")," state. A function that is passed an object of callbacks as the first parameter and the new incoming value.  The incoming value may be a value of type ",Object(l.b)("inlineCode",{parentName:"li"},"T")," or maybe an object of type ",Object(l.b)("inlineCode",{parentName:"li"},"DefaultValue")," if the user reset the selector.  The callbacks include:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"get()")," - a function used to retrieve values from other atoms/selectors. This function will not subscribe the selector to the given atoms/selectors."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"set()")," - a function used to set the values of upstream Recoil state. The first parameter is the Recoil state and the second parameter is the new value.  The new value may be an updater function or a ",Object(l.b)("inlineCode",{parentName:"li"},"DefaultValue")," object to propagate reset actions."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"reset()")," - a function used to reset to the default values of upstream Recoil state. The only parameter is the Recoil state."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - In some cases it may be desireable allow mutating of objects stored in selectors that don't represent state changes.  Use this option to override freezing objects in development mode."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cachePolicy_UNSTABLE")," - Defines the behavior of the internal selector cache. Can be useful to control the memory footprint in apps that have selectors with many changing dependencies.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"eviction")," - can be set to ",Object(l.b)("inlineCode",{parentName:"li"},"lru")," (which requires that a ",Object(l.b)("inlineCode",{parentName:"li"},"maxSize")," is set), ",Object(l.b)("inlineCode",{parentName:"li"},"keep-all")," (default), or ",Object(l.b)("inlineCode",{parentName:"li"},"most-recent"),". An ",Object(l.b)("inlineCode",{parentName:"li"},"lru")," cache will evict the least-recently-used value from the selector cache when the size of the cache exceeds ",Object(l.b)("inlineCode",{parentName:"li"},"maxSize"),". A ",Object(l.b)("inlineCode",{parentName:"li"},"keep-all")," policy will mean all selector dependencies and their values will be indefinitely stored in the selector cache. A ",Object(l.b)("inlineCode",{parentName:"li"},"most-recent")," policy will use a cache of size 1 and will retain only the most recently saved set of dependencies and their values."),Object(l.b)("li",{parentName:"ul"},"Note the cache stores the values of the selector based on a key containing all dependencies and their values. This means the size of the internal selector cache depends on both the size of the selector values as well as the number of unique values of all dependencies."),Object(l.b)("li",{parentName:"ul"},"Note the default eviction policy (currently ",Object(l.b)("inlineCode",{parentName:"li"},"keep-all"),") may change in the future.")))),Object(l.b)("hr",null),Object(l.b)("p",null,"A selector with a simple static dependency:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => get(myAtom) * 100,\n});\n")),Object(l.b)("h3",{id:"dynamic-dependencies"},"Dynamic Dependencies"),Object(l.b)("p",null,"A read-only selector has a ",Object(l.b)("inlineCode",{parentName:"p"},"get")," method which evaluates the value of the selector based on dependencies.  If any of those dependencies are updated, then the selector will re-evaluate.  The dependencies are dynamically determined based on the atoms or selectors you actually use when evaluating the selector.  Depending on the values of the previous dependencies, you may dynamically use different additional dependencies.  Recoil will automatically update the current data-flow graph so that the selector is only subscribed to updates from the current set of dependencies"),Object(l.b)("p",null,"In this example ",Object(l.b)("inlineCode",{parentName:"p"},"mySelector")," will depend on the ",Object(l.b)("inlineCode",{parentName:"p"},"toggleState")," atom as well as either ",Object(l.b)("inlineCode",{parentName:"p"},"selectorA")," or ",Object(l.b)("inlineCode",{parentName:"p"},"selectorB")," depending on the state of ",Object(l.b)("inlineCode",{parentName:"p"},"toggleState"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const toggleState = atom({key: 'Toggle', default: false});\n\nconst mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => {\n    const toggle = get(toggleState);\n    if (toggle) {\n      return get(selectorA);\n    } else {\n      return get(selectorB);\n    }\n  },\n});\n")),Object(l.b)("h3",{id:"writeable-selectors"},"Writeable Selectors"),Object(l.b)("p",null,"A bi-directional selector receives the incoming value as a parameter and can use that to propagate the changes back upstream along the data-flow graph.  Because the user may either set the selector with a new value or reset the selector, the incoming value is either of the same type that the selector represents or a ",Object(l.b)("inlineCode",{parentName:"p"},"DefaultValue")," object which represents a reset action."),Object(l.b)("p",null,"This simple selector essentially wraps an atom to add an additional field.  It just passes through set and reset operations to the upstream atom."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const proxySelector = selector({\n  key: 'ProxySelector',\n  get: ({get}) => ({...get(myAtom), extraField: 'hi'}),\n  set: ({set}, newValue) => set(myAtom, newValue),\n});\n")),Object(l.b)("p",null,"This selector transforms the data, so needs to check if the incoming value is a ",Object(l.b)("inlineCode",{parentName:"p"},"DefaultValue"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const transformSelector = selector({\n  key: 'TransformSelector',\n  get: ({get}) => get(myAtom) * 100,\n  set: ({set}, newValue) =>\n    set(myAtom, newValue instanceof DefaultValue ? newValue : newValue / 100),\n});\n")),Object(l.b)("h3",{id:"asynchronous-selectors"},"Asynchronous Selectors"),Object(l.b)("p",null,"Selectors may also have asynchronous evaluation functions and return a ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," to the output value.  Please see ",Object(l.b)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"this guide")," for more information."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const myQuery = selector({\n  key: 'MyQuery',\n  get: async ({get}) => {\n    return await myAsyncQuery(get(queryParamState));\n  }\n});\n")),Object(l.b)("h3",{id:"example-synchronous"},"Example (Synchronous)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, selector, useRecoilState, DefaultValue} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelsius = selector({\n  key: 'tempCelsius',\n  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) =>\n    set(\n      tempFahrenheit,\n      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32\n    ),\n});\n\nfunction TempCelsius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelsius);\n  const resetTemp = useResetRecoilState(tempCelsius);\n\n  const addTenCelsius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n  const reset = () => resetTemp();\n\n  return (\n    <div>\n      Temp (Celsius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelsius}>Add 10 Celsius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n      <br />\n      <button onClick={reset}>>Reset</button>\n    </div>\n  );\n}\n")),Object(l.b)("h3",{id:"example-asynchronous"},"Example (Asynchronous)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import {selector, useRecoilValue} from 'recoil';\n\nconst myQuery = selector({\n  key: 'MyDBQuery',\n  get: async () => {\n    const response = await fetch(getMyRequestUrl());\n    return response.json();\n  },\n});\n\nfunction QueryResults() {\n  const queryResults = useRecoilValue(myQuery);\n\n  return (\n    <div>\n      {queryResults.foo}\n    </div>\n  );\n}\n\nfunction ResultsSection() {\n  return (\n    <React.Suspense fallback={<div>Loading...</div>}>\n      <QueryResults />\n    </React.Suspense>\n  );\n}\n")),Object(l.b)("p",null,"Please see ",Object(l.b)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"this guide")," for more complex examples."),Object(l.b)("h3",{id:"returning-objects-with-callbacks"},"Returning objects with callbacks"),Object(l.b)("p",null,"Sometimes selectors can be used to return objects that contain callbacks.  It may be helpful for these callbacks to access Recoil state, such as for querying typeahead values or click handlers.  The following example uses a selector to generate menu items with a click handler that accesses Recoil state.  This can be useful when passing these objects to frameworks or logic outside the context of a React component."),Object(l.b)("p",null,"There is symmetry between this callback and using ",Object(l.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},Object(l.b)("inlineCode",{parentName:"a"},"useRecoilCallback()")),".  Note that the callback returned by ",Object(l.b)("inlineCode",{parentName:"p"},"getCallback()")," can be used as an async callback to access Recoil state later, it should not be called during the evaluation of the selector value itself."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const menuItemState = selectorFamily({\n  key: 'MenuItem',\n  get: itemID => ({get, getCallback}) => {\n    const name = get(itemNameQuery(itemID));\n    const onClick = getCallback(({snapshot}) => async () => {\n      const info = await snapshot.getPromise(itemInfoQuery(itemID));\n      displayInfoModal(info);\n    });\n    return {\n      title: `Show info for ${name}`,\n      onClick,\n    };\n  },\n});\n")),Object(l.b)("h2",{id:"cache-policy-configuration"},"Cache policy configuration"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"cachePolicy_UNSTABLE")," property allows you to configure the caching behavior of a selector's internal cache. This property can be useful for reducing memory in applications that have a large number of selectors that have a large number of changing dependencies. For now the only configurable option is ",Object(l.b)("inlineCode",{parentName:"p"},"eviction"),", but we may add more in the future."),Object(l.b)("p",null,"Below is an example of how you might use this new property:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const clockState = selector({\n  key: 'clockState',\n  get: ({get}) => {\n    const hour = get(hourState);\n    const minute = get(minuteState);\n    const second = get(secondState); // will re-run every second\n\n    return `${hour}:${minute}:${second}`;\n  },\n  cachePolicy_UNSTABLE: {\n    // Only store the most recent set of dependencies and their values\n    eviction: 'most-recent',\n  },\n});\n")),Object(l.b)("p",null,"In the example above, ",Object(l.b)("inlineCode",{parentName:"p"},"clockState")," recalculates every second, adding a new set of dependency values to the internal cache, which may lead to a memory issue over time as the internal cache grows indefinitely. Using the ",Object(l.b)("inlineCode",{parentName:"p"},"most-recent")," eviction policy, the internal selector cache will only retain the most recent set of dependencies and their values, along with the actual selector value based on those dependencies, thus solving the memory issue."),Object(l.b)("p",null,"Current eviction options are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"lru")," - evicts the least-recently-used value from the cache when the size exceeds ",Object(l.b)("inlineCode",{parentName:"li"},"maxSize"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"most-recent")," - retains only the most recent value."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"keep-all")," (",Object(l.b)("em",{parentName:"li"},"default"),") - keeps all entries in the cache and does not evict.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"NOTE:"))," ",Object(l.b)("em",{parentName:"p"},"The default eviction policy (currently ",Object(l.b)("inlineCode",{parentName:"em"},"keep-all"),") may change in the future."))))}u.isMDXComponent=!0}}]);