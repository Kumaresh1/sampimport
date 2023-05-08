/*!
 * @license
 * 
 * dhtmlxGantt v.5.1.0-beta1 Professional
 * This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.
 * 
 * (c) Dinamenta, UAB.
 * 
 */
Gantt.plugin(function(t){!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([,function(t,e){function n(t){var e=0,n=0,o=0,i=0;if(t.getBoundingClientRect){var a=t.getBoundingClientRect(),r=document.body,s=document.documentElement||document.body.parentNode||document.body,d=window.pageYOffset||s.scrollTop||r.scrollTop,c=window.pageXOffset||s.scrollLeft||r.scrollLeft,l=s.clientTop||r.clientTop||0,u=s.clientLeft||r.clientLeft||0;e=a.top+d-l,n=a.left+c-u,o=document.body.offsetWidth-a.right,i=document.body.offsetHeight-a.bottom}else{for(;t;)e+=parseInt(t.offsetTop,10),n+=parseInt(t.offsetLeft,10),t=t.offsetParent;o=document.body.offsetWidth-t.offsetWidth-n,i=document.body.offsetHeight-t.offsetHeight-e}return{y:Math.round(e),x:Math.round(n),width:t.offsetWidth,height:t.offsetHeight,right:Math.round(o),bottom:Math.round(i)}}function o(t){var e=!1,n=!1;if(window.getComputedStyle){var o=window.getComputedStyle(t,null);e=o.display,n=o.visibility}else t.currentStyle&&(e=t.currentStyle.display,n=t.currentStyle.visibility);return"none"!=e&&"hidden"!=n}function i(t){return!isNaN(t.getAttribute("tabindex"))&&1*t.getAttribute("tabindex")>=0}function a(t){return!{a:!0,area:!0}[t.nodeName.loLowerCase()]||!!t.getAttribute("href")}function r(t){return!{input:!0,select:!0,textarea:!0,button:!0,object:!0}[t.nodeName.toLowerCase()]||!t.hasAttribute("disabled")}function s(t){for(var e=t.querySelectorAll(["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"].join(", ")),n=Array.prototype.slice.call(e,0),s=0;s<n.length;s++){var d=n[s];(i(d)||r(d)||a(d))&&o(d)||(n.splice(s,1),s--)}return n}function d(){var t=document.createElement("div");t.style.cssText="visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function c(t){if(!t)return"";var e=t.className||"";return e.baseVal&&(e=e.baseVal),e.indexOf||(e=""),y(e)}function l(t,e){e&&-1===t.className.indexOf(e)&&(t.className+=" "+e)}function u(t,e){e=e.split(" ");for(var n=0;n<e.length;n++){var o=new RegExp("\\s?\\b"+e[n]+"\\b(?![-_.])","");t.className=t.className.replace(o,"")}}function f(t){return"string"==typeof t?document.getElementById(t)||document.querySelector(t)||document.body:t||document.body}function g(t,e){T.innerHTML=e;var n=T.firstChild;return t.appendChild(n),n}function h(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function v(t,e){for(var n=t.childNodes,o=n.length,i=[],a=0;a<o;a++){var r=n[a];r.className&&-1!==r.className.indexOf(e)&&i.push(r)}return i}function k(t){var e;return t.tagName?e=t:(t=t||window.event,e=t.target||t.srcElement),e}function b(t,e){if(e){for(var n=k(t);n;){if(n.getAttribute){if(n.getAttribute(e))return n}n=n.parentNode}return null}}function y(t){return(String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")}).apply(t)}function p(t,e,n){void 0===n&&(n=!0);for(var o=k(t),i="";o;){if(i=c(o)){var a=i.indexOf(e);if(a>=0){if(!n)return o;var r=0===a||!y(i.charAt(a-1)),s=a+e.length>=i.length||!y(i.charAt(a+e.length));if(r&&s)return o}}o=o.parentNode}return null}function N(t,e){if(t.pageX||t.pageY)var o={x:t.pageX,y:t.pageY};var i=document.documentElement,o={x:t.clientX+i.scrollLeft-i.clientLeft,y:t.clientY+i.scrollTop-i.clientTop},a=n(e);return o.x=o.x-a.x+e.scrollLeft,o.y=o.y-a.y+e.scrollTop,o}function m(t,e){for(;t&&t!=e;)t=t.parentNode;return t==e}var T=document.createElement("div");t.exports={getNodePosition:n,getFocusableNodes:s,getScrollSize:d,getClassName:c,addClassName:l,removeClassName:u,insertNode:g,removeNode:h,getChildNodes:v,toNode:f,locateClassName:p,locateAttribute:b,getTargetNode:k,getRelativeEventPosition:N,isChildOf:m}},,,,,,,,,,,,function(t,e,n){t.exports=n(14)},function(t,e,n){!function(){function t(t){function e(e){var n={gantt:t.$keyboardNavigation.GanttNode,headerCell:t.$keyboardNavigation.HeaderCell,taskRow:t.$keyboardNavigation.TaskRow,taskCell:t.$keyboardNavigation.HeaderCell};return n[e]||n.gantt}t.config.keyboard_navigation=!0,t.config.keyboard_navigation_cells=!1,t.addShortcut=function(t,n,o){var i=e(o);i&&i.prototype.bind(t,n)},t.getShortcutHandler=function(n,o){var i=e(o);if(i){var a=t.$keyboardNavigation.shortcuts.parse(n);if(a.length)return i.prototype.findHandler(a[0])}},t.removeShortcut=function(t,n){var o=e(n);o&&o.prototype.unbind(t)},t.focus=function(){var e=t.$keyboardNavigation.dispatcher;e.enable(),e.getActiveNode()?e.focusNode(e.getActiveNode()):e.setDefaultNode()},t.$keyboardNavigation={},t._compose=function(){for(var t=Array.prototype.slice.call(arguments,0),e={},n=0;n<t.length;n++){var o=t[n];"function"==typeof o&&(o=new o);for(var i in o)e[i]=o[i]}return e},n(15)(t),n(16)(t),n(17)(t),n(18)(t),n(19)(t),n(20)(t),n(21)(t),n(22)(t),n(23)(t),n(24)(t),function(){function e(e){if(!t.config.keyboard_navigation)return!0;var o;t._locateHTML(e,t.config.task_attribute)&&(o=new t.$keyboardNavigation.TaskRow(t._locateHTML(e,t.config.task_attribute).getAttribute(t.config.task_attribute))),o&&(n.isEnabled()?n.delay(function(){n.setActiveNode(o)}):n.activeNode=o)}var n=t.$keyboardNavigation.dispatcher,o=function(e){if(t.config.keyboard_navigation)return n.keyDownHandler(e)},i=function(){n.focusGlobalNode()};t.attachEvent("onDataRender",function(){if(t.config.keyboard_navigation&&n.isEnabled()){var e=n.getActiveNode();e&&e.focus()}}),t.attachEvent("onGanttRender",function(){t.eventRemove(document,"keydown",o),t.eventRemove(t.$container,"focus",i),t.eventRemove(t.$container,"mousedown",e),t.config.keyboard_navigation?(t.event(document,"keydown",o),t.event(t.$container,"focus",i),t.event(t.$container,"mousedown",e),t.$container.setAttribute("tabindex","0")):t.$container.removeAttribute("tabindex")});var a=t.attachEvent("onGanttReady",function(){t.detachEvent(a);var e=t.refreshTask;if(t.refreshTask=function(o){var i=e.apply(this,arguments);if(t.config.keyboard_navigation&&n.isEnabled()){var a=n.getActiveNode();a&&a.taskId==o&&n.focusNode(a)}return i},t._smart_render){var o=t._smart_render._redrawItems;t._smart_render._redrawItems=function(e,i){var a=o.apply(this,arguments);if(t.config.keyboard_navigation&&n.isEnabled()){var r=n.getActiveNode();if(r&&void 0!==r.taskId)for(var s=0;s<i.length;s++)if(i[s].id==r.taskId){n.focusNode(r);break}}return a}}});t.attachEvent("onAfterTaskAdd",function(e,o){if(!t.config.keyboard_navigation)return!0;n.isEnabled()&&n.setActiveNode(new t.$keyboardNavigation.TaskRow(e))}),t.attachEvent("onTaskIdChange",function(e,o){if(!t.config.keyboard_navigation)return!0;var i=n.activeNode;return(i instanceof t.$keyboardNavigation.TaskRow||i instanceof t.$keyboardNavigation.TaskCell)&&i.taskId==e&&(i.taskId=o),!0}),t.attachEvent("onTaskClick",function(e){return!t.config.keyboard_navigation||(n.enable(),n.setActiveNode(new t.$keyboardNavigation.TaskRow(e)),!0)}),t.attachEvent("onEmptyClick",function(){if(!t.config.keyboard_navigation)return!0;n.enable()});var r=setInterval(function(){if(t.config.keyboard_navigation){var e,o=document.activeElement,i=t.$container;if(!o||t._locate_css(o,"gantt_cal_quick_info"))e=!1;else{for(;o!=i&&o;)o=o.parentNode;e=o==i}e&&!n.isEnabled()?n.enable():!e&&n.isEnabled()&&n.disable()}},500);t.attachEvent("onDestroy",function(){clearInterval(r)})}()}window.Gantt?window.Gantt.plugin(t):t(window.gantt)}()},function(t,e){t.exports=function(t){t.$keyboardNavigation.shortcuts={createCommand:function(){return{modifiers:{shift:!1,alt:!1,ctrl:!1,meta:!1},keyCode:null}},parse:function(t){for(var e=[],n=this.getExpressions(this.trim(t)),o=0;o<n.length;o++){for(var i=this.getWords(n[o]),a=this.createCommand(),r=0;r<i.length;r++)this.commandKeys[i[r]]?a.modifiers[i[r]]=!0:this.specialKeys[i[r]]?a.keyCode=this.specialKeys[i[r]]:a.keyCode=i[r].charCodeAt(0);e.push(a)}return e},getCommandFromEvent:function(t){var e=this.createCommand();e.modifiers.shift=!!t.shiftKey,e.modifiers.alt=!!t.altKey,e.modifiers.ctrl=!!t.ctrlKey,e.modifiers.meta=!!t.metaKey,e.keyCode=t.which||t.keyCode,e.keyCode>=96&&e.keyCode<=105&&(e.keyCode-=48);var n=String.fromCharCode(e.keyCode);return n&&(e.keyCode=n.toLowerCase().charCodeAt(0)),e},getHashFromEvent:function(t){return this.getHash(this.getCommandFromEvent(t))},getHash:function(t){var e=[];for(var n in t.modifiers)t.modifiers[n]&&e.push(n);return e.push(t.keyCode),e.join(this.junctionChar)},getExpressions:function(t){return t.split(this.junctionChar)},getWords:function(t){return t.split(this.combinationChar)},trim:function(t){return t.replace(/\s/g,"")},junctionChar:",",combinationChar:"+",commandKeys:{shift:16,alt:18,ctrl:17,meta:!0},specialKeys:{backspace:8,tab:9,enter:13,esc:27,space:32,up:38,down:40,left:37,right:39,home:36,end:35,pageup:33,pagedown:34,delete:46,insert:45,plus:107,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123}}}},function(t,e){t.exports=function(t){t.$keyboardNavigation.EventHandler={_handlers:null,findHandler:function(e){this._handlers||(this._handlers={});var n=t.$keyboardNavigation.shortcuts,o=n.getHash(e);return this._handlers[o]},doAction:function(t,e){var n=this.findHandler(t);n&&(n.call(this,e),e.preventDefault?e.preventDefault():e.returnValue=!1)},bind:function(e,n){this._handlers||(this._handlers={});for(var o=t.$keyboardNavigation.shortcuts,i=o.parse(e),a=0;a<i.length;a++)this._handlers[o.getHash(i[a])]=n},unbind:function(e){for(var n=t.$keyboardNavigation.shortcuts,o=n.parse(e),i=0;i<o.length;i++)this._handlers[n.getHash(o[i])]&&delete this._handlers[n.getHash(o[i])]},bindAll:function(t){for(var e in t)this.bind(e,t[e])},initKeys:function(){this._handlers||(this._handlers={}),this.keys&&this.bindAll(this.keys)}}}},function(t,e,n){t.exports=function(t){!function(){var e=n(1);t.$keyboardNavigation.getFocusableNodes=e.getFocusableNodes,t.$keyboardNavigation.trapFocus=function(e,n){if(9!=n.keyCode)return!1;for(var o=t.$keyboardNavigation.getFocusableNodes(e),i=document.activeElement,a=-1,r=0;r<o.length;r++)if(o[r]==i){a=r;break}if(n.shiftKey){if(a<=0){var s=o[o.length-1];if(s)return s.focus(),n.preventDefault(),!0}}else if(a>=o.length-1){var d=o[0];if(d)return d.focus(),n.preventDefault(),!0}return!1}}()}},function(t,e){t.exports=function(t){t.$keyboardNavigation.GanttNode=function(){},t.$keyboardNavigation.GanttNode.prototype=t._compose(t.$keyboardNavigation.EventHandler,{focus:function(){t.focus()},blur:function(){},disable:function(){t.$container.setAttribute("tabindex","0")},enable:function(){t.$container&&t.$container.removeAttribute("tabindex")},isEnabled:function(){return t.$container.hasAttribute("tabindex")},scrollHorizontal:function(e){var n=t.dateFromPos(t.getScrollState().x),o=e<0?-t.config.step:t.config.step;n=t.date.add(n,o,t.config.scale_unit),t.scrollTo(t.posFromDate(n))},scrollVertical:function(e){var n=t.getScrollState().y,o=t.config.row_height;t.scrollTo(null,n+(e<0?-1:1)*o)},keys:{"alt+left":function(t){this.scrollHorizontal(-1)},"alt+right":function(t){this.scrollHorizontal(1)},"alt+up":function(t){this.scrollVertical(-1)},"alt+down":function(t){this.scrollVertical(1)},"ctrl+z":function(){t.undo&&t.undo()},"ctrl+r":function(){t.redo&&t.redo()}}}),t.$keyboardNavigation.GanttNode.prototype.bindAll(t.$keyboardNavigation.GanttNode.prototype.keys)}},function(t,e){t.exports=function(t){t.$keyboardNavigation.KeyNavNode=function(){},t.$keyboardNavigation.KeyNavNode.prototype=t._compose(t.$keyboardNavigation.EventHandler,{isValid:function(){return!0},fallback:function(){return null},moveTo:function(e){t.$keyboardNavigation.dispatcher.setActiveNode(e)},compareTo:function(t){if(!t)return!1;for(var e in this){if(!!this[e]!=!!t[e])return!1;var n=!(!this[e]||!this[e].toString),o=!(!t[e]||!t[e].toString);if(o!=n)return!1;if(o&&n){if(t[e].toString()!=this[e].toString())return!1}else if(t[e]!=this[e])return!1}},getNode:function(){},focus:function(){var t=this.getNode();t&&(t.setAttribute("tabindex","-1"),t.focus&&t.focus())},blur:function(){var t=this.getNode();t&&t.setAttribute("tabindex","-1")}})}},function(t,e){t.exports=function(t){t.$keyboardNavigation.HeaderCell=function(t){this.index=t||0},t.$keyboardNavigation.HeaderCell.prototype=t._compose(t.$keyboardNavigation.KeyNavNode,{_handlers:null,isValid:function(){return!(!t.config.show_grid&&t.getVisibleTaskCount())&&(!!t.getGridColumns()[this.index]||!t.getVisibleTaskCount())},fallback:function(){if(!t.config.show_grid)return t.getVisibleTaskCount()?new t.$keyboardNavigation.TaskRow:null;for(var e=t.getGridColumns(),n=this.index;n>=0&&!e[n];)n--;return e[n]?new t.$keyboardNavigation.HeaderCell(n):null},getNode:function(){return t.$grid_scale.childNodes[this.index]},keys:{left:function(){this.index>0&&this.moveTo(new t.$keyboardNavigation.HeaderCell(this.index-1))},right:function(){var e=t.getGridColumns();this.index<e.length-1&&this.moveTo(new t.$keyboardNavigation.HeaderCell(this.index+1))},down:function(){var e,n=t.getChildren(t.config.root_id);n[0]&&(e=n[0]),e&&(t.config.keyboard_navigation_cells?this.moveTo(new t.$keyboardNavigation.TaskCell(e,this.index)):this.moveTo(new t.$keyboardNavigation.TaskRow(e)))},end:function(){var e=t.getGridColumns();this.moveTo(new t.$keyboardNavigation.HeaderCell(e.length-1))},home:function(){this.moveTo(new t.$keyboardNavigation.HeaderCell(0))},"enter, space":function(){document.activeElement.click()},"ctrl+enter":function(){t.createTask({},this.taskId)}}}),t.$keyboardNavigation.HeaderCell.prototype.bindAll(t.$keyboardNavigation.HeaderCell.prototype.keys)}},function(t,e){t.exports=function(t){t.$keyboardNavigation.TaskRow=function(e){if(!e){var n=t.getChildren(t.config.root_id);n[0]&&(e=n[0])}this.taskId=e,t.isTaskExists(this.taskId)&&(this.index=t.getTaskIndex(this.taskId))},t.$keyboardNavigation.TaskRow.prototype=t._compose(t.$keyboardNavigation.KeyNavNode,{_handlers:null,isValid:function(){return t.isTaskExists(this.taskId)&&t.getTaskIndex(this.taskId)>-1},fallback:function(){if(!t.getVisibleTaskCount()){var e=new t.$keyboardNavigation.HeaderCell;return e.isValid()?e:null}var n=-1;if(t.getTaskByIndex(this.index-1))n=this.index-1;else if(t.getTaskByIndex(this.index+1))n=this.index+1;else for(var o=this.index;o>=0;){if(void 0!==t.getTaskByIndex(o)){n=o;break}o--}if(n>-1)return new t.$keyboardNavigation.TaskRow(t.getTaskByIndex(n).id)},getNode:function(){if(t.isTaskExists(this.taskId)&&t.isTaskVisible(this.taskId))return t.config.show_grid?t.$grid.querySelector(".gantt_row["+t.config.task_attribute+"='"+this.taskId+"']"):t.getTaskNode(this.taskId)},focus:function(){var e=t.getTaskPosition(t.getTask(this.taskId)),n=t.config.row_height,o=t.getScrollState();e.top<o.y||e.top+n>o.y+o.inner_height?t.scrollTo(null,e.top-5*n):t.config.show_chart&&(e.left<o.x||e.left>o.x+o.inner_width)&&t.scrollTo(e.left-t.config.task_scroll_offset),t.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this)},keys:{pagedown:function(){t.getVisibleTaskCount()&&this.moveTo(new t.$keyboardNavigation.TaskRow(t.getTaskByIndex(t.getVisibleTaskCount()-1).id))},pageup:function(){t.getVisibleTaskCount()&&this.moveTo(new t.$keyboardNavigation.TaskRow(t.getTaskByIndex(0).id))},up:function(){var e=null,n=t.getPrev(this.taskId);e=n?new t.$keyboardNavigation.TaskRow(n):new t.$keyboardNavigation.HeaderCell,this.moveTo(e)},down:function(){var e=t.getNext(this.taskId);e&&this.moveTo(new t.$keyboardNavigation.TaskRow(e))},space:function(e){t.getState().selected_task!=this.taskId?t.selectTask(this.taskId):t.unselectTask(this.taskId)},"ctrl+left":function(e){t.close(this.taskId)},"ctrl+right":function(e){t.open(this.taskId)},delete:function(e){t.$click.buttons.delete(this.taskId)},enter:function(){t.showLightbox(this.taskId)},"ctrl+enter":function(){t.createTask({},this.taskId)}}}),t.$keyboardNavigation.TaskRow.prototype.bindAll(t.$keyboardNavigation.TaskRow.prototype.keys)}},function(t,e){t.exports=function(t){t.$keyboardNavigation.TaskCell=function(e,n){if(!e){var o=t.getChildren(t.config.root_id);o[0]&&(e=o[0])}this.taskId=e,this.columnIndex=n||0,this.index=t.getTaskIndex(this.taskId)},t.$keyboardNavigation.TaskCell.prototype=t._compose(t.$keyboardNavigation.TaskRow,{_handlers:null,isValid:function(){return t.$keyboardNavigation.TaskRow.prototype.isValid.call(this)&&!!t.getGridColumns()[this.columnIndex]},fallback:function(){var e=t.$keyboardNavigation.TaskRow.prototype.fallback.call(this);if(e instanceof t.$keyboardNavigation.TaskRow){for(var n=t.getGridColumns(),o=this.columnIndex;o>=0&&!n[o];)o--;return n[o]?new t.$keyboardNavigation.TaskCell(e.taskId,o):e}},getNode:function(){if(t.isTaskExists(this.taskId)&&t.isTaskVisible(this.taskId)){if(t.config.show_grid){return t.$grid.querySelector(".gantt_row["+t.config.task_attribute+"='"+this.taskId+"']").childNodes[this.columnIndex]}return t.getTaskNode(this.taskId)}},keys:{up:function(){var e=null,n=t.getPrev(this.taskId);e=n?new t.$keyboardNavigation.TaskCell(n,this.columnIndex):new t.$keyboardNavigation.HeaderCell(this.columnIndex),this.moveTo(e)},down:function(){var e=t.getNext(this.taskId);e&&this.moveTo(new t.$keyboardNavigation.TaskCell(e,this.columnIndex))},left:function(){this.columnIndex>0&&this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId,this.columnIndex-1))},right:function(){var e=t.getGridColumns();this.columnIndex<e.length-1&&this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId,this.columnIndex+1))},end:function(){var e=t.getGridColumns();this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId,e.length-1))},home:function(){this.moveTo(new t.$keyboardNavigation.TaskCell(this.taskId,0))},pagedown:function(){t.getVisibleTaskCount()&&this.moveTo(new t.$keyboardNavigation.TaskCell(t.getTaskByIndex(t.getVisibleTaskCount()-1),this.columnIndex))},pageup:function(){t.getVisibleTaskCount()&&this.moveTo(new t.$keyboardNavigation.TaskCell(t.getTaskByIndex(0),this.columnIndex))}}}),t.$keyboardNavigation.TaskCell.prototype.bindAll(t.$keyboardNavigation.TaskRow.prototype.keys),t.$keyboardNavigation.TaskCell.prototype.bindAll(t.$keyboardNavigation.TaskCell.prototype.keys)}},function(t,e){t.exports=function(t){!function(){function e(){return!!l.length}function n(n){setTimeout(function(){e()||t.focus()},1)}function o(e){t.eventRemove(e,"keydown",r),t.event(e,"keydown",r),l.push(e)}function i(){var e=l.pop();e&&t.eventRemove(e,"keydown",r),n(e)}function a(t){return t==l[l.length-1]}function r(e){var e=e||window.event,n=e.currentTarget;a(n)&&t.$keyboardNavigation.trapFocus(n,e)}function s(){o(t.getLightbox())}function d(){u=document.activeElement}function c(){setTimeout(function(){u&&(u.focus(),u=null)},1)}var l=[];t.attachEvent("onLightbox",s),t.attachEvent("onAfterLightbox",i),t.attachEvent("onLightboxChange",function(){i(),s()}),t.attachEvent("onAfterQuickInfo",function(){n()}),t.attachEvent("onMessagePopup",function(t){d(),o(t)}),t.attachEvent("onAfterMessagePopup",function(){i(),c()});var u=null;t.$keyboardNavigation.isModal=e}()}},function(t,e){t.exports=function(t){t.$keyboardNavigation.dispatcher={isActive:!1,activeNode:null,globalNode:new t.$keyboardNavigation.GanttNode,enable:function(){this.isActive=!0,this.globalNode.enable(),this.setActiveNode(this.getActiveNode())},disable:function(){this.isActive=!1,this.globalNode.disable()},isEnabled:function(){return!!this.isActive},getDefaultNode:function(){var e;return e=t.config.keyboard_navigation_cells?new t.$keyboardNavigation.TaskCell:new t.$keyboardNavigation.TaskRow,e.isValid()||(e=e.fallback()),e},setDefaultNode:function(){this.setActiveNode(this.getDefaultNode())},getActiveNode:function(){var t=this.activeNode;return t&&!t.isValid()&&(t=t.fallback()),t},focusGlobalNode:function(){this.blurNode(this.globalNode),this.focusNode(this.globalNode)},setActiveNode:function(t){this.activeNode&&this.activeNode.compareTo(t)||this.isEnabled()&&(this.blurNode(this.activeNode),this.activeNode=t,this.focusNode(this.activeNode))},focusNode:function(t){t&&t.focus&&t.focus()},blurNode:function(t){t&&t.blur&&t.blur()},keyDownHandler:function(e){if(!t.$keyboardNavigation.isModal()&&this.isEnabled()){e=e||window.event;var n=this.globalNode,o=t.$keyboardNavigation.shortcuts.getCommandFromEvent(e),i=this.getActiveNode();i?i.findHandler(o)?i.doAction(o,e):n.findHandler(o)&&n.doAction(o,e):this.setDefaultNode()}},_timeout:null,delay:function(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e||1)}}}}])});
//# sourceMappingURL=dhtmlxgantt_keyboard_navigation.js.map