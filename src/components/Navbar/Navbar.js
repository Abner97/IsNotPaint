import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import {GithubPicker } from 'react-color';



const Navbar = (props) => (

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/#">IsNotPaint</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {props.status === 'loading' ? (<p className="status nav-item">Loading selector...</p>) : <p></p>}
        {props.status === 'rejected' ? (<p className="status nav-item">Issue with the color API</p>) : <p></p>}
        {props.status === 'resolved' ? (
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pick a Color
          </a>
            <div className={`dropdown-menu ${styles.dropdown_menu}`} aria-labelledby="navbarDropdown">
              <div class="dropdown-content">
                <GithubPicker className={`dropdown-item ${styles.dropdown_item}`} colors={props.colors} onChangeComplete={props.pickedColorChange} />
              </div>
              <div class="dropdown-content">
                <button onClick={props.paletteChange} type="button" className="btn btn-primary ml-3 mt-1">Change Colors</button>
              </div>
            </div>
          </li>
        ) : <p></p>}
      </ul>
    </div>
  </nav>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
