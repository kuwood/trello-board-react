const React = require('react');
const ListContainer = require('./list-container')

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

module.exports = Board
