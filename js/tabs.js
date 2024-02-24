"use strict";document.addEventListener("DOMContentLoaded",function(){var buttons=document.body.querySelectorAll("[data-tab-button]");var fallbackHeadings=document.body.querySelectorAll("[data-tab-fallback-heading]");var sections=document.body.querySelectorAll("[data-tab-section]");// show the buttons and hide the fallback titles
buttons.forEach(function(button){return show(button)});fallbackHeadings.forEach(function(heading){return hide(heading)});// hide all but first section
sections.forEach(function(section,index){if(index===0){return}hide(section)});// bind actions
document.addEventListener("click",function(ev){var el=ev.target;// If the clicked element doesn't have the right selector, bail
if(el.matches("[data-tab-button]")){var sectionId=el.getAttribute("for");var selectedSection=document.body.querySelector("#"+sectionId);// update selected section button
buttons.forEach(function(button){return button.removeAttribute("data-tab-button-selected")});el.setAttribute("data-tab-button-selected","");// show selected section
sections.forEach(function(section){return hide(section)});show(selectedSection);ev.preventDefault()}},false);// utility functions
function hide(el){el.style.display="none"}function show(el){el.style.display="inline-block"}});
