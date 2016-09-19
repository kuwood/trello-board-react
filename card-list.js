const React = require('react')
const Card = require('./card')

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

module.exports = CardList
