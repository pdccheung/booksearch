const BookList = (props) => {
    return (
        <div>
            <h4>Title: {props.books.title}</h4>
            <p>Author: {props.books.author}</p>
        </div>
    )
}

export default BookList;