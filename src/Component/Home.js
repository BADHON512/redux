import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = ({value}) => {
   const dispatch= useDispatch()
   const {c}= useSelector(state=>state.custom)

   const add=()=>{
    dispatch({
        type:"increment"
    })

    
   }
   const a=()=>{
        dispatch({
            type:"incrementByValue",
            payload:100
        })
    }
    return (
        <div>
          <h1>{c}</h1>  
          <button onClick={add}>increment</button>
          <button>decrement</button>
          <button onClick={a}>one click get 25</button>
        </div>
    );
};

export default Home;