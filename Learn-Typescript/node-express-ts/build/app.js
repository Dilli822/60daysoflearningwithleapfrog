"use strict";
// import express from 'express';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// const port = 3001; //serving port 
// // .get method accepts anamolous function with req and res param sending response
// // response Hello world serving 3001 port
// app.get('/', (req, res)=>{
//     res.send('Hello world');
// }); 
// // Adding get request
// // app.listen takes one param as port and another anamolous function returning message
// app.listen(port, ()=> {
//     console.log(`Connected successfully on port ${port}`);
// });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3001; //serving port 
// .get method accepts anamolous function with req and res param sending response
// response Hello world serving 3001 port
app.get('/', function (req, res) {
    res.send('Hello world, I am from node and typescript');
    // res.asdfd(); // surely shows error
});
// Adding get request
// app.listen takes one param as port and another anamolous function returning message
app.listen(port, function () {
    console.log("Connected successfully on port ".concat(port));
});
