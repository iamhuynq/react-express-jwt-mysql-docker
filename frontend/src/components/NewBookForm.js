import React, { useState } from 'react';

const NewBookForm = props => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', image)
        formData.append('title', title)
        formData.append('author', author)
        fetch('/api/books/', {
            method: 'POST',
            body: formData,
        }).then(res => res.json()).then(data => {
            if (data.success){
                props.history.push('/home');
            }else{
                setError(data.message)
            }
        });
        // setTitle('');
        // setAuthor('');
    }

    const imageSelectedHandle = e => {
        setImage(e.target.files[0])
    }

    return (
        <>
            <h1 class="text-center mt-5">Create Book</h1>
            <form className="form-group w-25 mx-auto" encType="multipart/form-data">
                {error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>}
                <label htmlFor="exampleInputEmail1">Book name</label>
                <input onChange={e => setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" type="text" value={title} />
                <label htmlFor="exampleInputPassword1">Book author</label>
                <input onChange={e => setAuthor(e.target.value)} className="form-control" id="exampleInputPassword1" value={author} type="text"/>
                <label htmlFor="exampleInputPassword2">Book image</label>
                <input className="form-control-file" id="exampleInputPassword2" type="file" onChange={imageSelectedHandle} />
                <div className="w-100 text-center mt-3"><button className="btn btn-primary" onClick={handleSubmit}>Submit</button></div>
            </form>
        </>

    );
}

export default NewBookForm;