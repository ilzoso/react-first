import React from 'react';
import ReactDom from 'react-dom';
import Clock from './Clock.jsx';

class ClockBoard extends React.Component {
    render() {
        return (
            <div>
                <Clock />
            </div>
        );
    }
}

export default ClockBoard;
