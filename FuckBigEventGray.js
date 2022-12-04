// ==UserScript==
// @name         FuckBigEventGray
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       HorseGramThink
// @match        *
// @icon         https://www.google.com/s2/favicons?sz=64&domain=example.com
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	
	// Your code here...
	var head = document.getElementsByTagName("head")[0];
	var style = document.createElement("style");
	style.innerHTML = "html {filter: none !important;-webkit-filter: none !important;-moz-filter: none !important;-ms-filter: none !important;-o-filter: none !important;-webkit-filter: none !important;} body {filter: none !important;-webkit-filter: none !important;-moz-filter: none !important;-ms-filter: none !important;-o-filter: none !important;-webkit-filter: none !important;}";
	head.appendChild(style);
})();