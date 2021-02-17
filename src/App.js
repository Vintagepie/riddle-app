import React, { Component } from "react"
import "./App.css"
import axios from "axios"
import Table from "react-bootstrap/lib/Table"
import Image from "react-bootstrap/lib/Image"
import "font-awesome/css/font-awesome.css"

class App extends Component {
  state = {
    names: [],
    rank: [],
    current: true
  }

  //Get excel Data 


  changeTable(value) {
    if (this.state.current !== value) {
      this.setState({ current: value })
    }
  }

  render() {
    const { names, rank, current } = this.state
    return (
      <div className="appContainer">
        <div className="innerContainer">
        <div className="Leaderboard">
          <div>
            <h1>Leaderboard</h1>
          </div>
          <div>
            <Table striped bordered condensed hover className="color-black">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>

              <tbody>
              </tbody>

            </Table>
            </div>           
          </div>
        </div>
        <div className="innerContainer">
        <div className="quiz">
          <div>
            <h1>extra text here title</h1>
            <h2>text here</h2>
            <p>idk</p>
            
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App
