/*
 * ShirtlessKirk copyright 2015
 * https://gist.github.com/ShirtlessKirk/6cdc2c32ddd97dc9c706
 */
!function t(e){"use strict";var a,n,r,i,d,o,s,c,u,h=e.document,f=h.createElement("_"),v="DOMAttrModified";function l(t){return t.replace(i,function(t,e){return e.toUpperCase()})}function E(){var t={};for(r=0,s=(n=this.attributes).length;r<s;r+=1)(c=(a=n[r]).name.match(d))&&(t[l(c[1])]=a.value);return t}function m(){o?f.removeEventListener(v,m,!1):f.detachEvent("on"+v,m),u=!0}void 0===f.dataset&&(i=/\-([a-z])/ig,d=/^data\-(.+)/,o=!!h.addEventListener,u=!1,o?f.addEventListener(v,m,!1):f.attachEvent("on"+v,m),f.setAttribute("foo","bar"),Object.defineProperty(e.Element.prototype,"dataset",{get:u?function t(){return this._datasetCache||(this._datasetCache=E.call(this)),this._datasetCache}:E}),u&&o&&h.addEventListener(v,function t(e){delete e.target._datasetCache},!1))}(window);


/*
 * Minimal classList shim for IE 9
 * https://gist.github.com/devongovett/1381839
 * By Devon Govett
 * MIT LICENSE
 */
"classList"in document.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){var n=this;function e(e){return function(t){var s=n.className.split(/\s+/),i=s.indexOf(t);e(s,i,t),n.className=s.join(" ")}}var t={add:e(function(n,e,t){~e||n.push(t)}),remove:e(function(n,e){~e&&n.splice(e,1)}),toggle:e(function(n,e,t){~e?n.splice(e,1):n.push(t)}),contains:function(e){return!!~n.className.split(/\s+/).indexOf(e)},item:function(e){return n.className.split(/\s+/)[e]||null}};return Object.defineProperty(t,"length",{get:function(){return n.className.split(/\s+/).length}}),t}});
