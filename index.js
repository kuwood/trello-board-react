const React = require('react');
const ReactDOM = require('react-dom');

class Card extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return ( <div>This is a Card</div> );
    }
}

class CardList extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
                    <Card />
                    <Card />
                    <Card />
                </div>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
                    <CardList />
                    <CardList />
                    <CardList />
                </div>
                )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Board />, document.getElementById('app'));
});
