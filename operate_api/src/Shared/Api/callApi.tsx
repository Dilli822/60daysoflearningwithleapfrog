import React, { useEffect } from 'react';
import axios from 'axios';

function callApi (){
    // useEffect(()=>{
    //     const getApi = () => {
    //         // getting json reponse api then capturing and logging the same response
    //         axios.get('https://jsonplaceholder.typicode.com/todos').then((response) =>{
    //             console.log(response.data);
    //         })
    //         // catching error
    //         .catch((e)=> console.log(e))
    //     };
    //     getApi();
    // }, []) // Runs only on the first render without passing no any prop or state
}

export default callApi;

/*
The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)
*/