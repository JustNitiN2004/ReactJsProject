import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            msg: ""
        };
    }

    ctrInc() {
        if (this.state.counter >= 10) {
            this.setState({ msg: "Limit reached!" });
        } else {
            this.setState({
                msg: "",
                counter: this.state.counter + 1
            });
        }
    }

    ctrDcr() {
        if (this.state.counter <= 0) {
            this.setState({ msg: "Cannot go below zero!" });
        } else {
            this.setState({
                msg: "",
                counter: this.state.counter - 1
            });
        }
    }

    render() {
        const counterContainer = {
            textAlign: 'center',
            margin: '20px',
             boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
            
           
        };

        const buttonStyle = {
            padding: '10px 15px',
            margin: '5px',
            fontSize: '18px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
        };

        const incButton = { ...buttonStyle, backgroundColor: '#4CAF50', color: 'white' };
        const decButton = { ...buttonStyle, backgroundColor: '#f44336', color: 'white' };

        const msgStyle = {
            color: '#d62976',
            fontWeight: 'bold'
        };

        return (
            <div style={counterContainer}>
                <button style={incButton} onClick={this.ctrInc.bind(this)}>+</button>
                <button style={decButton} onClick={this.ctrDcr.bind(this)}>-</button>
                <p>Count: {this.state.counter}</p>
                <p style={msgStyle}>{this.state.msg}</p>
				<hr />
            </div>
        );
    }
}

export default Counter;