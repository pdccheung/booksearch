import React, {useState} from 'react';
import './Search.css'


const Search = () => {
    // const [searchedTerm, setSearchedTerm] = useState()
  return <div>
      <form className='search-form'>
          <input placeholder='Search a book title' ></input>
          <button>Search</button>
      </form>
      
  </div>;
};

export default Search;
