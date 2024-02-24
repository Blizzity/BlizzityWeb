"use strict";document.addEventListener("DOMContentLoaded",function(){var tableAccordion=new Accordion(document.querySelector(".accordion-table"));// open item if section corresponds with url fragment
var urlFrag=location.hash;var targetEl;if(urlFrag&&!/fn:/.test(urlFrag)){targetEl=document.querySelector(urlFrag)}// close all items if JS present
tableAccordion.closeAll(targetEl);if(targetEl){tableAccordion.openItem(document.querySelector(urlFrag))}//open item onHash change
window.addEventListener("hashchange",function(){urlFrag=location.hash;if(urlFrag&&!/fn:/.test(urlFrag)){targetEl=document.querySelector(urlFrag)}// close all items if JS present
tableAccordion.closeAll(targetEl);if(targetEl){tableAccordion.openItem(document.querySelector(urlFrag))}})});
