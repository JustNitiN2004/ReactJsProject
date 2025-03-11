import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate()


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
        alert("you are logged Out")
        navigate("/")
        window.location.reload();
    }



    return (

        <>
            <nav className="navbar">
                <div className="container">
                    <ul className="nav-list">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/products">All products</Link></li>

                    </ul>

                    <div className="auth-buttons">
                        {isLogin ?
                            (
                                <>
                                    <Link to="/cart"><button className="btn btn-dark">Cart</button></Link>
                                    <Link to="/myOrder"><button className="btn btn-dark">My order</button></Link>
                                    <Link to="/profile"><button className="btn btn-dark">Profile</button></Link>
                                    <button className="btn btn-dark" onClick={handleLogout}>Log out</button>
                                </>

                            )
                            :
                            (
                                <>
                                    <Link to="/register"><button className="btn btn-dark">Register</button></Link>
                                    <Link to="/login"><button className="btn btn-dark">Log In</button></Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </nav>









        </>
    )


}

export default Navbar
