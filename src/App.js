import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


class App extends Component {
  //const [status, setStatus] = React.useState('idle');

  state={
    colors:[],
    pickedColor: '#fff',
    status:'idle'
  }

  setStatus(value) {
    this.setState({ status: value})
  }

  handleChangeComplete = (color) => {
    this.setState({ pickedColor: color.hex });
    console.log(this.state.pickedColor);
  };

  componentDidMount() {
    fetch('https://api.noopschallenge.com/hexbot?count=56')
    .then(this.setStatus('loading'))
    .then(res => res.json())
    .then((data) => {
      let hexValues=[];
      data.colors.forEach(element => {
          hexValues.push(element.value);
      });
      this.setState({ colors: hexValues })
      console.log(this.state);
      this.setStatus('resolved');
    })
    .catch(
      (errorData) =>{
          this.setStatus('rejected');
      })

  }

  render(){
    return (
      <Home 
        colors={this.state.colors}
        pickedColorChange={this.handleChangeComplete} 
        pickedColor={this.state.pickedColor}
        status={this.state.status}
      />
    );
  }
}

export default App;
