import React from 'react'
import Quote from './Quote'
import Button from './Button'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            quotes: "",
            currentQuote: "Lift me up!",
            currentAuthor: "by Bruna Genz"
        }
        this.getQuotes = this.getQuotes.bind(this)
    }

    async getQuotes() {
        if (!this.state.quotes) {
            const rawResult = await fetch("https://quotes-api-bruna.herokuapp.com/quotes")
            const result = await rawResult.json()
            this.setState({
                quotes: result
            }) 
        }

        let index = Math.floor(Math.random() * this.state.quotes.length)
        
        this.setState({
            currentQuote: `"${this.state.quotes[index].quote}"`,
            currentAuthor: this.state.quotes[index].author
        })
    }

    render() {
        return (
            <div className="container">
                < Quote 
                    quote={ this.state.currentQuote } 
                    author={ this.state.currentAuthor } 
                />
                < Button onClick={this.getQuotes}/>
            </div>
        )
    }
}

export default Container