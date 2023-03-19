import React, { useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const navigate=useNavigate();
  const location=useLocation();

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
  
  const updateBookHandler=async (e)=>{
    const id=location.pathname.split('/')[2];
    e.preventDefault();
    console.log(book);
      try{
        await axios.put('http://localhost:8800/books/'+id,book);
        navigate('/');
      }
      catch(err){
        console.log(err);
      }
  }

  return (
    <div className='update'>
      <h1>Update the Book</h1>
      <input type="text" onChange={valueHandler} placeholder="title" name='title' />
      <input type="text" onChange={valueHandler} placeholder="desc" name='desc'/>
      <input type="number" onChange={valueHandler} placeholder="price" name='price'/>
      <input type="text" onChange={valueHandler} placeholder="cover" name='cover'/>
      <button onClick={updateBookHandler}>update</button>
    </div>
  )
}

export default Update