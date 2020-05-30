import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  state={
    colors:[],
    pickedColor: '#fff',
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  componentDidMount() {
    fetch('https://api.noopschallenge.com/hexbot?count=14')
    .then(res => res.json())
    .then((data) => {
      let hexValues=[];
        data.colors.forEach(element => {
          hexValues.push(element.value);
      });
      this.setState({ colors: hexValues })
      console.log(this.state);
    })
    .catch(console.log)

  }

  render(){
    return (
      <Navbar colors={this.state.colors}/>
    );
  }
}

export default App;
