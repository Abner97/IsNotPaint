import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Canvas.module.css';
import Sketch from "react-p5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CirclePicker} from 'react-color';

class Canvas extends Component {
  
  
  constructor(props){
    
    super(props);
    this.state = {
      height: 15,
      width: 15,
      cellColor: '#000',
      mouseDown: false,
      menuVisible: true
      
    };

   
  }

  componentDidMount() {
    const canvas = document.querySelector("#pixel_canvas");
    canvas.innerHTML = '';
    this.setState({ background: '#fff'});

    for (let x = 0; x < this.state.height; x++) {
      let row = document.createElement("tr");
      canvas.appendChild(row);

      for (let y = 0; y < this.state.width; y++) {
        let cell = document.createElement("td");
        row.appendChild(cell);
      }
    }
  }


  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  

  // Cell color
  handleCellColor = (color) => {
    this.setState({ cellColor: this.props.color });
  }

  handleCellColorOnClick = (event) => {
    event.target.style.backgroundColor = this.props.color;
    this.setState({ mouseDown: true });
  }

  handleMouseState = () => {
    this.setState({ mouseDown: false });
  }

  // Table background color

  // Remove color
  handleColorRemove = (event) => {
    event.target.style.backgroundColor = '';
  }

  mobileMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  }

  
  render() {
    
    return(
      
                

          <div className="Canvas">
            <h2>Design Canvas</h2>
            <table
              id="pixel_canvas"
              style={{backgroundColor: this.state.background}}
              onMouseDown={this.handleCellColorOnClick}
              onMouseMove={this.state.mouseDown ? this.handleCellColorOnClick : null}
              onMouseUp={this.handleMouseState}
              onMouseLeave={this.handleMouseState}
              onTouchStart={this.handleCellColorOnClick}
              onTouchMove={this.state.mouseDown ? this.handleCellColorOnClick : null}
              onTouchEnd={this.handleMouseState}
              onDoubleClick={this.handleColorRemove}>
            </table>
            <br></br>
            <button type="button" class="btn btn-primary">Print it</button>
          </div>
        
    )

  }
}


export default Canvas;
