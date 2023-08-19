"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[453],{"./src/Elements/_stories_/RotatingCircleBorderLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomClassName:()=>CustomClassName,CustomColor:()=>CustomColor,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _RotatingCircleBorderLoader__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/RotatingCircleBorderLoader.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/RotatingCircleBorderLoader",component:_RotatingCircleBorderLoader__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{color:{control:"color"},className:{control:"text"}},parameters:{layout:"centered"}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_RotatingCircleBorderLoader__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={};const CustomColor=Template.bind({});CustomColor.args={color:"#00ff00"};const CustomClassName=Template.bind({});CustomClassName.args={className:"custom-style"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <RotatingCircleBorderLoader {...args} />",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"args => <RotatingCircleBorderLoader {...args} />",...CustomColor.parameters?.docs?.source}}},CustomClassName.parameters={...CustomClassName.parameters,docs:{...CustomClassName.parameters?.docs,source:{originalSource:"args => <RotatingCircleBorderLoader {...args} />",...CustomClassName.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomColor","CustomClassName"]},"./src/Elements/RotatingCircleBorderLoader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const rotateAnimation=styled_components__WEBPACK_IMPORTED_MODULE_2__.F4`
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
    border-top-color: rgb(139, 46, 46);
    border-bottom-color: rgb(243, 92, 33);
    border-right-color: transparent;
    border-left-color: transparent;
  }

  100% {
    transform: rotate(360deg);
  }
`,LoaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 5px solid ${props=>props.color||"rgb(255, 17, 0)"};
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: ${rotateAnimation} 1s infinite;
`,RotatingCircleBorderLoader=_ref=>{let{color,className}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LoaderContainer,{color,className})};RotatingCircleBorderLoader.displayName="RotatingCircleBorderLoader",RotatingCircleBorderLoader.propTypes={color:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,className:prop_types__WEBPACK_IMPORTED_MODULE_3___default().string};const __WEBPACK_DEFAULT_EXPORT__=RotatingCircleBorderLoader;try{RotatingCircleBorderLoader.displayName="RotatingCircleBorderLoader",RotatingCircleBorderLoader.__docgenInfo={description:"",displayName:"RotatingCircleBorderLoader",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/RotatingCircleBorderLoader.tsx#RotatingCircleBorderLoader"]={docgenInfo:RotatingCircleBorderLoader.__docgenInfo,name:"RotatingCircleBorderLoader",path:"src/Elements/RotatingCircleBorderLoader.tsx#RotatingCircleBorderLoader"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/tslib/tslib.es6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_T:()=>__rest,ev:()=>__spreadArray,pi:()=>__assign});var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}Object.create;function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);
//# sourceMappingURL=Elements-_stories_-RotatingCircleBorderLoader-stories.ed19ee32.iframe.bundle.js.map