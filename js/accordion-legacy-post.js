"use strict";/**
 * This is meant to give legacy support to Divi's et_pb_toggle class.
 */document.addEventListener("DOMContentLoaded",function(){var accordionElems=document.querySelectorAll(".et_pb_toggle");forEach(accordionElems,function(el){var accordion=new AccordionAlt(el,{containerIsItem:true});// close all items if JS present
accordion.closeAll();el.addEventListener("openitem",function(){el.classList.remove("et_pb_toggle_close");el.classList.add("et_pb_toggle_open")});el.addEventListener("closeitem",function(){el.classList.add("et_pb_toggle_close");el.classList.remove("et_pb_toggle_open")})})});
