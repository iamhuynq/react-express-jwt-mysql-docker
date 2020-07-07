import React, { useState } from 'react';

const NewBookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        setAuthor('');
    }

    return (
        <>
            <h1 class="text-center mt-5">Create Book</h1>
            <form className="form-group w-25 mx-auto" action="/book/create" method="POST" encType="multipart/form-data">
                <label htmlFor="exampleInputEmail1">Book name</label>
                <input className="form-control" id="exampleInputEmail1" type="text" name="name" value="" />
                <label htmlFor="exampleInputPassword1">Book author</label>
                <input className="form-control" id="exampleInputPassword1" type="text" name="author" />
                <label htmlFor="exampleInputPassword2">Book image</label><input className="form-control-file" id="exampleInputPassword2" type="file" name="image" />
                <div className="w-100 text-center mt-3"><button className="btn btn-primary" type="submit">Submit</button></div>
            </form>
        </>

    );
}

export default NewBookForm;