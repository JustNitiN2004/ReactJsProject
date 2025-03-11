import React from 'react';

const NameCalling = ({ name = "John Doe" }) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px auto",
            width: "50%",
            textAlign: "center",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        }}>
            <h4>Using Props</h4>
            <p>Hi, this is <strong>{name}</strong></p>
        </div>
    );
};

export default NameCalling;
