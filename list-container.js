const React = require('react');
const CardList = require('./card-list')

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
                <CardList ref="button" cards={this.state.cards} onChange={this.onAddInputChanged} onClick={this.onAddSubmit} title={this.props.title}/>
            </div>
        )
    }
})

module.exports = ListContainer
