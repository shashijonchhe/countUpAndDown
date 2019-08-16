
import React from 'react';
import './App.css'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      score:0
    }
  }
onHandleUp=()=>{
  let score=this.state.score
  console.log(score)

  this.setState({
    score:score+1
  })
  }
onHandleDown=()=>{
  let score=this.state.score
  
    this.setState({
      score:score-1
    })
}
  

render(){
  return(
    <div className="App">
      Score<h1>{this.state.score}</h1>
      <button onClick={this.onHandleUp.bind(this)}>HIGH</button>
      <button onClick={this.onHandleDown.bind(this)}>LOW</button>
    </div>
  )
}


}



export default App;