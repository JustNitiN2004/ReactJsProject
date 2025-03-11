import React from 'react';

class BasicSum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    updateData(e) {
        e.preventDefault();
        var a = e.target.txt1.value;
        var b = e.target.txt2.value;
        var c = parseInt(a) + parseInt(b);

        alert("Sum is " + c);
    }

    render() {
        const formStyle = {
            textAlign: 'center',
            margin: '20px',
            padding: '10px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        };

        const inputStyle = {
            padding: '8px',
            margin: '5px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
        };

        const buttonStyle = {
            padding: '10px 15px',
            marginTop: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white'
        };

        return (
            <div style={formStyle}>
                <form onSubmit={this.updateData.bind(this)}>
                    <label>No1:</label>
                    <input type="text" name="txt1" style={inputStyle} /><br />
                    <label>No2:</label>
                    <input type="text" name="txt2" style={inputStyle} /><br />
                    <input type="submit" value="+" style={buttonStyle} />
                </form>
            </div>
        );
    }
}

export default BasicSum;