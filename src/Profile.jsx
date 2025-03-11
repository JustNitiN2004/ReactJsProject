import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    let tempObj = JSON.parse(localStorage.getItem("currLogin"));
    const navigate = useNavigate();

    const changePass = () => {
        if (JSON.parse(localStorage.getItem("isLogin")) === true) {
            navigate('/changePass');
        } else {
            alert("Log in first");
        }
    };

    return (
        <div style={{
            maxWidth: "400px",
            margin: "50px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            background: "#f9f9f9"
        }}>
            <h1 style={{ color: "#333", marginBottom: "15px" }}>Profile</h1>

            <div style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                color: "black",
            }}>
                <p><strong>Name:</strong> {tempObj.userName}</p>
                <p><strong>Email:</strong> {tempObj.userEmail}</p>
                <p><strong>Age:</strong> {tempObj.userAge}</p>
            </div>

            <button 
                onClick={changePass}
                style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "16px",
                    background: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "15px",
                    transition: "0.3s"
                }}
                onMouseOver={(e) => e.target.style.background = "#0056b3"}
                onMouseOut={(e) => e.target.style.background = "#007BFF"}
            >
                Change Password
            </button>
        </div>
    );
}

export default Profile;
