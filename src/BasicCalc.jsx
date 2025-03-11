import React from 'react';

export class BasicCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    setData(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    getAns(e) {
        let symbol = e.target.value;
        let a = parseInt(this.state.val1);
        let b = parseInt(this.state.val2);

        if (symbol === '+') {
            this.setState({ ans: a + b });
        } else if (symbol === '-') {
            this.setState({ ans: a - b });
        } else if (symbol === '*') {
            this.setState({ ans: a * b });
        } else if (symbol === '/') {
            this.setState({ ans: a / b });
        }
    }

    render() {
        // Internal CSS styles
        const containerStyle = {
            textAlign: 'center',
            background: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            width: '300px',
            margin: 'auto',
        };

        const titleStyle = {
            color: '#333',
            fontWeight: 'bold',
        };

        const inputStyle = {
            width: '90%',
            padding: '8px',
            margin: '5px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
        };

        const buttonStyle = {
            margin: '5px',
            padding: '10px',
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '5px',
            transition: '0.3s',
        };

        const buttonHoverStyle = {
            backgroundColor: '#0056b3',
        };

        const outputStyle = {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
            marginTop: '10px',
        };

        return (
            <div style={containerStyle}>
                <h2 style={titleStyle}>Basic Calculator</h2>
                <div>
                    <input type="number" name="val1" placeholder="Enter No. 1" onChange={this.setData.bind(this)} style={inputStyle} />
                    <input type="number" name="val2" placeholder="Enter No. 2" onChange={this.setData.bind(this)} style={inputStyle} />
                </div>
                <div>
                    <button onClick={this.getAns.bind(this)} value="+" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>+</button>
                    <button onClick={this.getAns.bind(this)} value="-" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>-</button>
                    <button onClick={this.getAns.bind(this)} value="*" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>×</button>
                    <button onClick={this.getAns.bind(this)} value="/" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>÷</button>
                </div>
                <p style={outputStyle}>Output: <span>{this.state.ans}</span></p>
            </div>
        );
    }
}

export default BasicCalc;
