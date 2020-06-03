import React, { Component } from 'react';
import './App.css';
//import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


class App extends Component {
  //const [status, setStatus] = React.useState('idle');

  state={
    colors:[],
    pickedColor: '#fff',
    status:'idle',
  }

  setStatus(value) {
    this.setState({ status: value})
  }

  handleChangeComplete = (color) => {
    this.setState({ pickedColor: color.hex });
    console.log(this.state.pickedColor);
  };

  handlePaletteColorChange = () => {
    this.createPicker();

  };

  componentDidMount() {
  
    if(!window.localStorage.getItem('isTherePicker')){
      this.createPicker();
    }
    else if(window.localStorage.getItem('isTherePicker') === 'yes'){
      this.savedPicker();
    } 
  }
  
  createPicker(){
    this.setStatus('loading');
    fetch('https://api.noopschallenge.com/hexbot?count=56')
    .then(res => res.json())
    .then((data) => {
      let hexValues=[];
      data.colors.forEach(element => {
          hexValues.push(element.value);
      });
      this.setState({ colors: hexValues });
      this.setStatus('resolved');
      console.log(typeof(hexValues));
      window.localStorage.setItem('isTherePicker', 'yes');
      window.localStorage.setItem('lastColors',JSON.stringify(hexValues));
    })
    .catch(
      (errorData) =>{
          this.setStatus('rejected');
          console.log(errorData);
      })
  }

  savedPicker(){
      this.setStatus('loading');//descomentar cuando funcione la función

      let temp = JSON.parse((localStorage.getItem('lastColors').split(",")));
      let pickedColor=localStorage.getItem('pickedColor');
      
      this.setState({ colors :this.state.colors.push.apply(this.state.colors,temp)});
      this.setState({ colors :this.state.colors});
      this.setState({pickedColor:pickedColor});
      this.setStatus('resolved');
      
  }


  render(){
    return (
      <Home 
        colors={this.state.colors}
        pickedColorChange={this.handleChangeComplete} 
        pickedColor={this.state.pickedColor}
        status={this.state.status}
        paletteChange={this.handlePaletteColorChange}
      />
    );
  }
}

export default App;
