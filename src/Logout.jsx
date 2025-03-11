import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isLogin, setIsLogin] = useState(() => {
        return JSON.parse(localStorage.getItem("isLogin")) || false;
    });

    useEffect(() => {
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
    }, [isLogin]);

    const handleLogout = () => {
        localStorage.setItem("isLogin", JSON.stringify(false));
        localStorage.setItem("currLogin", JSON.stringify({}));
        setIsLogin(false);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <ul className="nav-list">
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    {isLogin && <li><Link className="nav-link" to="/profile">Profile</Link></li>}
                </ul>
                <div className="auth-buttons">
                    {isLogin ? (
                        <button className="btn btn-dark" onClick={handleLogout}>Log Out</button>
                    ) : (
                        <>
                            <Link to="/register"><button className="btn btn-dark">Register</button></Link>
                            <Link to="/login"><button className="btn btn-dark">Log In</button></Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
