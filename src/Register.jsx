import React, { useState } from 'react';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem("users");
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    const submitRegister = () => {
        if (!name || !email || !age || !password || !confirmPassword) { 
            alert("Enter Details first");
        } else {
            if (password === confirmPassword) {
                let tempObj = {
                    userName: name,
                    userEmail: email,
                    userAge: age,
                    userPassword: password,
                    userConfirmPassword: confirmPassword,
                };

                const updatedUsers = [...users, tempObj];
                setUsers(updatedUsers);
                localStorage.setItem("users", JSON.stringify(updatedUsers));

                setName("");
                setEmail("");
                setAge("");
                setPassword("");
                setConfirmPassword("");
                alert("User registered");
            } else {
                alert("Password Mismatched");
            }
        }
    };

    return (
        <div style={{ maxWidth: "400px", top: "-95px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h1>Register</h1>

            <label>Name:</label>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }} 
            />

            <label>Email:</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}  
            />

            <label>Age:</label>
            <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}  
            />

            <label>Password:</label>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "10px" }}  
            />

            <label>Confirm Password:</label>
            <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: "100%", padding: "8px", marginBottom: "20px" }}  
            />

            <input 
                type="submit" 
                value="Submit" 
                onClick={submitRegister}
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    background: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            />
        </div>
    );
}

export default Register;
