/*! For license information please see Elements-_stories_-FallingLines-stories.bbe73fce.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[6493],{"./src/Elements/_stories_/FallingLines.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _FallingLines__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/FallingLines.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Spinners/FallingLines",component:_FallingLines__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{color:{control:"color"},width:{control:"text"},height:{control:"text"},visible:{control:"boolean"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FallingLines__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={color:"#000000",width:"100",height:"100",visible:!0},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <FallingLines {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/Elements/FallingLines.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _type__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/type.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FallingLines=_ref=>{let{color=_type__WEBPACK_IMPORTED_MODULE_1__.D,width="100",visible=!0}=_ref;return visible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width,height:width,viewBox:"0 0 100 100","data-testid":"falling-lines",..._type__WEBPACK_IMPORTED_MODULE_1__.v,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("rect",{y:"25",width:"10",height:"50",rx:"4",ry:"4",fill:color,"data-testid":"falling-lines-rect-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"x",values:"10;100",dur:"1.2s",repeatCount:"indefinite"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 70",to:"-60 100 70",dur:"1.2s",repeatCount:"indefinite"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",repeatCount:"indefinite"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("rect",{y:"25",width:"10",height:"50",rx:"4",ry:"4",fill:color,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"x",values:"10;100",dur:"1.2s",begin:"0.4s",repeatCount:"indefinite"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 70",to:"-60 100 70",dur:"1.2s",begin:"0.4s",repeatCount:"indefinite"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",begin:"0.4s",repeatCount:"indefinite"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("rect",{y:"25",width:"10",height:"50",rx:"4",ry:"4",fill:color,"data-testid":"falling-lines-rect-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"x",values:"10;100",dur:"1.2s",begin:"0.8s",repeatCount:"indefinite"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 70",to:"-60 100 70",dur:"1.2s",begin:"0.8s",repeatCount:"indefinite"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"opacity",values:"0;1;0",dur:"1.2s",begin:"0.8s",repeatCount:"indefinite"})]})]}):null},__WEBPACK_DEFAULT_EXPORT__=FallingLines;try{FallingLines.displayName="FallingLines",FallingLines.__docgenInfo={description:"",displayName:"FallingLines",props:{color:{defaultValue:{value:"#4fa94d"},description:"",name:"color",required:!1,type:{name:"string"}},width:{defaultValue:{value:"100"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/FallingLines.tsx#FallingLines"]={docgenInfo:FallingLines.__docgenInfo,name:"FallingLines",path:"src/Elements/FallingLines.tsx#FallingLines"})}catch(__react_docgen_typescript_loader_error){}},"./src/Elements/type.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DEFAULT_COLOR,v:()=>DEFAULT_WAI_ARIA_ATTRIBUTE});const DEFAULT_COLOR="#4fa94d",DEFAULT_WAI_ARIA_ATTRIBUTE={"aria-busy":!0,role:"status"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);