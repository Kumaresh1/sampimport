/*
@license

dhtmlxGantt v.4.2.3 Professional
This software is covered by DHTMLX Enterprise License. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Gantt.plugin(function(t){t.config.multiselect=!0,t.config.multiselect_one_level=!1,t._multiselect={selected:{},one_level:!0,active:!0,_first_selected_when_shift:null,isActive:function(){return this.update_state(),this.active},update_state:function(){this.one_level=t.config.multiselect_one_level;var e=this.active;this.active=t.config.multiselect,this.active!=e&&this.reset()},reset:function(){this.selected={}},set_last_selected:function(t){this.last_selected=t},getLastSelected:function(){var e=this.last_selected;
return e&&t.isTaskExists(e)?e:null},select:function(e,i){t.callEvent("onBeforeTaskMultiSelect",[e,!0,i])&&(this.selected[e]=!0,this.set_last_selected(e),t.callEvent("onTaskMultiSelect",[e,!0,i]))},toggle:function(t,e){this.selected[t]?this.unselect(t,e):this.select(t,e)},unselect:function(e,i){t.callEvent("onBeforeTaskMultiSelect",[e,!1,i])&&(this.selected[e]=!1,this.last_selected==e&&(this.last_selected=null),t.callEvent("onTaskMultiSelect",[e,!0,i]))},isSelected:function(e){return!(!t.isTaskExists(e)||!this.selected[e]);
},getSelected:function(){var e=[];for(var i in this.selected)this.selected[i]&&t.isTaskExists(i)?e.push(i):this.selected[i]=!1;return e.sort(function(e,i){return t.calculateTaskLevel(t.getTask(e))>t.calculateTaskLevel(t.getTask(i))?1:-1}),e},forSelected:function(t){for(var e=this.getSelected(),i=0;i<e.length;i++)t(e[i])},is_same_level:function(e){if(!this.one_level)return!0;var i=this.getLastSelected();return i&&t.isTaskExists(i)&&t.isTaskExists(e)?!(t.calculateTaskLevel(t.getTask(i))!=t.calculateTaskLevel(t.getTask(e))):!0;
},_after_select:function(e){t.refreshTask(e)},_do_selection:function(e){if(!this.isActive())return!0;if(!t.callEvent("onBeforeMultiSelect",[e]))return!0;var i=t.locate(e);if(!i)return!0;var n=this.getLastSelected(),a=this.getSelected();if(e.shiftKey?null==this._first_selected_when_shift&&(this._first_selected_when_shift=i):this._first_selected_when_shift=i,e.ctrlKey||e.metaKey)i&&(this.toggle(i,e),this._after_select(i));else if(e.shiftKey&&a.length){if(n||0==n||(n=a[a.length-1]),i||0==i){for(var r=t.getGlobalTaskIndex(this._first_selected_when_shift),s=t.getGlobalTaskIndex(i),o=t.getGlobalTaskIndex(n),l=n;t.getGlobalTaskIndex(l)!=r;)this.unselect(l),
this._after_select(l),l=r>o?t.getNext(l):t.getPrev(l);for(l=i;t.getGlobalTaskIndex(l)!=r;)this.select(l),this._after_select(l),l=r>s?t.getNext(l):t.getPrev(l)}}else this.forSelected(t.bind(function(e){e!=i&&(this.unselect(e),t.refreshTask(e))},this)),this.isSelected(i)||(this.select(i),this._after_select(i));return this.isSelected(i)?!0:!1}},function(){var e=t.selectTask;t.selectTask=function(t){var i=e.call(this,t);return this.config.multiselect&&this._multiselect.select(t),i};var i=t.unselectTask;
t.unselectTask=function(t){void 0!==t&&this.config.multiselect&&this._multiselect.unselect(t);var e=i.call(this,t);return e},t.toggleTaskSelection=function(t){this.config.multiselect&&this._multiselect.toggle(t)},t.getSelectedTasks=function(){return this._multiselect.getSelected()},t.eachSelectedTask=function(t){return this._multiselect.forSelected(t)},t.isSelectedTask=function(t){return this._multiselect.isSelected(t)},t.getLastSelectedTask=function(){return this._multiselect.getLastSelected()}}(),
t.attachEvent("onTaskIdChange",function(e,i){var n=t._multiselect;return n.isActive()?void(t.isSelectedTask(e)&&(n.unselect(e,null),n.select(i,null),t.refreshTask(i))):!0}),t.attachEvent("onAfterTaskDelete",function(e,i){var n=t._multiselect;return n.isActive()?(n.selected[e]&&n.unselect(e,null),void n.forSelected(function(e){t.isTaskExists(e)||n.unselect(e,null)})):!0}),t.attachEvent("onBeforeTaskMultiSelect",function(e,i,n){var a=t._multiselect;return i&&a.isActive()?a.is_same_level(e):!0}),t.attachEvent("onTaskClick",function(e,i){
var n=t._multiselect._do_selection(i);return t.callEvent("onMultiSelect",[i]),n}),t.attachEvent("onEmptyClick",function(e){return t._multiselect._do_selection(e),t.callEvent("onMultiSelect",[e]),!0})});
//# sourceMappingURL=../sources/ext/dhtmlxgantt_multiselect.js.map