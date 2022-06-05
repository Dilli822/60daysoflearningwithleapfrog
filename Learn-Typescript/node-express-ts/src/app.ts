// import express from 'express';

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

import express, {Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 3001; //serving port 

// .get method accepts anamolous function with req and res param sending response
// response Hello world serving 3001 port
app.get('/', (req: Request, res: Response)=>{
    res.send('Hello world, I am from node and typescript');
    // res.asdfd(); // surely shows error
}); 
// Adding get request

// app.listen takes one param as port and another anamolous function returning message
app.listen(port, ()=> {
    console.log(`Connected successfully on port ${port}`);
});
