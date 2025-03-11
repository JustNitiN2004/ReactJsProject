import React from 'react';

class CtrLocalStorage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: parseInt(localStorage.getItem("counter")) || 0
        };
    }

    valInc() {
        this.setState(prevState => {
            const newCounter = prevState.counter + 1;
            localStorage.setItem("counter", newCounter);
            return { counter: newCounter };
        });
    }

    valDnc() {
        this.setState(prevState => {
            const newCounter = prevState.counter - 1;
            localStorage.setItem("counter", newCounter);
            return { counter: newCounter };
        });
    }

    render() {
        const containerStyle = {
            textAlign: 'center',
            margin: '20px',
            padding: '15px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        };

        const buttonStyle = {
            padding: '10px 15px',
            margin: '5px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
        };

        const incButton = { ...buttonStyle, backgroundColor: '#4CAF50', color: 'white' };
        const decButton = { ...buttonStyle, backgroundColor: '#f44336', color: 'white' };

        return (
            <div style={containerStyle}>
                <h2>Counter with LocalStorage</h2>
                <input type="button" value="+" onClick={this.valInc.bind(this)} style={incButton} />
                <input type="button" value="-" onClick={this.valDnc.bind(this)} style={decButton} />
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Count: {this.state.counter}</p>
            </div>
        );
    }
}

export default CtrLocalStorage;