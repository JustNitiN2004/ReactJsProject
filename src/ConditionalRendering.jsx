import React, { Component } from "react";

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,  
        };
    }

    toggleLogin = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    };

    render() {
        return (
            <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif",  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                
                <h3> Conditional Rendering</h3>

                 

                <button
                    onClick={this.toggleLogin}
                    style={{
                        padding: "10px 15px",
                        fontSize: "16px",
                        cursor: "pointer",
                        background: this.state.isLoggedIn ? "#DC3545" : "#28A745",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                    }}
                >
                    {this.state.isLoggedIn ? "Logout" : "Login"}
                </button>

                <p style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold" }}>
                    {this.state.isLoggedIn ? " Welcome!" : " Not Welcome"}
                </p>
                <hr />
            </div>
        );
    }
}

export default ConditionalRendering;
