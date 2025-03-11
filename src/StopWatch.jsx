import React from 'react';

class StopWatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            TimerIsRunning: false,
        };
    }

    startTimer() {
        if (!this.state.TimerIsRunning) {
            this.setState({ TimerIsRunning: true });

            this.timerID = setInterval(() => {
                this.setState({ time: this.state.time + 1 });
                console.log(this.state.time);
            }, 1000);
        }
    }

    stopTimer() {
        clearInterval(this.timerID);
        this.setState({ TimerIsRunning: false });
    }

    resetTimer = () => {
        this.stopTimer();
        this.setState({ time: 0 });
    };

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

        const startButton = { ...buttonStyle, backgroundColor: '#4CAF50', color: 'white' };
        const stopButton = { ...buttonStyle, backgroundColor: '#f44336', color: 'white' };
        const resetButton = { ...buttonStyle, backgroundColor: '#2196F3', color: 'white' };

        return (
            <div style={containerStyle}>
                <input type="button" value="Start" onClick={this.startTimer.bind(this)} style={startButton} />
                <input type="button" value="Stop" onClick={this.stopTimer.bind(this)} style={stopButton} />
                <input type="button" value="Reset" onClick={this.resetTimer.bind(this)} style={resetButton} /><br />
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Time: {this.state.time} sec</p>
            </div>
        );
    }
}

export default StopWatch;