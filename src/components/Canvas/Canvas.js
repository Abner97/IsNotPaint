import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Canvas.module.css';


class Canvas extends Component {


  constructor(props) {

    super(props);
    this.state = {
      height: 15,
      width: 15,
      cellColor: '#000',
      mouseDown: false,
      menuVisible: true,
      canvas:{}

    };

    this.componentCleanup = this.componentCleanup.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.clenWorkSpace=this.clenWorkSpace.bind(this);
    this.fGetCellValues=this.fGetCellValues.bind(this);

  }


  componentCleanup() { // this will hold the cleanup code
    let tableContent= document.getElementById('pixel_canvas').innerHTML;
    localStorage.setItem('canvasState', tableContent);
  }

  cleanCells(){
    const canvas = document.querySelector("#pixel_canvas");
      canvas.innerHTML = '';
      this.setState({ background: '#fff' });

      for (let x = 0; x < this.state.height; x++) {
        let row = document.createElement("tr");
        canvas.appendChild(row);

        for (let y = 0; y < this.state.width; y++) {
          let cell = document.createElement("td");
          row.appendChild(cell);
        }
      }
  }

  componentDidMount() {
    
    window.addEventListener('beforeunload', this.componentCleanup);
    this.cleanCells();

      
    let source = localStorage.getItem('canvasState');
  
    if (source != null) {
      try {
        document.getElementById('pixel_canvas').innerHTML=source;
      } catch (e) {
        alert("Something get wrong");
      }
    } 
  }

 

  componentWillUnmount() {

    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);

  }


  fGetCellValues() {

     let source = document.getElementById('pixel_canvas').innerHTML;
     document.getElementById('pixel_canvas2').innerHTML=source;

  }

  clenWorkSpace(){
    localStorage.clear('canvasState');
    this.cleanCells();
    this.fGetCellValues();
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

    return (



      <div className="Canvas">

        <h2>Design Canvas</h2>
        <table className="table1 canvas_table"
          id="pixel_canvas"
          style={{ backgroundColor: this.state.background }}
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
        <button onClick={this.fGetCellValues} type="button" className="btn btn-primary">Print it</button>
        <button onClick={this.clenWorkSpace} type="button" className="btn btn-primary ml-3">Clean Work</button>
      </div>

    )

  }
}


export default Canvas;
