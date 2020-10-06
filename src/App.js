import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Anna',
                job: 'developer'
            },
            {
                name: 'Nisse',
                job: 'Architect'
            }
        ];
      return (
        <div className="App">
          <h1>Hello again, Mats!</h1>
          <Table characterData={characters}/>
        </div>
      )
    }
  }
  
  export default App;