import React, { Component } from 'react';
import { Row, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import BoxButton from '../containers/BoxButton'
import '../styling/Products.css';
import Axios from 'axios';


export default class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      loadMoreCount: 1 // Will need this if I do loadMore button or infinite scroll
    }
  }

  componentDidMount() {
    Axios.get(`http://localhost:3001/products/`)
      .then(response => {
        return response;
      })
      .then(data => {
        let productData = data.data; // this return an array of objects
        const updatedState = { ...this.state }; // making a copy of the state

        for (let i = 0; i < productData.length; i++) {
          // pulling the keys out of the data
          let { name, image, price } = productData[i];
          // creating an empty object to hold what will be the state
          let obj = {};

          //creating the object keys and setting the values of the state
          obj.name = name;
          obj.image = image;
          obj.price = price;
          obj.inCart = false;
          updatedState.products.push(obj) // pushing those kays/values into the copied state
        }
        this.setState(updatedState) // setting the state to the copied state
        console.log('new state is: ', this.state) // testing
      })
  }

  // this func will toggle the products in and out of the cart
  handleCartClick = (e) => {
    // let { inCart } = this.state.products;
    let click = e.target;
    if (click === false) {
      this.setState({ inCart: true })
      // console.log('old inCart: ', inCart)
    } else {
      this.setState({ inCart: false })
      // console.log('new inCart: ', inCart)
    }
  }

  // this func will show the individual product once a card is clicked
  handleCardClick = (e) => {

  }


  render() {
    let { products } = this.state;

    return (
      <Row className='row'>
        {
          products.map((e, i) => {
            return (
              <Card key={i} className='product-card'>
              <CardImg top width="100%" src={e.image} alt="Card image cap"  />
              <CardBody>
                <CardTitle ><h5>{e.name}</h5></CardTitle>
                <BoxButton inCart={e.inCart} handleCartClick={this.handleCartClick} />
              </CardBody>
            </Card>
            )
          })
        }
      </Row>
    )
  }
}