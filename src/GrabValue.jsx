import React from 'react';

class GrabValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getSum() {
        const { num1, num2, num3 } = this.state;
        let c = parseInt(num1) + parseInt(num2) + parseInt(num3);
        this.setState({ sum: c });
    }

    setName(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        // Internal CSS styles
        const containerStyle = {
            textAlign: 'center',
            background: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            width: '350px',
            margin: 'auto',
            color:"black"
        };

        const inputStyle = {
            width: '80%',
            padding: '8px',
            margin: '5px 0',
            borderRadius: '5px',
            border: '1px solid #ccc',
        };

        const buttonStyle = {
            margin: '10px',
            padding: '10px 15px',
            fontSize: '16px',
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
                <h2>Sum Calculator & Player Names</h2>
                
                <input type="text" placeholder="Enter No. 1" onChange={(e) => this.setState({ num1: e.target.value })} style={inputStyle} /><br />
                <input type="text" placeholder="Enter No. 2" onChange={(e) => this.setState({ num2: e.target.value })} style={inputStyle} /><br />
                <input type="text" placeholder="Enter No. 3" onChange={(e) => this.setState({ num3: e.target.value })} style={inputStyle} /><br />
                
                <button onClick={this.getSum.bind(this)} style={buttonStyle} 
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} 
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Calculate Sum</button>

                <p style={outputStyle}>Sum: {this.state.sum}</p>
                <hr />

                <input type="text" name="txt1" placeholder="Enter Player 1" onChange={this.setName.bind(this)} style={inputStyle} /><br />
                <input type="text" name="txt2" placeholder="Enter Player 2" onChange={this.setName.bind(this)} style={inputStyle} /><br />

                <p style={outputStyle}>Players: {this.state.txt1} || {this.state.txt2}</p>
            </div>
        );
    }
}

export default GrabValue;
