import React from 'react'


const Home = () => {
  return (
    <section className="section">
      <div className="container home">
        <h1 className="title" data-testid="homeTitle">Welcome to Endless Maths Questions</h1>
        <h2 className="subtitle">The place to skill up your maths and practice endlessly, until you are sure that you are on the top of the topic!</h2> 
        <p>The idea of Endless Maths is to give you the option to practice a specific skill you want. 
          <br/> For that purpose, I created this website that you could solve a lot of exercise in a particular topic. 
          <br/>As time will go by, I will add more and more topics, If you feel you want a specific topic, please write to me on my &nbsp; 
          <a href="https://www.linkedin.com/in/daniel-h-cohen/">LinkedIn</a>
        </p>
        <img src="https://i.imgur.com/u07MRsz.jpg"></img>
      </div>
    </section>

  )
}

export default Home
