import React from 'react'

const exercise1 = Math.ceil(Math.random() * 100) + ' + ' + Math.ceil(Math.random() * 100)
let ans1
class AddingUpToHundred extends React.Component {
    constructor(){
        super()
        this.state = {
            answer1: '',
            exercise1: eval(exercise1)
        }
        this.answer = this.answer.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    answer(e){
        ans1 = e.target.value
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({ answer1: +ans1})
      }


    render(){
        const checked = <img src="https://i.imgur.com/sR0wqoQ.png"/>
        const error = <img src="https://i.imgur.com/jpk3Rfr.png"/>
        return (
            <div className="container addingUpToTen">
                {exercise1} = <input type="text" onChange={this.answer}></input>
                {(this.state.answer1 === '') || (this.state.exercise1 === this.state.answer1 && checked) || error}
                <div>

                    <button onClick={this.handleSubmit}>Check answers</button>
                </div>
            </div>
        )
    }
}
export default AddingUpToHundred

