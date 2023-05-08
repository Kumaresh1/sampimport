/*
@license

dhtmlxGantt v.6.2.6 Professional Evaluation
This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Gantt.plugin(function(t){!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var n in o)("object"==typeof exports?exports:t)[n]=o[n]}}(window,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/codebase/",o(o.s=231)}({0:function(t,e,o){var n,i=o(2);t.exports={copy:function t(e){var o,n;if(e&&"object"==typeof e)switch(!0){case i.isDate(e):n=new Date(e);break;case i.isArray(e):for(n=new Array(e.length),o=0;o<e.length;o++)n[o]=t(e[o]);break;case i.isStringObject(e):n=new String(e);break;case i.isNumberObject(e):n=new Number(e);break;case i.isBooleanObject(e):n=new Boolean(e);break;default:for(o in n={},e)Object.prototype.hasOwnProperty.apply(e,[o])&&(n[o]=t(e[o]))}return n||e},defined:function(t){return void 0!==t},mixin:function(t,e,o){for(var n in e)(void 0===t[n]||o)&&(t[n]=e[n]);return t},uid:function(){return n||(n=(new Date).valueOf()),++n},bind:function(t,e){return t.bind?t.bind(e):function(){return t.apply(e,arguments)}},event:function(t,e,o,n){t.addEventListener?t.addEventListener(e,o,void 0!==n&&n):t.attachEvent&&t.attachEvent("on"+e,o)},eventRemove:function(t,e,o,n){t.removeEventListener?t.removeEventListener(e,o,void 0!==n&&n):t.detachEvent&&t.detachEvent("on"+e,o)}}},1:function(t,e){function o(t){var e=0,o=0,n=0,i=0;if(t.getBoundingClientRect){var r=t.getBoundingClientRect(),a=document.body,c=document.documentElement||document.body.parentNode||document.body,l=window.pageYOffset||c.scrollTop||a.scrollTop,u=window.pageXOffset||c.scrollLeft||a.scrollLeft,s=c.clientTop||a.clientTop||0,f=c.clientLeft||a.clientLeft||0;e=r.top+l-s,o=r.left+u-f,n=document.body.offsetWidth-r.right,i=document.body.offsetHeight-r.bottom}else{for(;t;)e+=parseInt(t.offsetTop,10),o+=parseInt(t.offsetLeft,10),t=t.offsetParent;n=document.body.offsetWidth-t.offsetWidth-o,i=document.body.offsetHeight-t.offsetHeight-e}return{y:Math.round(e),x:Math.round(o),width:t.offsetWidth,height:t.offsetHeight,right:Math.round(n),bottom:Math.round(i)}}function n(t){var e=!1,o=!1;if(window.getComputedStyle){var n=window.getComputedStyle(t,null);e=n.display,o=n.visibility}else t.currentStyle&&(e=t.currentStyle.display,o=t.currentStyle.visibility);return"none"!=e&&"hidden"!=o}function i(t){return!isNaN(t.getAttribute("tabindex"))&&1*t.getAttribute("tabindex")>=0}function r(t){return!{a:!0,area:!0}[t.nodeName.loLowerCase()]||!!t.getAttribute("href")}function a(t){return!{input:!0,select:!0,textarea:!0,button:!0,object:!0}[t.nodeName.toLowerCase()]||!t.hasAttribute("disabled")}function c(t){if(!t)return"";var e=t.className||"";return e.baseVal&&(e=e.baseVal),e.indexOf||(e=""),s(e)}var l=document.createElement("div");function u(t){return t.tagName?t:(t=t||window.event).target||t.srcElement}function s(t){return(String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")}).apply(t)}t.exports={getNodePosition:o,getFocusableNodes:function(t){for(var e=t.querySelectorAll(["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"].join(", ")),o=Array.prototype.slice.call(e,0),c=0;c<o.length;c++){var l=o[c];(i(l)||a(l)||r(l))&&n(l)||(o.splice(c,1),c--)}return o},getScrollSize:function(){var t=document.createElement("div");t.style.cssText="visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e},getClassName:c,addClassName:function(t,e){e&&-1===t.className.indexOf(e)&&(t.className+=" "+e)},removeClassName:function(t,e){e=e.split(" ");for(var o=0;o<e.length;o++){var n=new RegExp("\\s?\\b"+e[o]+"\\b(?![-_.])","");t.className=t.className.replace(n,"")}},insertNode:function(t,e){l.innerHTML=e;var o=l.firstChild;return t.appendChild(o),o},removeNode:function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},getChildNodes:function(t,e){for(var o=t.childNodes,n=o.length,i=[],r=0;r<n;r++){var a=o[r];a.className&&-1!==a.className.indexOf(e)&&i.push(a)}return i},toNode:function(t){return"string"==typeof t?document.getElementById(t)||document.querySelector(t)||document.body:t||document.body},locateClassName:function(t,e,o){var n=u(t),i="";for(void 0===o&&(o=!0);n;){if(i=c(n)){var r=i.indexOf(e);if(r>=0){if(!o)return n;var a=0===r||!s(i.charAt(r-1)),l=r+e.length>=i.length||!s(i.charAt(r+e.length));if(a&&l)return n}}n=n.parentNode}return null},locateAttribute:function(t,e){if(e){for(var o=u(t);o;){if(o.getAttribute&&o.getAttribute(e))return o;o=o.parentNode}return null}},getTargetNode:u,getRelativeEventPosition:function(t,e){var n=document.documentElement,i=o(e);return{x:t.clientX+n.scrollLeft-n.clientLeft-i.x+e.scrollLeft,y:t.clientY+n.scrollTop-n.clientTop-i.y+e.scrollTop}},isChildOf:function(t,e){if(!t||!e)return!1;for(;t&&t!=e;)t=t.parentNode;return t===e},hasClass:function(t,e){return"classList"in t?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)},closest:function(t,e){if(t.closest)return t.closest(e);if(t.matches||t.msMatchesSelector||t.webkitMatchesSelector){var o=t;if(!document.documentElement.contains(o))return null;do{if((o.matches||o.msMatchesSelector||o.webkitMatchesSelector).call(o,e))return o;o=o.parentElement||o.parentNode}while(null!==o&&1===o.nodeType);return null}return console.error("Your browser is not supported"),null}}},2:function(t,e){var o={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3,quarter:7776e3,year:31536e3};function n(t,e){var o=[];if(t.filter)return t.filter(e);for(var n=0;n<t.length;n++)e(t[n],n)&&(o[o.length]=t[n]);return o}t.exports={getSecondsInUnit:function(t){return o[t]||o.hour},forEach:function(t,e){if(t.forEach)t.forEach(e);else for(var o=t.slice(),n=0;n<o.length;n++)e(o[n],n)},arrayMap:function(t,e){if(t.map)return t.map(e);for(var o=t.slice(),n=[],i=0;i<o.length;i++)n.push(e(o[i],i));return n},arrayFind:function(t,e){if(t.find)return t.find(e);for(var o=0;o<t.length;o++)if(e(t[o],o))return t[o]},arrayFilter:n,arrayDifference:function(t,e){return n(t,function(t,o){return!e(t,o)})},arraySome:function(t,e){if(0===t.length)return!1;for(var o=0;o<t.length;o++)if(e(t[o],o,t))return!0;return!1},hashToArray:function(t){var e=[];for(var o in t)t.hasOwnProperty(o)&&e.push(t[o]);return e},sortArrayOfHash:function(t,e,o){var n=function(t,e){return t<e};t.sort(function(t,i){return t[e]===i[e]?0:o?n(t[e],i[e]):n(i[e],t[e])})},throttle:function(t,e){var o=!1;return function(){o||(t.apply(null,arguments),o=!0,setTimeout(function(){o=!1},e))}},isArray:function(t){return Array.isArray?Array.isArray(t):t&&void 0!==t.length&&t.pop&&t.push},isDate:function(t){return!(!t||"object"!=typeof t||!(t.getFullYear&&t.getMonth&&t.getDate))},isStringObject:function(t){return t&&"object"==typeof t&&"function String() { [native code] }"===Function.prototype.toString.call(t.constructor)},isNumberObject:function(t){return t&&"object"==typeof t&&"function Number() { [native code] }"===Function.prototype.toString.call(t.constructor)},isBooleanObject:function(t){return t&&"object"==typeof t&&"function Boolean() { [native code] }"===Function.prototype.toString.call(t.constructor)},delay:function(t,e){var o,n=function(){n.$cancelTimeout(),t.$pending=!0;var i=Array.prototype.slice.call(arguments);o=setTimeout(function(){t.apply(this,i),n.$pending=!1},e)};return n.$pending=!1,n.$cancelTimeout=function(){clearTimeout(o),t.$pending=!1},n.$execute=function(){t(),t.$cancelTimeout()},n},objectKeys:function(t){if(Object.keys)return Object.keys(t);var e,o=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.push(e);return o},requestAnimationFrame:function(t){var e=window;return(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)})(t)},isEventable:function(t){return t.attachEvent&&t.detachEvent}}},22:function(t,e,o){var n=o(0);t.exports=function t(e,o){e=e||n.event,o=o||n.eventRemove;var i=[],r={attach:function(t,o,n,r){i.push({element:t,event:o,callback:n,capture:r}),e(t,o,n,r)},detach:function(t,e,n,r){o(t,e,n,r);for(var a=0;a<i.length;a++){var c=i[a];c.element===t&&c.event===e&&c.callback===n&&c.capture===r&&(i.splice(a,1),a--)}},detachAll:function(){for(var t=i.slice(),e=0;e<t.length;e++){var o=t[e];r.detach(o.element,o.event,o.callback,o.capture),r.detach(o.element,o.event,o.callback,void 0),r.detach(o.element,o.event,o.callback,!1),r.detach(o.element,o.event,o.callback,!0)}i.splice(0,i.length)},extend:function(){return t(this.event,this.eventRemove)}};return window.scopes||(window.scopes=[]),window.scopes.push(i),r}},229:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=n(1),r=function(){function e(){}return e.prototype.getNode=function(){return this._tooltipNode||(this._tooltipNode=document.createElement("div"),this._tooltipNode.className="gantt_tooltip",t._waiAria.tooltipAttr(this._tooltipNode)),this._tooltipNode},e.prototype.setViewport=function(t){return this._root=t,this},e.prototype.show=function(e,o){var n=document.body,r=this.getNode();if(i.isChildOf(r,n)||(this.hide(),n.appendChild(r)),e instanceof MouseEvent){var a=this._calculateTooltipPosition(e);o=a.top,e=a.left}return r.style.top=o+"px",r.style.left=e+"px",t._waiAria.tooltipVisibleAttr(r),this},e.prototype.hide=function(){var e=this.getNode();return e&&e.parentNode&&e.parentNode.removeChild(e),t._waiAria.tooltipHiddenAttr(e),this},e.prototype.setContent=function(t){return this.getNode().innerHTML=t,this},e.prototype._getViewPort=function(){return this._root||document.body},e.prototype._calculateTooltipPosition=function(e){var o=this._getViewPortSize(),n=this.getNode(),r={top:0,left:0,width:n.offsetWidth,height:n.offsetHeight,bottom:0,right:0},a=t.config.tooltip_offset_x,c=t.config.tooltip_offset_y,l=document.body,u=i.getRelativeEventPosition(e,l);return r.top=u.y,r.left=u.x,r.top+=c,r.left+=a,r.bottom=r.top+r.height,r.right=r.left+r.width,r.top<o.top?(r.top=o.top,r.bottom=r.top+r.height):r.bottom>o.bottom&&(r.bottom=o.bottom,r.top=r.bottom-r.height),r.left<o.left?(r.left=o.left,r.right=o.left+r.width):r.right>o.right&&(r.right=o.right,r.left=r.right-r.width),u.x>=r.left&&u.x<=r.right&&(r.left=u.x-r.width-a,r.right=r.left+r.width),u.y>=r.top&&u.y<=r.bottom&&(r.top=u.y-r.height-c,r.bottom=r.top+r.height),r},e.prototype._getViewPortSize=function(){var e,o=this._getViewPort(),n=o,r=window.scrollY+document.body.scrollTop,a=window.scrollX+document.body.scrollLeft;return o===t.$task_data?(n=t.$task,r=0,a=0,e=i.getNodePosition(t.$task)):e=i.getNodePosition(n),{left:e.x+a,top:e.y+r,width:e.width,height:e.height,bottom:e.y+e.height+r,right:e.x+e.width+a}},e}();o.Tooltip=r},230:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=n(22),r=n(1),a=n(2),c=n(229),l=function(){function e(){this.tooltip=new c.Tooltip,this._listeners={},this._domEvents=i(),this._initDelayedFunctions()}return e.prototype.destructor=function(){this.tooltip.hide(),this._domEvents.detachAll()},e.prototype.hideTooltip=function(){this.delayHide()},e.prototype.attach=function(e){var o=this,n=document.body;e.global||(n=t.$root);var i=null,a=function(t){var n=r.getTargetNode(t),a=r.closest(n,e.selector);if(!r.isChildOf(n,o.tooltip.getNode())){var c=function(){i=a,e.onmouseenter(t,a)};i?a&&a===i?e.onmousemove(t,a):(e.onmouseleave(t,i),i=null,a&&a!==i&&c()):a&&c()}};this.detach(e.selector),this._domEvents.attach(n,"mousemove",a),this._listeners[e.selector]={node:n,handler:a}},e.prototype.detach=function(t){var e=this._listeners[t];e&&this._domEvents.detach(e.node,"mousemove",e.handler)},e.prototype.tooltipFor=function(t){var e=this,o=function(t){var e=t;return document.createEventObject&&!document.createEvent&&(e=document.createEventObject(t)),e};this._initDelayedFunctions(),this.attach({selector:t.selector,global:t.global,onmouseenter:function(n,i){var r=t.html(n,i);r&&e.delayShow(o(n),r)},onmousemove:function(n,i){var r=t.html(n,i);r?e.delayShow(o(n),r):(e.delayShow.$cancelTimeout(),e.delayHide())},onmouseleave:function(){e.delayShow.$cancelTimeout(),e.delayHide()}})},e.prototype._initDelayedFunctions=function(){var e=this;this.delayShow&&this.delayShow.$cancelTimeout(),this.delayHide&&this.delayHide.$cancelTimeout(),this.tooltip.hide(),this.delayShow=a.delay(function(o,n){!1===t.callEvent("onBeforeTooltip",[o])?e.tooltip.hide():(e.tooltip.setContent(n),e.tooltip.show(o))},t.config.tooltip_timeout||1),this.delayHide=a.delay(function(){e.delayShow.$cancelTimeout(),e.tooltip.hide()},t.config.tooltip_hide_timeout||1)},e}();o.TooltipManager=l},231:function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t.config.tooltip_timeout=30,t.config.tooltip_offset_y=20,t.config.tooltip_offset_x=10,t.config.tooltip_hide_timeout=30;var i=new(n(230).TooltipManager);t.ext.tooltips=i,t.attachEvent("onGanttReady",function(){i.tooltipFor({selector:"["+t.config.task_attribute+"]:not(.gantt_task_row)",html:function(e){if(!t.config.touch||t.config.touch_tooltip){var o=t.locate(e);if(t.isTaskExists(o)){var n=t.getTask(o);return t.templates.tooltip_text(n.start_date,n.end_date,n)}return null}},global:!1})}),t.attachEvent("onDestroy",function(){i.destructor()}),t.attachEvent("onLightbox",function(){i.hideTooltip()});t.attachEvent("onBeforeTooltip",function(){if(t.getState().link_source_id)return!1}),t.attachEvent("onGanttScroll",function(){i.hideTooltip()})}})})});