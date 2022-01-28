import Books from './components/Books';
import Search from './components/Search';


import './App.css';

function App() {
  const someBooks = [
  {
    id: "001",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald"
  }, 
  {
    id: "002",
    title: "To kill a mockingbird",
    author: "Harper Lee"
  },
  {
    id: "003",
    title: "Data structure and Algorithms",
    author: "Niklaus Wirth"
  }
]
  return (
    <div className="App">
       <h2>Book Search Tool using OPEN API  </h2> 
      <Search/>  
      <Books books = {someBooks}/>
    </div>
  );
}

export default App;
