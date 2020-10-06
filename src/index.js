import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Table from './Table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello again, Mats!</h1>
        <Table/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))