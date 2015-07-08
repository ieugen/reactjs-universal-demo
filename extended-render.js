/**
 * To run this file and othe standalone examples:
 * $ npm install -g babel
 * $ babel-node <this-file.js>
 *
 */

"use strict";

var React = require("react");

var Greeting = React.createClass({

    render: function(){
        return (
                <h1>Hello {this.props.name} </h1>
        );
    }
});

console.log(React.renderToStaticMarkup( <Greeting name="Euegn" /> ));
console.log(React.renderToStaticMarkup( <Greeting name="Adi" /> ));

