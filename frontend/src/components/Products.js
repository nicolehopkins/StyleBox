import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button,} from 'reactstrap';
import '../styling/Products.css';
import ProductCard from '../components/ProductCard';
import Axios from 'axios';


export default class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [
        { name: 'unisex intelligence t-shirt', image: 'https://ae01.alicdn.com/kf/HTB1DCulhyCYBuNkSnaVq6AMsVXaa/Stephen-Hawking-Formal-Quotes-Intelligence-Design-Funny-T-Shirt-for-Men-and-Women-Unisex-Graphic-Premium.jpg_640x640.jpg', price: '$20.00', isLiked: false }
      ]
    }
  }

  componentDidMount() {
    let { products } = this.state;
    Axios.get(`http://localhost:3001/products/`)
      .then(response => {
        console.log('response is: ', response)
        return response;
      })
      .then(data => {
        console.log('data is: ', data.data);
        let productData = data.data
        for (let i = 0; i < products.length; i++) {
          // productName = productData[i].name
          products.push(productData)
        }
        this.setState({ products })
        console.log('new state is: ', this.state)
      })
  }

  handleClick = (e) => {
    const { isLiked } = this.state;
    if (isLiked === false) {
      this.setState({ isLiked: true })
    } else {
      this.setState({ isLiked: false })
    }
  }


  render() {
    const { products } = this.state;
    console.log(products)

    return (<>
      {/* <InputGroup>
        <Input placeholder="and..." />
        <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
      </InputGroup> */}
      {
        products.map((e, i) => {
          return <ProductCard image={e.image} name={e.name} isLiked={e.isLiked} handleClick={this.handleClick} />
        })
        


      }

      {/* <Card className='product-card'>
                    <CardImg top width="100%" src={images[0]} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h5>{productName}</h5></CardTitle>
                        <Button value={isLiked} onClick={this.handleClick}>I like  <FiHeart /></Button>{console.log(this.state.isLiked)}
                    </CardBody>
                </Card>
                <Card className='product-card'>
                    <CardImg top width="100%" src={images[0]} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h5>{productName}</h5></CardTitle>
                        <Button value={isLiked} onClick={this.handleClick}>I like  <FiHeart /></Button>
                    </CardBody>
                </Card>
                <Card className='product-card'>
                    <CardImg top width="100%" src={images[0]} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h5>{productName}</h5></CardTitle>
                        <Button value={isLiked} onClick={this.handleClick}>I like  <FiHeart /></Button>
                    </CardBody>
                </Card> */}

    </>
    )
  }

}