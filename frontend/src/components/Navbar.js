import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = props => {
    const [userEmail, setUserEmail] = useState('');
    const logout = e => {
        e.preventDefault();
        fetch('/api/users/logout', {
            method: 'POST'
        }).then(res => props.history.push('/login'));
    }

    useEffect(() => {
        fetch('/api/users/getInfo').then(res => res.json()).then(data => {
            if (data.success) {
                setUserEmail(data.email)
            } else {
                props.history.push('/login')
            }
        })
    }, [])
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">{userEmail}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to="/home" className="nav-item nav-link">Home</Link>
                    <Link to="/new" className="nav-item nav-link">Create Book</Link>
                    <span onClick={logout} role="button" class="nav-item nav-link">Logout</span>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);