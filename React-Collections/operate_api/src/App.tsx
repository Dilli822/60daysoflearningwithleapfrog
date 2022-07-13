import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import  calliApiAsyncAwait  from './Shared/Api/ayncAwaitCallApi';
import  callApi  from './Shared/Api/callApi';
import axios from 'axios';
import './App.css';

function App() {
  const [apiData, setApiData] = useState();
  const [post, getPost] = useState([])
  const API = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(()=>{
        const getApi = () => {
            // getting json reponse api then capturing and logging the same response
            axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) =>{
                console.log(response.data);
            })
            // catching error
            .catch((e)=> console.log(e))
        };
        getApi();
    }, [true]) // Runs only on the first render without passing no any prop or state

  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getPost(res)
      })
  }

  return (
    <>
    <div>
      <span> GET REQUEST </span>
    </div>
    </>
  );
}

export default App;
