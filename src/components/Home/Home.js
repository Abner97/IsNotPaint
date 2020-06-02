import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import CanvasDraw from 'react-canvas-draw';


import Canvas from '../Canvas/Canvas';

const Home = (props) => {
 
  return (
    <div className={styles.Home}>
	    <Navbar 
	    	colors={props.colors}
	    	pickedColorChange={props.pickedColorChange}
	    	status={props.status}>
	    </Navbar>
	    
	    <div className="container">
	    	<div className="section-picture">
	    		something
	    	</div>
	    	<div className="section-canvas">
	    		<Canvas color={props.pickedColor}/>
	    	</div>
	    </div> 
  	</div>
  );

}
 


Home.propTypes = {};

Home.defaultProps = {};

export default Home;
