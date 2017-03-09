import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
            timer: null
        };
    }
    render() {
        return (
            <div className='label label-default'>
                <span>It is {this.state.date.toLocaleTimeString()} now</span>
            </div>
        );
    }
    componentDidMount() {
        var timerId = setInterval(()=> {
        this.setState({
                date: new Date()
        });
        }, 1000);
        this.setState({
                timer: timerId
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
        this.setState({
                timer: null
        });
    }
}

export default Clock;
