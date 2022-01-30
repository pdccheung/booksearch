import React, {useState} from 'react';
import './Search.css'


const Search = () => {

    const [searchedBook, setSearchedBook] = useState('')
    const bookSearchHandler = (event) => {
        event.preventDefault();
        setSearchedBook(event.target.value)
    }
  return <div>
      <form className='search-form'>
          <label>Search For Book:  </label>
          <input placeholder='book title' type="text" onChange={bookSearchHandler}></input>
          <button>Search</button>
      </form>
      
  </div>;
};

export default Search;
