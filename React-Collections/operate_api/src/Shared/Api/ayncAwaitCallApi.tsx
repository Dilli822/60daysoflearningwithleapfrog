import React, {useEffect, useState} from "react";
import axios from 'axios';

const calliApiAsyncAwait = () => {
    useEffect(()=>{
        // using async await 
        const getApi = async () => {
            // try catch method
            try {
                // declaring response variable and getting api with axios
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos'
                );
                console.log(response.data);
            } catch(e){ // catching error as e
                console.log(e);
            }
        }; 
        getApi();
    }, []);
}

export default calliApiAsyncAwait;