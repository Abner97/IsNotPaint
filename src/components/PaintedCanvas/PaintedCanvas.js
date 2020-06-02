// import React from 'react';
// import PropTypes from 'prop-types';
import styles from './PaintedCanvas.module.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';




class PaintedCanvas extends Component {
  
  
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
    const canvas = document.querySelector("#pixel_canvas2");
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
  
  

  render() {
    
    return(
      <div className="Canvas2">
            <h2>Printed Canvas</h2>
            <table className="table2 paint_table" 
              id="pixel_canvas2"
              style={{backgroundColor: this.state.background}}>
            </table>
            <br></br>
           
          </div>
        
    )

  }
}


export default PaintedCanvas;
