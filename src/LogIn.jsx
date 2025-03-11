import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
function LogIn() {
    const [currEmail, UpdateCurrEmail] = useState("");
    const [currPass, UpdateCurrPass] = useState("");
    const navigate = useNavigate();

    const userLogin = () => {
        if (!currEmail || !currPass) {
            alert("Enter details first");
            return;
        }

        let tempUsers = JSON.parse(localStorage.getItem("users"));
        if (!tempUsers) {
            
           
            alert("No user found")
            return;
        }

        let foundUser = tempUsers.find(user => user.userEmail === currEmail);

        if (!foundUser) {
            alert("User not found!");
            return;
        }

        if (foundUser.userPassword === currPass) {
            console.log("Password is correct");
            localStorage.setItem("currLogin", JSON.stringify(foundUser));
            localStorage.setItem("isLogin", JSON.stringify(true));
            alert("You are logged in now.");

            navigate('/');
            window.location.reload();  
        } else {
            alert("Password is wrong");
        }
    };

    const forgotPass = () => {
        navigate('/forgotPass');
    };

  

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h1>Log In</h1>
            <label>Email:</label>
            <input 
                type="text" 
                value={currEmail} 
                onChange={(e) => UpdateCurrEmail(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }} 
            />

            <label>Password:</label>
            <input 
                type="password" 
                value={currPass} 
                onChange={(e) => UpdateCurrPass(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "20px" }}  
            />

            <button 
                onClick={userLogin}
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    background: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px"
                }}
            >
                Submit
            </button>

            <button 
                onClick={forgotPass}
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    background: "#FF5733",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px"
                }}
            >
                Forgot Password
            </button>

            
        </div>
    );
}

export default LogIn;
