import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = props => {
    const [info, setInfo] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: info.email, password: info.password })
        }).then(res => res.json()).then(data => {
            if(!data.success) setError(data.message)
            else props.history.push('/home');
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
            <h1 className="text-center">Sign In</h1>
            <form className="w-25 mx-auto" onSubmit={onSubmit}>
                {error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>}
                <input onChange={onChange} name="email" type="email" className="form-control" placeholder="Enter email" />     
                <input onChange={onChange} name="password" type="password" className="form-control mt-2" placeholder="Password" />
                <div className="mt-2 d-flex w-50 justify-content-between mx-auto">
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    <Link to="/signup">
                        <button className="btn btn-primary">Sign Up</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
