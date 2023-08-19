/*! For license information please see ColorRing-stories-mdx.0010a658.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_craftify_spinners=self.webpackChunkreact_craftify_spinners||[]).push([[1482],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./demo/ColorRing.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_src_Elements_ColorRing__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/ColorRing.tsx"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Spinners/ColorRing",component:_src_Elements_ColorRing__WEBPACK_IMPORTED_MODULE_1__.ColorRing}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"colorring-playful-animation-for-your-delightful-ui",children:"ColorRing: Playful Animation for Your Delightful UI!"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Introducing the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"ColorRing"}),", a tiny ball of joy ready to spin and dance its way into your heart. This enchanting component brings life to your user interface with its captivating animations."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"With a touch of magic, the ColorRing creates a mesmerizing whirl of bubbles that's impossible to resist. It's like having a cheerful friend in your app, always ready to spread smiles and sprinkle a dash of playfulness wherever it appears."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"features-",children:"Features :"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Auto Play"}),": ColorRing comes alive as soon as it's summoned, so your users are greeted with a delightful surprise every time."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Endless Dance"}),": The fun never stops! ColorRing gracefully spins and loops endlessly, creating a captivating visual treat."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.strong,{children:"Easy Integration"}),": With a simple yet powerful API, you can effortlessly drop the ColorRing into your UI and watch the magic unfold."]}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Bring joy and animation to your project with the ColorRing. Let it whirl, twirl, and spin its way into your users' hearts, leaving a trail of happiness in its wake."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"default-usage",children:"Default Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\r\nimport {ColorRing} from 'react-craftify-spinners';  \r\n\r\nconst MyComponent = () => {\r\n  return (\r\n    <div>\r\n     <ColorRing width=\"100\" height=\"100\" colors={['#ff0000', '#00ff00', '#0000ff']} />\r\n    </div>\r\n  );\r\n};\r\n\n"})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Spinners/ColorRing",component:_src_Elements_ColorRing__WEBPACK_IMPORTED_MODULE_1__.ColorRing,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/Elements/ColorRing.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ColorRing});__webpack_require__("./node_modules/react/index.js");var _type__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Elements/type.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ColorRing(_ref){let{visible=!0,width="80",height="80",colors=["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"],className="",wrapperStyle={},ariaLabel="color-ring-loading"}=_ref;return visible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width,height,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className,style:wrapperStyle,"aria-label":ariaLabel,"data-testid":"color-ring-svg",..._type__WEBPACK_IMPORTED_MODULE_1__.v,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("mask",{id:"ldio-4offds5dlws-mask",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle",{cx:"50",cy:"50",r:"26",stroke:"#fff",strokeLinecap:"round",strokeDasharray:"122.52211349000194 40.840704496667314",strokeWidth:"9",transform:"rotate(198.018 50 50)",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animateTransform",{attributeName:"transform",type:"rotate",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("g",{mask:"url(#ldio-4offds5dlws-mask)",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect",{x:"14.5",y:"0",width:"15",height:"100",fill:colors[0],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"fill",values:colors.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.8s"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect",{x:"28.5",y:"0",width:"15",height:"100",fill:colors[1],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"fill",values:colors.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.6s"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect",{x:"42.5",y:"0",width:"15",height:"100",fill:colors[2],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"fill",values:colors.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.4s"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect",{x:"56.5",y:"0",width:"15",height:"100",fill:colors[3],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"fill",values:colors.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"-0.2s"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect",{x:"70.5",y:"0",width:"15",height:"100",fill:colors[4],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("animate",{attributeName:"fill",values:colors.join(";").toString(),keyTimes:"0;0.25;0.5;0.75;1",dur:"1s",repeatCount:"indefinite",begin:"0s"})})]})]}):null}try{ColorRing.displayName="ColorRing",ColorRing.__docgenInfo={description:"",displayName:"ColorRing",props:{colors:{defaultValue:{value:"['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']"},description:"",name:"colors",required:!1,type:{name:"[string, string, string, string, string]"}},width:{defaultValue:{value:"80"},description:"",name:"width",required:!1,type:{name:"string | number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}},height:{defaultValue:{value:"80"},description:"",name:"height",required:!1,type:{name:"string | number"}},wrapperStyle:{defaultValue:{value:"{}"},description:"",name:"wrapperStyle",required:!1,type:{name:"Style"}},ariaLabel:{defaultValue:{value:"color-ring-loading"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Elements/ColorRing.tsx#ColorRing"]={docgenInfo:ColorRing.__docgenInfo,name:"ColorRing",path:"src/Elements/ColorRing.tsx#ColorRing"})}catch(__react_docgen_typescript_loader_error){}},"./src/Elements/type.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DEFAULT_COLOR,v:()=>DEFAULT_WAI_ARIA_ATTRIBUTE});const DEFAULT_COLOR="#4fa94d",DEFAULT_WAI_ARIA_ATTRIBUTE={"aria-busy":!0,role:"status"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);