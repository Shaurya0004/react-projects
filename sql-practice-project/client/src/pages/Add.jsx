import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate=useNavigate();

  const [book,setBook]=useState({
    title:'',
    desc:'',
    price:null,
    cover:''
  })

  const valueHandler=(e)=>{
    setBook((prevState)=>{
      return ({...prevState,[e.target.name]:e.target.value})
    })
  }
  
  const addBookHandler=async (e)=>{
    e.preventDefault();
    console.log(book);
      try{
        await axios.post('http://localhost:8800/books',book);
        navigate('/');
      }
      catch(err){
        console.log(err);
      }
  }

  return (
    <div className='add'>
      <input type="text" onChange={valueHandler} placeholder="title" name='title' />
      <input type="text" onChange={valueHandler} placeholder="desc" name='desc'/>
      <input type="number" onChange={valueHandler} placeholder="price" name='price'/>
      <input type="text" onChange={valueHandler} placeholder="cover" name='cover'/>
      <button onClick={addBookHandler}>add</button>
    </div>
  )
}

export default Add