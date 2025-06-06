import React, { Suspense } from 'react';
import Book from '../Singelbook/Book';

const Books = ({data}) => {

  // const [allBooks, setAllBooks] = useState([]);
  // useEffect(()=>{
  //   fetch("booksData.json")
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     setAllBooks(data)
  //   })
  // },[])
  // const booksPromise=fetch('./booksData.json').then((res)=>res.json());


  return (
    <div>
      <h2>Book</h2>
      <Suspense fallback={<span> data is loading....</span>}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4'>
      {
        data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}> </Book>)
      }
      </div>
      </Suspense>
    </div>
  );
};

export default Books;