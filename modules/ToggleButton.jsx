import React from 'react'

class ToggleButton extends React.Component {
    constructor() {
        super();
        this.state = {
            isOn: false
        };
        //this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <button className='btn btn-danger' onClick={(e) => this.handleClick(e)}>
                    {this.state.isOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
    handleClick() {
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }));
    }
}

export default ToggleButton;
