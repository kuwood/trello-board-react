const React = require('react');
const ReactDOM = require('react-dom');

const Card = () => {
        return ( <div>This is a Card</div> );
}

const CardList = () => {
    return (<div>
                <Card />
                <Card />
                <Card />
            </div>
    )
}

const Board = () => {
    return (<div>
                <CardList />
                <CardList />
                <CardList />
            </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Board />, document.getElementById('app'));
});
