import React, { Component } from 'react';
import { Row, Card, CardImg, CardBody, CardTitle, Button,} from 'reactstrap';
import '../styling/Products.css';
import ProductCard from '../components/ProductCard';
import Axios from 'axios';


export default class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      loadMoreCount: 1,
    }
  }

  componentDidMount() {
    let {products } = this.state
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
          obj.isLiked = false;
          // console.log('this is the new objectttt',obj)
          updatedState.products.push(obj)
        }
        this.setState( updatedState )
        console.log('new state is: ', this.state)
      })
  }

  handleLikeClick = (e) => {
    const { isLiked } = this.state.products;
    if (isLiked === false) {
      this.setState({ isLiked: true })
      // console.log('old isLiked: ', isLiked)
    } else {
      this.setState({ isLiked: false })
      // console.log('new isLiked: ', isLiked)
    }
  }

  handleCardClick = (e) => {

  }


  render() {
   let { products } = this.state;
    console.log(products)

    return (<Row>
              {
                products.map((e, i) => {
                  return <ProductCard image={e.image} name={e.name} isLiked={e.isLiked} handleLikeClick={this.handleLikeClick} />
                })
              }
            </Row>
            )
  }
}