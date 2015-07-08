"use strict";

/**
 * To run this file and othe standalone examples:
 * $ npm install -g babel
 * $ babel-node <this-file.js>
 *
 */

var React = require("react");

var element = <div> Salut, acesta este un element</div>

var stringRendering  = React.renderToString(element);
var staticMarkupRendering = React.renderToStaticMarkup(element);

console.log(stringRendering);
console.log(staticMarkupRendering);
