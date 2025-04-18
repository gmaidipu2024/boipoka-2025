import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const {id} = useParams();
  const bookId= parseInt(id)
  const data =useLoaderData();
  const singleBook= data.find((book)=>book.bookId === bookId)
  const {bookName,image} = singleBook
  
  
  return (
    <div className=' w-2/3 mx-auto py-3'>
    
      <img className='w-48' src={image} alt="" />
      <h2 className=' py-2' >{bookName}</h2>
      <div >
      <button className="btn btn-accent ml-3">Read</button>
      <button className="btn btn-info ml-3">WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;