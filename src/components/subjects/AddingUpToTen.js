import React from 'react'

let exercise1 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)
let exercise2 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)
let exercise3 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)
let exercise4 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)
let exercise5 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)
let exercise6 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)
let exercise7 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)
let exercise8 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)
let exercise9 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)
let exercise10 = Math.ceil(Math.random() * 10) + ' + ' + Math.ceil(Math.random() * 10)

let ans1 = 0, ans2 = 0, ans3 = 0, ans4 = 0, ans5 = 0, ans6 = 0, ans7 = 0, ans8 = 0, ans9 = 0, ans10 = 0
class AddingUpToTen extends React.Component {
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
      exercise10: eval(exercise10),
      answer1: 0,
      answer2: 0,
      answer3: 0,
      answer4: 0,
      answer5: 0,
      answer6: 0,
      answer7: 0,
      answer8: 0,
      answer9: 0,
      answer10: 0
      
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
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
    ans1 = e.target.value
  }
  handleChange2(e) {
    ans2 = e.target.value
  }
  handleChange3(e) {
    ans3 = e.target.value
  }
  handleChange4(e) {
    ans4 = e.target.value
  }
  handleChange5(e) {
    ans5 = e.target.value
  }
  handleChange6(e) {
    ans6 = e.target.value
  }
  handleChange7(e) {
    ans7 = e.target.value
  }
  handleChange8(e) {
    ans8 = e.target.value
  }
  handleChange9(e) {
    ans9 = e.target.value
  }
  handleChange10(e) {
    ans10 = e.target.value
  }

  handleSubmit(e){
    this.setState({ answer1: +ans1, answer2: +ans2, answer3: +ans3, answer4: +ans4, answer5: +ans5, answer6: +ans6, answer7: +ans7, answer8: +ans8, answer9: +ans9, answer10: +ans10})
  }

  handleReset(e){
    console.log(e)
  }




  render(){
    const checked = <img src="https://i.imgur.com/sR0wqoQ.png"/>
    const error = <img src="https://i.imgur.com/jpk3Rfr.png"/>
    return (
      <section className="section">
        <div className="container addingUpToTen">
          <div className="exercise">
            {exercise1} = <input 
            className="input" 
            type="answer" 
            name="answer1" 
            onChange={this.handleChange1} 
            />
            {(this.state.answer1 === 0) || 
             (this.state.exercise1 === this.state.answer1 && checked) || 
              error
            }
          </div>
          <div className="exercise">
            {exercise2} = <input 
            className="input" 
            type="answer" 
            name="answer2" 
            onChange={this.handleChange2} 
            />  
            {(this.state.answer2 === 0) || 
             (this.state.exercise2 === this.state.answer2 && checked) || 
              error
            }
          </div>
          <div className="exercise">
            {exercise3} = <input 
            className="input" 
            type="answer" 
            name="answer3" 
            onChange={this.handleChange3} 
            />  
            {(this.state.answer3 === 0) || 
             (this.state.exercise3 === this.state.answer3 && checked) || 
              error
            }          
          </div>
          <div className="exercise">
            {exercise4} = <input 
            className="input" 
            type="answer" 
            name="answer4" 
            onChange={this.handleChange4} 
            />  
            {(this.state.answer4 === 0) || 
             (this.state.exercise4 === this.state.answer4 && checked) || 
              error
            }   
          </div>
          <div className="exercise">
            {exercise5} = <input 
            className="input" 
            type="answer" 
            name="answer5" 
            onChange={this.handleChange5} 
            />  
            {(this.state.answer5 === 0) || 
             (this.state.exercise5 === this.state.answer5 && checked) || 
              error
            }             
          </div>
          <div className="exercise">
            {exercise6} = <input 
            className="input" 
            type="answer" 
            name="answer6" 
            onChange={this.handleChange6} 
            />  
            {(this.state.answer6 === 0) || 
             (this.state.exercise6 === this.state.answer6 && checked) || 
              error
            }            
          </div>
          <div className="exercise">
            {exercise7} = <input 
            className="input" 
            type="answer" 
            name="answer7" 
            onChange={this.handleChange7} 
            />  
            {(this.state.answer7 === 0) || 
             (this.state.exercise7 === this.state.answer7 && checked) || 
              error
            }           
          </div>
          <div className="exercise">
            {exercise8} = <input 
            className="input" 
            type="answer" 
            name="answer8" 
            onChange={this.handleChange8} 
            />  
            {(this.state.answer8 === 0) || 
             (this.state.exercise8 === this.state.answer8 && checked) || 
              error
            }                
          </div>
          <div className="exercise">
            {exercise9} = <input 
            className="input" 
            type="answer" 
            name="answer9" 
            onChange={this.handleChange9} 
            />  
            {(this.state.answer9 === 0) || 
             (this.state.exercise9 === this.state.answer9 && checked) || 
              error
            }              
          </div>
          <div className="exercise">
            {exercise10} = <input 
            className="input" 
            type="answer" 
            name="answer10" 
            onChange={this.handleChange10} 
            />  
            {(this.state.answer10 === 0) || 
             (this.state.exercise10 === this.state.answer10 && checked) || 
              error
            }            
          </div>
          <button className="button" onClick={this.handleSubmit}> Check Answers</button>
          <button className="button" onClick={this.handleReset}> I want more exercises!</button>

        </div>
      </section>
    )
  }
}

export default AddingUpToTen
