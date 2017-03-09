import React from 'react';

class ListOfNumbers extends React.Component {
    render(props) {
        const numbers = this.props.numbers;
        const list = numbers.map(n => <li key={n.toString()}>{n}</li>);
        return (
            <ul>{list}</ul>
        );
    }
}

export default ListOfNumbers;
