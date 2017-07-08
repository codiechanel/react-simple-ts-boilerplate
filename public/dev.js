(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
// import * as React from "react";
// import logo from './logo.svg';
// import './App.css'
// /// <reference path="../node_modules/@types/react/index.d.ts" /> 
// /// <reference types="react" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        console.log("mount");
    };
    App.prototype.render = function () {
        return (React.createElement("div", { className: "App" },
            React.createElement("div", { className: "App-header" },
                React.createElement("h2", null, "Welcome to React")),
            React.createElement("p", { className: "App-intro" },
                "To get started, edit ",
                React.createElement("code", null, "src/App.js"),
                " and save to reload.")));
    };
    return App;
}(React.Component));
exports.default = App;

},{}],2:[function(require,module,exports){
"use strict";
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// /// <reference path="../node_modules/@types/react/index.d.ts" /> 
Object.defineProperty(exports, "__esModule", { value: true });
// /// <reference path="../node_modules/@types/react-dom/index.d.ts" /> 
// /// <reference types="react" />
// // /// <reference types="react-dom" />
// // import ReactDOM from 'react-dom';
// //  import * as React from "react";
//  import React from "react";
// //  let { ReactDOM } = React 
// // import './index.css';
// // declare var ReactDOM: any;
// /// <reference types="react-dom" />
// import ReactDOM from 'react-dom';
// import * as ReactObj from "react";
var app_1 = require("./app");
// import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(React.createElement(app_1.default, null), document.getElementById('root'));
// registerServiceWorker();

},{"./app":1}]},{},[2]);
