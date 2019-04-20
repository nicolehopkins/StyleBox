import React from 'react';
import { FiBox } from 'react-icons/fi';
import '../styling/Products.css';

const BoxButton = (props) => {
  console.log('props are: ', props.inCart) // testing button
  
  if (props.inCart[props.i] === false) return <button   onClick={props.handleCartClick}>Add to Box  <FiBox /></button>
  else return <button className='inCart-button'  onClick={props.handleCartClick}>Add to Box  <FiBox /></button>

}

export default BoxButton;