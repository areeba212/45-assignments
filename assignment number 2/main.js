"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Personal Message: store a personas name in a variable, and print a message to that person.
// your message should be simple, such as "hello eric, would u like to lean some python today?"
var promptSync = require("prompt-sync");
var prompt = promptSync();
var user_input;
user_input = prompt("Please enter your name: ");
console.log("hello " + user_input + ", i hope you are doing fine.");
