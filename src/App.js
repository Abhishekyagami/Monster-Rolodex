import React, {Component} from 'react';
import {Cardlist} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      monsters:[],
      search:""
    }

  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  
  }

  handleFunc = e =>{ 
    this.setState({search:e.target.value}) 
  }

  render(){
   const {monsters,search} = this.state;
   const fillteredMon = monsters.filter((monster)=> monster.name.toLowerCase().includes(search.toLowerCase()))
  


    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox placeholder={"Enter Monster"} handleFunc={this.handleFunc}/>
        <Cardlist monsters={fillteredMon}/>
        
       
      </div>
    );
  }

}

export default App;
