/* jshint esversion: 6 */
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();

const Board = require('../board');
const ListContainer = require('../list-container');
const CardList = require('../card-list');
const Card = require('../card');

describe('Board component', () => {
    it('Renders the ListContainer', ()=> {
        const boardTitle = "Test Board";
        const renderer = TestUtils.createRenderer();
        renderer.render(<Board title={boardTitle} />);

        const result = renderer.getRenderOutput();
        result.props.children.length.should.equal(4)
        result.props.children[0].props.children.should.equal(boardTitle)

    });
});

describe('ListContainer component', () => {

    it('Handles the CardList state', ()=> {
        //requires a DOM to render into for testing click events (jsdom)
        //const renderer = TestUtils.createRenderer();

        //renderer.render(<ListContainer title={listContainerTitle} />)

        //const result = renderer.getRenderOutput();

    });
});

describe('CardList component', () => {
    it('Renders the CardList', ()=> {
        const cards = ["card 1","card 2","card 3"]
        const listTitle = "List 1"
        const renderer = TestUtils.createRenderer();
        renderer.render(<CardList cards={cards} title={listTitle} />);

        const result = renderer.getRenderOutput();
        //targets the second element 2 divs deep
        const cardsArray = result.props.children[0].props.children[1]
        cardsArray.length.should.equal(3)
        cardsArray.forEach((card, index) => {
            card.props.should.have.property("text")
            card.props.text.should.equal(cards[index])
        })

    });
});

describe('Card component', () => {
    it('Renders the Card', ()=> {
        const text = "Example"
        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />)

        const result = renderer.getRenderOutput();
        result.props.children.should.equal(text)
        result.props.children.should.be.a("string")
    });
});
