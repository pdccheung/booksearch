import BookList from "./BookList";


const Books = (props) =>  {
    return (
        <div>
       <h4>Search Results: </h4> 
        <BookList books = {props.books[0]} />
        <BookList books = {props.books[1]} />
        <BookList books = {props.books[2]} />
        </div>  
    )
}

export default Books