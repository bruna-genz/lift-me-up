import React from 'react'
import Phrase from './Phrase'
import Button from './Button'

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            phrases: "",
            index: 0
        }
        this.getPhrases = this.getPhrases.bind(this)
    }

    async getPhrases() {
        if (!this.state.phrases) {
            const result = await fetch("https://type.fit/api/quotes")
            this.setState({
                phrases: result.json()
            }) 
        }
        
        this.setState({
            index: Math.floor(Math.random() * this.state.phrases.length)
        })

        console.log("clicked")
        console.log(this.state.phrases)
        console.log(this.state.index)
    }

    render() {
        return (
            <div className="container">
                < Phrase />
                < Button onClick={this.getPhrases}/>
            </div>
        )
    }
}

export default Container