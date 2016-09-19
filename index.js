const React = require('react');
const ReactDOM = require('react-dom');

//stateless component
const Card = props => {
    return (
        <div>{props.text}</div>
    );
}

//stateless component
const CardList = props => {
    let handleSubmit = function(event) {
        event.preventDefault()
    }
    //maps array of cards to Card Components
    let list = props.cards.map((cardText, index) => {
        return (<Card text={cardText} key={index}/>)
    })
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                {list}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={props.onChange}></input>
                    <button onClick={props.onClick}>Submit</button>
                </form>
            </div>
        </div>
    )
}
//houses state for the input text and cards.
const ListContainer = React.createClass({
    getInitialState: function() {
        return {text: "", cards: []}
    },
    onAddInputChanged: function(event) {
        this.setState({text: event.target.value})
    },
    onAddSubmit: function(event) {
        let cards = this.state.cards
        cards.push(this.state.text)
        this.setState({cards: cards})
    },
    render: function() {
        return (
            <div>
                <CardList cards={this.state.cards} onChange={this.onAddInputChanged} onClick={this.onAddSubmit} title={this.props.title}/>
            </div>
        )
    }
})

//stateless component
const Board = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ListContainer title="List 1"/>
            <ListContainer title="List 2"/>
            <ListContainer title="List 3"/>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Board title="Board 1"/>, document.getElementById('app'));
});
