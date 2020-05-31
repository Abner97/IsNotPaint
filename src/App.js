import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


class App extends Component {
  state={
    colors:[],
    pickedColor: '#fff',
  }

  handleChangeComplete = (color) => {
    this.setState({ pickedColor: color.hex });
    console.log(this.state.pickedColor);
  };


  componentDidMount() {
    fetch('https://api.noopschallenge.com/hexbot?count=56')
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
      <Home colors={this.state.colors} pickedColorChange={this.handleChangeComplete} pickedColor={this.state.pickedColor}/>
     // <Navbar />
    );
  }
}

export default App;
