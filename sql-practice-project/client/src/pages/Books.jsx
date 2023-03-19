import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const deleteBookHandler=async(id)=>{
    try{
      await axios.delete('http://localhost:8800/books/'+id);
      window.location.reload();
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <h1>DUHAN BOOK STORE</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className="update_b"><Link to={`/update/${book.id}`}>update</Link></button>
            <button className="delete" onClick={()=>deleteBookHandler(book.id)}>delete</button>
          </div>
        ))}
      <button>
        <Link to={'/add'}>Add New Book</Link>
      </button>
      </div>
    </div>
  );
};

export default Books;
