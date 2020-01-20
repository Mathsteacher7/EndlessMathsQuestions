import React from 'react'

let exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9, exercise10
const exercises = [exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9, exercise10]

function getExerciseEasy(){
    const exercise = (Math.random() * 10).toFixed(2)
    return +exercise
}
function getExerciseMeduim(){
    const exercise = (Math.random() * 100).toFixed(2)
    return +exercise
}
function populateExercises(){
    for (let i = 0; i < 10; i += 3){
        exercises[i] = getExerciseEasy(i)
        exercises[i + 1] = getExerciseMeduim(i + 1)

    }
}
populateExercises()
class RoundingToSF extends React.Component {

    render(){
        
        return (
            <section className="section">
                <div className="container roundingToSF">
                    <div className="oneLine">
                        <div className="exercise">
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
                            // onChange={this.handleChange1}
                            // value={this.state.ans1}
                            />
                        </div>
                        </div>
                        <div className="rightOrWrong">
                            {/* {(this.state.answer1 === 0) || 
                            (this.state.exercise1 === this.state.answer1 && checked) || 
                            error
                            } */}
                        </div>
                    </div>
                    <button className="button" /*onClick={this.handleSubmit}*/> Check Answers</button>
                    <button className="button" /*onClick={this.handleReset}*/> I want more exercises!</button>
                </div>

            </section>

        )
    }
}

export default RoundingToSF

