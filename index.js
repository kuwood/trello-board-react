const React = require('react');
const ReactDOM = require('react-dom');

const Card = props => {
        return ( <div>{props.text}</div> );
}

const CardList = React.createClass({
    getInitialState: function() {
        return {
            submitted: false
        }
    },
    onAddInputChanged: function() {
        console.log("input changed!");
    },
    onAddSubmit: function(event) {
        event.preventDefault()
        console.log("submit!");
    },
    render: function() {
        return (<div>
                    <h3>{this.props.title}</h3>
                    <Card text={this.props.cards[0]}/>
                    <Card text={this.props.cards[1]}/>
                    <Card text={this.props.cards[2]}/>
                    <form>
                        <input onChange={this.onAddInputChanged}></input>
                        <button onClick={this.onAddSubmit}>Submit</button>
                    </form>
                </div>

        )
    }
})

const Board = props => {
    return (<div>
                <h1>{props.title}</h1>
                <CardList title={props.lists[0]} cards={["Card 1","Card 2","Card 3"]}/>
                <CardList title={props.lists[1]} cards={["Card 1","Card 2","Card 3"]}/>
                <CardList title={props.lists[2]} cards={["Card 1","Card 2","Card 3"]}/>
            </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Board title="Board 1" lists={["List 1", "List 2", "List 3"]}/>, document.getElementById('app'));
});
