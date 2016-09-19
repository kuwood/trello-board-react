const React = require('react');
const ReactDOM = require('react-dom');
const Board = require('./board')

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Board title="Board 1"/>, document.getElementById('app'));
});
