import React, { } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
  // const useData=use(booksPromise);
  // console.log(useData);
  // console.log(singleBook);
  const {bookName, image, bookId, rating,category, tags, yearOfPublishing,publisher} = singleBook;
  

  return (
    <Link to={`bookDetails/${bookId}`}>
    <div>
      <div className="card bg-base-100 w-96 shadow-md border p-6">
  <figure className='p-4 bg-gray-200 w-2/3 mx-auto'>
    <img className='h-[166px]'
      src={image} />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-10'>
    {
      tags.map((tag)=><button >{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>{publisher}</p>
    <div className='border-t-1 border-dashed py-2'>

    </div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaRegStarHalfStroke /></div>
    </div>
  </div>
</div>
    </div>
    </Link>
  );
};

export default Book;