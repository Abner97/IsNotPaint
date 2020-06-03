import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';


import Canvas from '../Canvas/Canvas';
import PaintedCanvas from '../PaintedCanvas/PaintedCanvas';

const Home = (props) => {
 console.log(props);
  return (
    <div className={styles.Home}>
	    <Navbar 
	    	colors={props.colors}
	    	pickedColorChange={props.pickedColorChange}
	    	status={props.status}
			paletteChange={props.paletteChange}
			>
			
	    </Navbar>
	    
	    <div className="d-flex flex-sm-row flex-column justify-content-around bd-highlight mb-3">
	    	<div className={'m-5 p-2'} >
			<PaintedCanvas/>
	    	
	    	</div>
	    	<div className={'m-5 p-2'}>
			<Canvas color={props.pickedColor} pickedColorChange={props.pickedColorChange}/>
	    	</div>
	    </div> 
  	</div>
  );

}
 


Home.propTypes = {};

Home.defaultProps = {};

export default Home;
