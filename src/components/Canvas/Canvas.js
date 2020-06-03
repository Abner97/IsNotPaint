import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styles from './Canvas.module.css';


class Canvas extends Component {


  constructor(props) {

    super(props);
    this.state = {
      height: 15,
      width: 15,
      cellColor: '#000',
      mouseDown: false,
      menuVisible: true,
      canvas: {}

    };

    this.componentCleanup = this.componentCleanup.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.cleanWorkSpace = this.cleanWorkSpace.bind(this);
    this.fGetCellValues = this.fGetCellValues.bind(this);

  }


  componentCleanup() { // this will hold the cleanup code
    let tableContent = document.getElementById('pixel_canvas').innerHTML;
    let paintedCanvasContent=document.getElementById('pixel_canvas2').innerHTML;
    let pickedColor = this.props.color;
    localStorage.setItem('canvasState', tableContent);
    localStorage.setItem('canvas2State', paintedCanvasContent);
    localStorage.setItem('pickedColor', pickedColor);
  }

  cleanCells() {
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
    let source2 =localStorage.getItem('canvas2State');
    if (source != null) {
      try {
        document.getElementById('pixel_canvas').innerHTML = source;
        document.getElementById('pixel_canvas2').innerHTML = source2;
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
    document.getElementById('pixel_canvas2').innerHTML = source;

  }

  cleanWorkSpace() {
    localStorage.removeItem('canvasState');
    localStorage.removeItem('pickedColor');
    this.props.pickedColorChange('#ffffff');
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





  render() {

    return (



      <div className="Canvas">
        <div className="d-flex flex-row justify-content-around bd-highlight mb-3">
          <h2>Design Canvas</h2>
          <b  className="currentColor mt-2">Current Color:</b>
          <div class="box" style={{ background: this.props.color }}></div>
        </div>

      
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
        <div className="d-flex flex-sm-row flex-column justify-content-around bd-highlight mb-3">
          <button onClick={this.fGetCellValues} type="button" className="btn btn-primary ml-3 mt-1">Print it</button>
          <button onClick={this.cleanWorkSpace} type="button" className="btn btn-primary ml-3 mt-1">Clean Work</button>

        </div>
      </div>

    )

  }
}


export default Canvas;
