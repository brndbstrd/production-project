(self.webpackChunktypescript=self.webpackChunktypescript||[]).push([[590],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./config/storybook/preview.tsx")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'*{margin:0;padding:0;box-sizing:border-box}:root{--font-family-main: consolas, "Times New Roman", serif;--font-size-m: 16px;--font-size-l: 24px;--font-m: var(--font-size-m) / var(--font-size-m) var(--font-family-main);--font-l: var(--font-size-l) / var(--font-size-l) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px}:root{--bg-color: #e8e8ea;--inverted-bg-color: #090949;--primary-color: #0232c2;--secondary-color: #0452ff;--inverted-primary-color: #049604;--inverted-secondary-color: #04ff04}.app.dark{--bg-color: #090949;--inverted-bg-color: #e8e8ea;--primary-color: #049604;--secondary-color: #04ff04;--inveted-primary-color: #0232c2;--inveted-secondary-color: #0452ff}.app{font:var(--font-m);background:var(--bg-color);color:var(--primary-color);min-height:100vh}.content-page{display:flex}.page-wrapper{flex-grow:1;padding:20px}',"",{version:3,sources:["webpack://./src/app/styles/reset.scss","webpack://./src/app/styles/variables/global.scss","webpack://./src/app/styles/themes/normal.scss","webpack://./src/app/styles/themes/dark.scss","webpack://./src/app/styles/index.scss"],names:[],mappings:"AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CCHJ,MACI,sDAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,yEAAA,CACA,qBAAA,CACA,sBAAA,CACA,+BAAA,CCRJ,MACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCNJ,UACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,gCAAA,CACA,kCAAA,CCDJ,KACI,kBAAA,CACA,0BAAA,CACA,0BAAA,CACA,gBAAA,CAGJ,cACI,YAAA,CAGJ,cACI,WAAA,CACA,YAAA",sourcesContent:["* { \r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n\r\n}",':root {\r\n    --font-family-main: consolas, "Times New Roman", serif;\r\n    --font-size-m: 16px;\r\n    --font-size-l: 24px;\r\n    --font-m: var(--font-size-m) / var(--font-size-m) var(--font-family-main);\r\n    --font-l: var(--font-size-l) / var(--font-size-l) var(--font-family-main);\r\n    --navbar-height: 50px;\r\n    --sidebar-width: 300px;\r\n    --sidebar-width-collapsed: 80px;\r\n\r\n\r\n}',":root {\r\n    --bg-color: #e8e8ea;\r\n    --inverted-bg-color: #090949;\r\n    --primary-color: #0232c2;\r\n    --secondary-color: #0452ff;\r\n    --inverted-primary-color: #049604;\r\n    --inverted-secondary-color: #04ff04;\r\n}\r\n",".app.dark {\r\n    --bg-color: #090949;\r\n    --inverted-bg-color: #e8e8ea;\r\n    --primary-color: #049604;\r\n    --secondary-color: #04ff04;\r\n    --inveted-primary-color: #0232c2;\r\n    --inveted-secondary-color: #0452ff;\r\n}\r\n",'@import "reset";\r\n@import "variables/global";\r\n@import "themes/normal";\r\n@import "themes/dark";\r\n\r\n.app {\r\n    font: var(--font-m);\r\n    background: var(--bg-color);\r\n    color: var(--primary-color);\r\n    min-height: 100vh;\r\n}\r\n\r\n.content-page {\r\n    display: flex;\r\n}\r\n\r\n.page-wrapper {\r\n    flex-grow: 1;\r\n    padding: 20px;\r\n}\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./config/storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>storybook_preview});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.c,options);styles.c&&styles.c.locals&&styles.c.locals;var StyleDecorator=function(Story){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Story,{})})};StyleDecorator.__docgenInfo={description:"",methods:[],displayName:"StyleDecorator"};var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),RouteDecorator=function(Story){return(0,jsx_runtime.jsx)(dist.kn,{children:(0,jsx_runtime.jsx)(Story,{})})};RouteDecorator.__docgenInfo={description:"",methods:[],displayName:"RouteDecorator"};const storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[function(Story){return(0,jsx_runtime.jsx)("div",{children:Story(StyleDecorator)})},function(Story){return(0,jsx_runtime.jsx)("div",{children:(0,ThemeDecorator.A)(ThemeProvider.So.LIGHT)(Story)})},function(Story){return(0,jsx_runtime.jsx)("div",{children:RouteDecorator(Story)})}]}},"./src/app/providers/ThemeProvider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{So:()=>Theme,qG:()=>useTheme});var Theme,react=__webpack_require__("./node_modules/react/index.js");!function(Theme){Theme.LIGHT="light",Theme.DARK="dark"}(Theme||(Theme={}));var ThemeContext=(0,react.createContext)({}),LOCAL_STORAGE_THEME_KEY="theme";function useTheme(){var _useContext=(0,react.useContext)(ThemeContext),theme=_useContext.theme,setTheme=_useContext.setTheme;return{theme,toggleTheme:function(){var newTheme=theme===Theme.DARK?Theme.LIGHT:Theme.DARK;setTheme(newTheme),localStorage.setItem(LOCAL_STORAGE_THEME_KEY,newTheme)}}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var defaultTheme=localStorage.getItem(LOCAL_STORAGE_THEME_KEY)||Theme.LIGHT,ThemeProvider=function(param){var children=param.children,_useState=_sliced_to_array((0,react.useState)(defaultTheme),2),theme=_useState[0],setTheme=_useState[1],defaultProps=(0,react.useMemo)((function(){return{theme,setTheme}}),[theme]);return(0,jsx_runtime.jsx)(ThemeContext.Provider,{value:defaultProps,children})};const ui_ThemeProvider=ThemeProvider;ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}},ui_ThemeProvider.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}}},"./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>ThemeDecorator});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=function(theme){return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}}},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./pages/AboutPage/ui/AboutPage.stories":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",612,708],"./pages/AboutPage/ui/AboutPage.stories.tsx":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",612,708],"./pages/MainPage/ui/MainPage.stories":["./src/pages/MainPage/ui/MainPage.stories.tsx",612,860],"./pages/MainPage/ui/MainPage.stories.tsx":["./src/pages/MainPage/ui/MainPage.stories.tsx",612,860],"./pages/NotFoundPage/ui/NotFoundPage.stories":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",612,460],"./pages/NotFoundPage/ui/NotFoundPage.stories.tsx":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",612,460],"./shared/ui/AppLink/AppLink.stories":["./src/shared/ui/AppLink/AppLink.stories.tsx",572],"./shared/ui/AppLink/AppLink.stories.tsx":["./src/shared/ui/AppLink/AppLink.stories.tsx",572],"./shared/ui/Button/Button.stories":["./src/shared/ui/Button/Button.stories.tsx",808],"./shared/ui/Button/Button.stories.tsx":["./src/shared/ui/Button/Button.stories.tsx",808],"./shared/ui/Loader/Loader.stories":["./src/shared/ui/Loader/Loader.stories.tsx",540],"./shared/ui/Loader/Loader.stories.tsx":["./src/shared/ui/Loader/Loader.stories.tsx",540],"./widgets/LanguageSwitcher/LanguageSwitcher.stories":["./src/widgets/LanguageSwitcher/LanguageSwitcher.stories.tsx",612,464],"./widgets/LanguageSwitcher/LanguageSwitcher.stories.tsx":["./src/widgets/LanguageSwitcher/LanguageSwitcher.stories.tsx",612,464],"./widgets/PageError/ui/PageError.stories":["./src/widgets/PageError/ui/PageError.stories.tsx",612,956],"./widgets/PageError/ui/PageError.stories.tsx":["./src/widgets/PageError/ui/PageError.stories.tsx",612,956],"./widgets/PageLoader/ui/PageLoader.stories":["./src/widgets/PageLoader/ui/PageLoader.stories.tsx",164],"./widgets/PageLoader/ui/PageLoader.stories.tsx":["./src/widgets/PageLoader/ui/PageLoader.stories.tsx",164],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",612,908],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",612,908],"./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories":["./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",428],"./widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":["./src/widgets/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",428],"./widgets/navbar/ui/Navbar.stories":["./src/widgets/navbar/ui/Navbar.stories.tsx",160],"./widgets/navbar/ui/Navbar.stories.tsx":["./src/widgets/navbar/ui/Navbar.stories.tsx",160]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[240],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);