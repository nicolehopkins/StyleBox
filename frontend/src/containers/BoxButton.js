import React from 'react';
import { FiBox } from 'react-icons/fi';
import '../styling/Products.css';

const BoxButton = (props) => {
  console.log('props are: ', props.inCart)

  if (props.inCart === false) return <button key={props.i} value={props.isLiked} onClick={props.handleCartClick}>Add to Box  <FiBox /></button>
  else return <button className='inCart-button' key={props.i} value={props.isLiked} onClick={props.handleCartClick}>Add to Box  <FiBox /></button>

}

export default BoxButton;