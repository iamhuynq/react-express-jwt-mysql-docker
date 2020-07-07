import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = props => {
    const [info, setInfo] = useState({
        email: '',
        password1: '',
        password2: '',
    });

    const [error, setError] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if(info.password1 !== info.password2) setError('Password is not correct')
        else setError('')
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: info.email, password: info.password1 })
        }).then(res => res.json()).then(data => {
            if(!data.success) setError(data.message)
            else props.history.push('/login');
        });
    }

    const onChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1 className="text-center">Sign Up</h1>
            <form className="w-25 mx-auto" onSubmit={onSubmit}>
                {error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>}
                <input onChange={onChange} type="email" className="form-control" placeholder="Enter email" name="email" required />
                <input onChange={onChange} type="password" name="password1" className="form-control mt-2" placeholder="Password" required />
                <input onChange={onChange} type="password" name="password2" className="form-control mt-2" placeholder="Confirm password" required />
                <div className="mt-2 d-flex w-50 justify-content-between mx-auto">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <Link to="/login">
                        <button className="btn btn-primary">Sign In</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
