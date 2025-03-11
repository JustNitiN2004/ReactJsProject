import React, { useState } from 'react';

function ForgotPass() {
    const [currEmail, setCurrEmail] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState("");

    const resetPass = () => {
        if (!currEmail || !newPass || !confirmNewPass) {
            alert("Enter details first");
        } else {
            let tempUser = JSON.parse(localStorage.getItem("currLogin"));

            if (tempUser && tempUser.userEmail === currEmail) {
                if (newPass === confirmNewPass) {
                    tempUser.userPassword = newPass;

                    localStorage.setItem("currLogin", JSON.stringify(tempUser));
                    alert("Password changed");

                    let tempUsers = JSON.parse(localStorage.getItem("users"));
                    tempUsers.forEach((val) => {
                        if (currEmail === val.userEmail) {
                            val.userPassword = newPass;
                            localStorage.setItem("users", JSON.stringify(tempUsers));
                        }
                    });
                } else {
                    alert("Password mismatched");
                }
            } else {
                alert("Email not found");
            }
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h1>Forgot Password</h1>

            <label>Email:</label>
            <input 
                type="text" 
                value={currEmail} 
                onChange={(e) => setCurrEmail(e.target.value)} 
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <label>New Password:</label>
            <input 
                type="password" 
                value={newPass} 
                onChange={(e) => setNewPass(e.target.value)} 
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />

            <label>Confirm New Password:</label>
            <input 
                type="password" 
                value={confirmNewPass} 
                onChange={(e) => setConfirmNewPass(e.target.value)} 
                style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
            />

            <button 
                onClick={resetPass}
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    background: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Submit
            </button>
        </div>
    );
}

export default ForgotPass;
