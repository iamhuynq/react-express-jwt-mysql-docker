import React, { createContext, useState, useEffect } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);

    const addBook = (title, author) => {
        fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ title, author })
        }).then(res => res.json()).then(data => console.log(data))
        setBooks([...books, { title: title, author: author, id: 10 }])
    }

    const removeBook = id => {
        setBooks(books.filter(book => book.id !== id))
    }
    
    useEffect(() => {
        fetch('/api/books').then(res => res.json()).then(data => {console.log(data);setBooks(data.data);})
    }, [])

    return <BookContext.Provider value={{ books, addBook, removeBook }}>
        {props.children}
    </BookContext.Provider>
}

export default BookContextProvider