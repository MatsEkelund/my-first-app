import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                name: 'Anna',
                job: 'Developer'
            },
            {
                name: 'Nisse',
                job: 'Architect'
            },
            {
                name: 'Mats',
                job: 'Student'
            },
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