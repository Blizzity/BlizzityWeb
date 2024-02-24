"use strict";document.addEventListener("DOMContentLoaded",function(){// Use AccordionAlt if page loads the file
var Accordion=window.AccordionAlt||window.Accordion;var faqAccordion=document.querySelectorAll(".accordion-faq");forEach(faqAccordion,function(el){var accordionItem=new Accordion(el);// close all items if JS present
accordionItem.closeAll();/**
     * Only item if:
     * A. urlFrag is present
     * B. urlFrag does not start with `fn:` (footnote ref)
     * C. urlFrag is for an actual accordion item
     */var urlFrag=location.hash;var faqItem=urlFrag&&document.querySelector(urlFrag);if(urlFrag&&!/fn:/.test(urlFrag)&&faqItem.classList.contains("accordion__item")){accordionItem.openItem(faqItem)}});//change hash onclick
var faqQuestions=document.querySelectorAll(".accordion__item-heading");for(var i=0;i<faqQuestions.length;i++){faqQuestions[i].addEventListener("click",function(event){var urlFrag=event.target.closest(".accordion__item").id;if(urlFrag){if(history.pushState){history.pushState(null,null,"#"+urlFrag)}else{location.hash="#"+urlFrag}}})}});
