/*
@license

dhtmlxGantt v.3.2.1 Professional
This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Gantt.plugin(function(t){t.config.multiselect=!0,t.config.multiselect_one_level=!1,t._multiselect={selected:{},one_level:!0,active:!0,isActive:function(){return this.update_state(),this.active},update_state:function(){this.one_level=t.config.multiselect_one_level;var e=this.active;this.active=t.config.multiselect,this.active!=e&&this.reset()},reset:function(){this.selected={}},set_last_selected:function(t){this.last_selected=t},getLastSelected:function(){var e=this.last_selected;return e&&t.isTaskExists(e)?e:null;

},select:function(e,n){t.callEvent("onBeforeTaskMultiSelect",[e,!0,n])&&(this.selected[e]=!0,this.set_last_selected(e),t.callEvent("onTaskMultiSelect",[e,!0,n]))},toggle:function(t,e){this.selected[t]?this.unselect(t,e):this.select(t,e)},unselect:function(e,n){t.callEvent("onBeforeTaskMultiSelect",[e,!1,n])&&(this.selected[e]=!1,this.last_selected==e&&(this.last_selected=null),t.callEvent("onTaskMultiSelect",[e,!0,n]))},isSelected:function(e){return!(!t.isTaskExists(e)||!this.selected[e])},getSelected:function(){
var e=[];for(var n in this.selected)this.selected[n]&&t.isTaskExists(n)?e.push(n):this.selected[n]=!1;return e.sort(function(e,n){return t.calculateTaskLevel(t.getTask(e))>t.calculateTaskLevel(t.getTask(n))?1:-1}),e},forSelected:function(t){for(var e=this.getSelected(),n=0;n<e.length;n++)t(e[n])},is_same_level:function(e){if(!this.one_level)return!0;var n=this.getLastSelected();return n&&t.isTaskExists(n)&&t.isTaskExists(e)?!(t.calculateTaskLevel(t.getTask(n))!=t.calculateTaskLevel(t.getTask(e))):!0;

},_after_select:function(e){t.refreshTask(e)},_do_selection:function(e){if(!this.isActive())return!0;var n=t.locate(e),i=this.getSelected();if(!n)return!0;if(!t.callEvent("onBeforeMultiSelect",[e]))return!0;if(e.ctrlKey)n&&(this.toggle(n,e),this._after_select(n));else if(e.shiftKey&&i.length){var a=this.getLastSelected();if(a||(a=i[i.length-1]),n&&a!=n){for(var s=t.getGlobalTaskIndex(a),r=t.getGlobalTaskIndex(n),o=n;t.getGlobalTaskIndex(o)!=s;)this.select(o),this._after_select(o),o=s>r?t.getNext(o):t.getPrev(o);

this.forSelected(dhtmlx.bind(function(e){var n=t.getGlobalTaskIndex(e);(n>s&&n>r||s>n&&r>n)&&(this.unselect(e),t.refreshTask(e))},this))}}else this.forSelected(dhtmlx.bind(function(e){e!=n&&(this.unselect(e),t.refreshTask(e))},this)),this.isSelected(n)||(this.select(n),this._after_select(n));return this.isSelected(n)?!0:!1}},function(){var e=t.selectTask;t.selectTask=function(t){var n=e.call(this,t);return this.config.multiselect&&this._multiselect.select(t),n};var n=t.unselectTask;t.unselectTask=function(t){
var e=n.call(this,t);return this.config.multiselect&&this._multiselect.unselect(t),e},t.toggleTaskSelection=function(t){this.config.multiselect&&this._multiselect.toggle(t)},t.getSelectedTasks=function(){return this._multiselect.getSelected()},t.eachSelectedTask=function(t){return this._multiselect.forSelected(t)},t.isSelectedTask=function(t){return this._multiselect.isSelected(t)},t.getLastSelectedTask=function(){return this._multiselect.getLastSelected()}}(),t.attachEvent("onTaskIdChange",function(e,n){
var i=t._multiselect;return i.isActive()?void(t.isSelectedTask(e)&&(i.unselect(e,null),i.select(n,null),t.refreshTask(n))):!0}),t.attachEvent("onAfterTaskDelete",function(e,n){var i=t._multiselect;return i.isActive()?(i.selected[e]&&i.unselect(e,null),void i.forSelected(function(e){t.isTaskExists(e)||i.unselect(e,null)})):!0}),t.attachEvent("onBeforeTaskMultiSelect",function(e,n,i){var a=t._multiselect;return n&&a.isActive()?a.is_same_level(e):!0}),t.attachEvent("onTaskClick",function(e,n){var i=t._multiselect._do_selection(n);

return t.callEvent("onMultiSelect",[n]),i}),t.attachEvent("onEmptyClick",function(e){return t._multiselect._do_selection(e),t.callEvent("onMultiSelect",[e]),!0})});
//# sourceMappingURL=../sources/ext/dhtmlxgantt_multiselect.js.map