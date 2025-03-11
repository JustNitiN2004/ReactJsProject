import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ChangePass() {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState("");

    const navigate=useNavigate()

    const changePass = () => {
        if (!oldPass || !newPass || !confirmNewPass) {
            alert("Enter details first");
        } else {
            let tempUser = JSON.parse(localStorage.getItem("currLogin"));

            if (tempUser && tempUser.userPassword === oldPass) {
                if (newPass === confirmNewPass) {
                    tempUser.userPassword = newPass;
                    localStorage.setItem("currLogin", JSON.stringify(tempUser));

                    let tempUsers = JSON.parse(localStorage.getItem("users"));
                    tempUsers.forEach((val) => {
                        if (oldPass === val.userPassword) {
                            val.userPassword = newPass;
                            localStorage.setItem("users", JSON.stringify(tempUsers));
                        }
                    });

                    alert("Password changed successfully!");
                    navigate("/profile")
                    

                } else {
                    alert("Password mismatched");
                }
            } else {
                alert(`Wrong password for: ${tempUser.userName}`);
            }
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h1>Change Password</h1>

            <label>Old Password:</label>
            <input 
                type="password" 
                value={oldPass} 
                onChange={(e) => setOldPass(e.target.value)} 
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
                onClick={changePass}
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

export default ChangePass;
