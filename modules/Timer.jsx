import React from 'react';
import ReactDom from 'react-dom';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            elapsed: 0
        };
    }
    tick () {
        //console.log('Elapsed ' + this.state.elapsed + ' ...');
        this.setState({
            elapsed: new Date() - this.props.date
        });
    }
    componentDidMount() {
        this.timer = setInterval(() => { this.tick() }, 50);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        const seconds = parseInt(this.state.elapsed / 1000);
        return <span className='btn btn-success'>Elapsed: {seconds} seconds</span>;
    }
}

export default Timer;
