import React from 'react'

const exercise1 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)
const exercise2 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)
const exercise3 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)
const exercise4 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)
const exercise5 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)
const exercise6 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)
const exercise7 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)
const exercise8 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)
const exercise9 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)
const exercise10 = Math.ceil(Math.random(10) * 10) + ' + ' + Math.ceil(Math.random(10) * 10)

let ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10
class Adding extends React.Component {
  constructor(){
    super()
    this.state = {
      exercise1: eval(exercise1),
      exercise2: eval(exercise2),
      exercise3: eval(exercise3),
      exercise4: eval(exercise4),
      exercise5: eval(exercise5),
      exercise6: eval(exercise6),
      exercise7: eval(exercise7),
      exercise8: eval(exercise8),
      exercise9: eval(exercise9),
      exercise10: eval(exercise10)

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.handleChange4 = this.handleChange4.bind(this)
    this.handleChange5 = this.handleChange5.bind(this)
    this.handleChange6 = this.handleChange6.bind(this)
    this.handleChange7 = this.handleChange7.bind(this)
    this.handleChange8 = this.handleChange8.bind(this)
    this.handleChange9 = this.handleChange9.bind(this)
    this.handleChange10 = this.handleChange10.bind(this)
  }

  handleChange1(e) {
    console.log(e.target.value)
    ans1 = e.target.value

  }
  handleChange2(e) {
    console.log(e.target.value)
    ans2 = e.target.value

  }
  handleChange3(e) {
    console.log(e.target.value)
    ans3 = e.target.value

  }
  handleChange4(e) {
    console.log(e.target.value)
    ans4 = e.target.value

  }
  handleChange5(e) {
    console.log(e.target.value)
    ans5 = e.target.value

  }
  handleChange6(e) {
    console.log(e.target.value)
    ans6 = e.target.value

  }
  handleChange7(e) {
    console.log(e.target.value)
    ans7 = e.target.value

  }
  handleChange8(e) {
    console.log(e.target.value)
    ans8 = e.target.value

  }
  handleChange9(e) {
    console.log(e.target.value)
    ans9 = e.target.value

  }
  handleChange10(e) {
    console.log(e.target.value)
    ans10 = e.target.value

  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({ answer1: +ans1, answer2: +ans2, answer3: +ans3, answer4: +ans4, answer5: +ans5, answer6: +ans6, answer7: +ans7, answer8: +ans8, answer9: +ans9, answer10: +ans10})
  }




  render(){
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <div className="exercise">
            {exercise1} = <input className="input" type="answer" name="answer1" onChange={this.handleChange1} />  {this.state.exercise1 === this.state.answer1 &&<span id="answer1">circle</span>}
          </div>
          <div className="exercise">
            {exercise2} = <input className="input" type="answer" name="answer2" onChange={this.handleChange2} />  {this.state.exercise2 === this.state.answer2 &&<span id="answer2">circle</span>}
          </div>
          <div className="exercise">
            {exercise3} = <input className="input" type="answer" name="answer3" onChange={this.handleChange3} />  {this.state.exercise3 === this.state.answer3 &&<span id="answer3">circle</span>}
          </div>
          <div className="exercise">
            {exercise4} = <input className="input" type="answer" name="answer4" onChange={this.handleChange4} />  {this.state.exercise4 === this.state.answer4 &&<span id="answer4">circle</span>}
          </div>
          <div className="exercise">
            {exercise5} = <input className="input" type="answer" name="answer5" onChange={this.handleChange5} />  {this.state.exercise5 === this.state.answer5 &&<span id="answer5">circle</span>}
          </div>
          <div className="exercise">
            {exercise6} = <input className="input" type="answer" name="answer6" onChange={this.handleChange6} />  {this.state.exercise6 === this.state.answer6 &&<span id="answer6">circle</span>}
          </div>
          <div className="exercise">
            {exercise7} = <input className="input" type="answer" name="answer7" onChange={this.handleChange7} />  {this.state.exercise7 === this.state.answer7 &&<span id="answer7">circle</span>}
          </div>
          <div className="exercise">
            {exercise8} = <input className="input" type="answer" name="answer8" onChange={this.handleChange8} />  {this.state.exercise8 === this.state.answer8 &&<span id="answer8">circle</span>}
          </div>
          <div className="exercise">
            {exercise9} = <input className="input" type="answer" name="answer9" onChange={this.handleChange9} />  {this.state.exercise9 === this.state.answer9 &&<span id="answer9">circle</span>}
          </div>
          <div className="exercise">
            {exercise10} = <input className="input" type="answer" name="answer10" onChange={this.handleChange10} />  {this.state.exercise10 === this.state.answer10 &&<span id="answer10">circle</span>}
          </div>
          <form onSubmit={this.handleSubmit}><button className="button"> Submit Answers</button></form>

        </div>
      </section>
    )
  }
}

export default Adding
