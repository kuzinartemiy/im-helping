/*! For license information please see components-common-service-button-service-button-stories.5f504a9b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkim_helping=self.webpackChunkim_helping||[]).push([[559],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/common/service-button/service-button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Approved:function(){return Approved},Close:function(){return Close},Edit:function(){return Edit},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return service_button_stories}});var _Close$parameters,_Close$parameters2,_Close$parameters2$do,_Edit$parameters,_Edit$parameters2,_Edit$parameters2$doc,_Approved$parameters,_Approved$parameters2,_Approved$parameters3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=(__webpack_require__("./src/styles/colors.ts"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),service_button_module={button:"service-button_button__ImnUE",content_viewType_close:"service-button_content_viewType_close__5j+Up",content_viewType_edit:"service-button_content_viewType_edit__SvLEg",content_viewType_approved:"service-button_content_viewType_approved__gHiJi",content:"service-button_content__e8wyY"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["onClick","viewType","isDisabled"],service_button=function ServiceButton(_ref){var onClick=_ref.onClick,_ref$viewType=_ref.viewType,viewType=void 0===_ref$viewType?"close":_ref$viewType,isDisabled=_ref.isDisabled,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:"".concat(service_button_module.button," ").concat(service_button_module["button_viewType_".concat(viewType)]),onClick:onClick,disabled:isDisabled},props),{},{children:(0,jsx_runtime.jsx)("div",{className:"".concat(service_button_module.content," ").concat(service_button_module["content_viewType_".concat(viewType)])})}))};try{servicebutton.displayName="servicebutton",servicebutton.__docgenInfo={description:"",displayName:"servicebutton",props:{viewType:{defaultValue:{value:"close"},description:"",name:"viewType",required:!1,type:{name:"enum",value:[{value:'"close"'},{value:'"edit"'},{value:'"approved"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void) | ((e: SyntheticEvent<Element, Event>) => void)"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/service-button/index.tsx#servicebutton"]={docgenInfo:servicebutton.__docgenInfo,name:"servicebutton",path:"src/components/common/service-button/index.tsx#servicebutton"})}catch(__react_docgen_typescript_loader_error){}var service_button_stories={title:"im-helping/ServiceButton",component:service_button,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{isDisabled:{name:"isDisabled",type:{name:"boolean",required:!1},defaultValue:"false",description:"Вариант Disabled",table:{type:{summary:"string"},defaultValue:{summary:"false"}},options:["false","true"]},viewType:{name:"viewType",type:{name:"string",required:!1},defaultValue:"close",description:"Вариант viewType",table:{type:{summary:"string"},defaultValue:{summary:"close"}},control:{type:"radio"},options:["close","edit","approved"]}}},Close={args:{viewType:"close",isDisabled:!1}},Edit={args:{viewType:"edit",isDisabled:!1}},Approved={args:{viewType:"approved",isDisabled:!1}};Close.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Close.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Close$parameters=Close.parameters)||void 0===_Close$parameters?void 0:_Close$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    viewType: 'close',\n    isDisabled: false\n  }\n}"},null===(_Close$parameters2=Close.parameters)||void 0===_Close$parameters2||null===(_Close$parameters2$do=_Close$parameters2.docs)||void 0===_Close$parameters2$do?void 0:_Close$parameters2$do.source)})}),Edit.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Edit.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Edit$parameters=Edit.parameters)||void 0===_Edit$parameters?void 0:_Edit$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    viewType: 'edit',\n    isDisabled: false\n  }\n}"},null===(_Edit$parameters2=Edit.parameters)||void 0===_Edit$parameters2||null===(_Edit$parameters2$doc=_Edit$parameters2.docs)||void 0===_Edit$parameters2$doc?void 0:_Edit$parameters2$doc.source)})}),Approved.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Approved.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Approved$parameters=Approved.parameters)||void 0===_Approved$parameters?void 0:_Approved$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    viewType: 'approved',\n    isDisabled: false\n  }\n}"},null===(_Approved$parameters2=Approved.parameters)||void 0===_Approved$parameters2||null===(_Approved$parameters3=_Approved$parameters2.docs)||void 0===_Approved$parameters3?void 0:_Approved$parameters3.source)})});var __namedExportsOrder=["Close","Edit","Approved"]},"./src/styles/colors.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return COLORS}});var COLORS=new Map(Object.entries({"color-primary":"#2e3192","color-secondary":"#9798c9","bg-button-sea":"#0071bc","bg-button-wave":"#0091c7","bg-button-seaweed":"#00a99d","bg-button-grass":"#009245","color-orange":"#fbb03b","color-blue":"#b8e4fa","color-orange-secondary":"#f9bc90","color-orange-bright":"#f37920","color-salad":"#acca3e","color-fuchsia":"#d60080","color-fuchsia-secondary":"#e97fc0","color-error-border":"#E64646","bg-button-disabled":"#818c99",background:"#fbfdff",white:"#ffffff","text-color-black":"#000000","pickerdate-border":"#E0E0E0"}))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);