import React, { Component } from 'react';
import { Row, } from 'reactstrap';
import ProductCard from '../components/ProductCard';
import '../styling/Products.css';
import Axios from 'axios';


export default class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      loadMoreCount: 1 // Will need this if I do infinite scroll
    }
  }

  componentDidMount() {
    Axios.get(`http://localhost:3001/products/`)
      .then(response => {
        return response;
      })
      .then(data => {
        // console.log('data is: ', data.data);
        let productData = data.data;
        const updatedState = {...this.state};
        
        for (let i = 0; i < productData.length; i++) {
          let { name, image, price } = productData[i];
          let obj = {};

          obj.name = name;
          obj.image = image;
          obj.price = price;
          obj.inCart = false;
          // console.log('this is the new objectttt',obj)
          updatedState.products.push(obj)
        }
        this.setState( updatedState )
        console.log('new state is: ', this.state)
      })
  }

  handleLikeClick = (e) => {
    const { inCart } = this.state.products;
    if (inCart === false) {
      this.setState({ inCart: true })
      // console.log('old inCart: ', inCart)
    } else {
      this.setState({ inCart: false })
      // console.log('new inCart: ', inCart)
    }
  }

  handleCardClick = (e) => {

  }


  render() {
   let { products } = this.state;
    console.log(products)

    return (
            <Row className='row'>
              {
                products.map((e, i) => {
                  return <ProductCard image={e.image} name={e.name} inCart={e.inCart} handleLikeClick={this.handleLikeClick} key={i} />
                })
              }
            </Row>
            )
  }
}