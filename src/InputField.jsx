import React from 'react';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getData(event) {
        // Update state with input value
        this.setState({ inputValue: event.target.value });
        console.log(event.target.value);
    }

    render() {
        const inputStyle = {
            padding: '10px',
            width: '80%',
            border: '2px solid #d62976',
            borderRadius: '8px',
            outline: 'none',
            fontSize: '16px'
        };

        const containerStyle = {
            textAlign: 'center',
            margin: '20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        };

        const valueStyle = {
            marginTop: '10px',
            fontWeight: 'bold',
            color: '#962fbf'
        };

        return (
            <div style={containerStyle}>
                <input 
                    type="text" 
                    style={inputStyle} 
                    placeholder="Type something..." 
                    onChange={this.getData.bind(this)} 
                />
                <p style={valueStyle}>Input Value: {this.state.inputValue}</p>
                <hr />
            </div>
        );
    }
}

export default InputField;
