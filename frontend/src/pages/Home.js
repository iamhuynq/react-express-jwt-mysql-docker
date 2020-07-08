import React, { useState, useEffect } from 'react';

const Home = props => {
    const [books, setBooks] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const bookList = books.map(book => <div className="col-md-3 col-sm-6 mb-2"><div className="card">
        <img className="card-img-top" src={"http://localhost:5001/upload/" + book.image} />
        <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.author}</p>
        </div>
    </div></div>);
    useEffect(() => {
        fetch('/api/books').then(res => res.json()).then(data => {
            if (data.success) {
                setBooks(data.data)
                setIsAuth(true);
            } else {
                props.history.push('/login')
            }
        })
    }, [])
    return (
        <>
            {!isAuth ? <div /> : <div className="container mt-3">
                <div className="row f-flex flex-wrap">{!books.length ? <div>Have no books</div> : bookList}</div>
            </div>}
        </>
    );
}

export default Home;
