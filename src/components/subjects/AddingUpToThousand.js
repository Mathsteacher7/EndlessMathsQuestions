import React from 'react'

const exercises = [exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9, exercise10]
function getExercise(){
  let firstNumber = 1, secondNumber = 1
  while (firstNumber < 100){
      firstNumber = Math.ceil(Math.random() * 999)
  }
  while (secondNumber < 100){
      secondNumber = Math.ceil(Math.random() * 999)
  }
  const exercise = firstNumber + ' + ' + secondNumber
  return exercise
}
function populateExercises(){
  for (let i = 0; i < 10; i++){
    exercises[i] = getExercise(i)
  }
}
let exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9, exercise10

let ans1 = 0, ans2 = 0, ans3 = 0, ans4 = 0, ans5 = 0, ans6 = 0, ans7 = 0, ans8 = 0, ans9 = 0, ans10 = 0
class AddingUpToThousand extends React.Component {
  constructor(){
    super()
    populateExercises()
    exercise1 = exercises[0], exercise2 = exercises[1], exercise3 = exercises[2], exercise4 = exercises[3], exercise5 = exercises[4], exercise6 = exercises[5], exercise7 = exercises[6], exercise8 = exercises[7], exercise9 = exercises[8], exercise10 = exercises[9]
    this.state = {
      exercise1: eval(exercise1), answer1: 0, ans1: '',
      exercise2: eval(exercise2), answer2: 0, ans2: '',
      exercise3: eval(exercise3), answer3: 0, ans3: '',
      exercise4: eval(exercise4), answer4: 0, ans4: '',
      exercise5: eval(exercise5), answer5: 0, ans5: '',
      exercise6: eval(exercise6), answer6: 0, ans6: '',
      exercise7: eval(exercise7), answer7: 0, ans7: '',
      exercise8: eval(exercise8), answer8: 0, ans8: '',
      exercise9: eval(exercise9), answer9: 0, ans9: '',
      exercise10: eval(exercise10), answer10: 0, ans10: ''      
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



  handleChange1(e) { this.setState({ ans1: e.target.value }) }
  handleChange2(e) { this.setState({ ans2: e.target.value }) }
  handleChange3(e) { this.setState({ ans3: e.target.value }) }
  handleChange4(e) { this.setState({ ans4: e.target.value }) }
  handleChange5(e) { this.setState({ ans5: e.target.value }) }
  handleChange6(e) { this.setState({ ans6: e.target.value }) }
  handleChange7(e) { this.setState({ ans7: e.target.value }) }
  handleChange8(e) { this.setState({ ans8: e.target.value }) }
  handleChange9(e) { this.setState({ ans9: e.target.value }) }
  handleChange10(e) { this.setState({ ans10: e.target.value }) }

  handleSubmit(e){
    this.setState({ 
      answer1: +this.state.ans1, 
      answer2: +this.state.ans2, 
      answer3: +this.state.ans3, 
      answer4: +this.state.ans4, 
      answer5: +this.state.ans5, 
      answer6: +this.state.ans6, 
      answer7: +this.state.ans7, 
      answer8: +this.state.ans8, 
      answer9: +this.state.ans9, 
      answer10: +this.state.ans10
    })
  }

  handleReset(){
    populateExercises()
    exercise1 = exercises[0], exercise2 = exercises[1], exercise3 = exercises[2], exercise4 = exercises[3], exercise5 = exercises[4], exercise6 = exercises[5], exercise7 = exercises[6], exercise8 = exercises[7], exercise9 = exercises[8], exercise10 = exercises[9]
    this.setState({
      exercise1: eval(exercise1), answer1: 0, ans1: '',
      exercise2: eval(exercise2), answer2: 0, ans2: '',
      exercise3: eval(exercise3), answer3: 0, ans3: '',
      exercise4: eval(exercise4), answer4: 0, ans4: '',
      exercise5: eval(exercise5), answer5: 0, ans5: '',
      exercise6: eval(exercise6), answer6: 0, ans6: '',
      exercise7: eval(exercise7), answer7: 0, ans7: '',
      exercise8: eval(exercise8), answer8: 0, ans8: '',
      exercise9: eval(exercise9), answer9: 0, ans9: '',
      exercise10: eval(exercise10), answer10: 0, ans10: ''
    })
  }




  render(){
    const checked = <img src="https://i.imgur.com/sR0wqoQ.png"/>
    const error = <img src="https://i.imgur.com/jpk3Rfr.png"/>
    return (
      <section className="section">
        <div className="container addingUpToTen">
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[0]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange1}
                value={this.state.ans1}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer1 === 0) || 
             (this.state.exercise1 === this.state.answer1 && checked) || 
              error
              }
            </div>
          </div>
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[1]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange2}
                value={this.state.ans2}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer2 === 0) || 
             (this.state.exercise2 === this.state.answer2 && checked) || 
              error
              }
            </div>
          </div>
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[2]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange3}
                value={this.state.ans3}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer3 === 0) || 
             (this.state.exercise3 === this.state.answer3 && checked) || 
              error
              }
            </div>
          </div>
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[3]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange4}
                value={this.state.ans4}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer4 === 0) || 
             (this.state.exercise4 === this.state.answer4 && checked) || 
              error
              }
            </div>
          </div>
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[4]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange5}
                value={this.state.ans5}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer5 === 0) || 
             (this.state.exercise5 === this.state.answer5 && checked) || 
              error
              }
            </div>
          </div>
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[5]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange6}
                value={this.state.ans6}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer6 === 0) || 
             (this.state.exercise6 === this.state.answer6 && checked) || 
              error
              }
            </div>
          </div>
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[6]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange7}
                value={this.state.ans7}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer7 === 0) || 
             (this.state.exercise7 === this.state.answer7 && checked) || 
              error
              }
            </div>
          </div>
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[7]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange8}
                value={this.state.ans8}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer8 === 0) || 
             (this.state.exercise8 === this.state.answer8 && checked) || 
              error
              }
            </div>
          </div>
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[8]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange9}
                value={this.state.ans9}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer9 === 0) || 
             (this.state.exercise9 === this.state.answer9 && checked) || 
              error
              }
            </div>
          </div>
          <div className="oneLine">
            <div className="longExercise">
              <div className="theExercise">
                {exercises[9]} 
              </div>
              <div>
                =
              </div>
              <div>
                <input 
                className="input" 
                type="answer" 
                name="answer1"
                onChange={this.handleChange10}
                value={this.state.ans10}
                />
              </div>
            </div>
            <div className="rightOrWrong">
              {(this.state.answer10 === 0) || 
             (this.state.exercise10 === this.state.answer10 && checked) || 
              error
              }
            </div>
          </div>


          <button className="button" onClick={this.handleSubmit}> Check Answers</button>
          <button className="button" onClick={this.handleReset}> I want more exercises!</button>

        </div>
      </section>
    )
  }
}

export default AddingUpToThousand
