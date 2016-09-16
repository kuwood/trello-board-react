const React = require('react');
const ReactDOM = require('react-dom');

const Card = props => {
        return ( <div>{props.text}</div> );
}

const CardList = props => {
    let handleSubmit = function(event) {
      event.preventDefault()
    }
    let list = props.cards.map((card, index) => {
        return (<Card text={card} key={index}/>)
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

const ListContainer = React.createClass({
    getInitialState: function() {
        return {
            text: "",
            cards: []
        }
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

const Board = props => {
    return (<div>
                <h1>{props.title}</h1>
                <ListContainer title="List 1"/>
                <ListContainer title="List 2"/>
                <ListContainer title="List 3"/>
            </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Board title="Board 1"/>, document.getElementById('app'));
});
