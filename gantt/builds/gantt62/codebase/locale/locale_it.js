/*
@license

dhtmlxGantt v.6.2.6 Professional Evaluation
This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Gantt.plugin(function(e){!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/codebase/",n(n.s=206)}({206:function(t,n){e.locale={date:{month_full:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],month_short:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],day_full:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],day_short:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"]},labels:{new_task:"Nuovo compito",dhx_cal_today_button:"Oggi",day_tab:"Giorno",week_tab:"Settimana",month_tab:"Mese",new_event:"Nuovo evento",icon_save:"Salva",icon_cancel:"Chiudi",icon_details:"Dettagli",icon_edit:"Modifica",icon_delete:"Elimina",confirm_closing:"",confirm_deleting:"Sei sicuro di confermare l'eliminazione?",section_description:"Descrizione",section_time:"Periodo di tempo",section_type:"Tipo",column_wbs:"WBS",column_text:"Nome Attività",column_start_date:"Inizio",column_duration:"Durata",column_add:"",link:"Link",confirm_link_deleting:"sarà eliminato",link_start:" (inizio)",link_end:" (fine)",type_task:"Task",type_project:"Project",type_milestone:"Milestone",minutes:"Minuti",hours:"Ore",days:"Giorni",weeks:"Settimane",months:"Mesi",years:"Anni",message_ok:"OK",message_cancel:"Chiudi",section_constraint:"Constraint",constraint_type:"Constraint type",constraint_date:"Constraint date",asap:"As Soon As Possible",alap:"As Late As Possible",snet:"Start No Earlier Than",snlt:"Start No Later Than",fnet:"Finish No Earlier Than",fnlt:"Finish No Later Than",mso:"Must Start On",mfo:"Must Finish On",resources_filter_placeholder:"type to filter",resources_filter_label:"hide empty"}}}})})});