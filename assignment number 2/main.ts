// Personal Message: store a personas name in a variable, and print a message to that person.
// your message should be simple, such as "hello eric, would u like to lean some python today?"
 import * as promptSync from 'prompt-sync'
 const prompt = promptSync();
 let user_input: string
 user_input = prompt("Please enter your name: ");
 console.log("hello " + user_input + ", i hope you are doing fine.");
