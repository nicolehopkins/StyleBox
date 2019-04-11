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
        { name: '', image: '', price: '', isLiked: false }
      ],
      loadMoreCount: 1,
    }
  }

  // loadMoreProducts() {
  //   const loadMore = 
  // }

  componentDidMount() {
    Axios.get(`http://localhost:3001/products/`)
      .then(response => {
        console.log('response is: ', response)
        return response;
      })
      .then(data => {
        console.log('data is: ', data.data);
        let productData = data.data;
        let productArr = [];
        for (let i = 0; i < productData.length; i++) {
          productArr.push(productData[i])
          console.log('products are: ', productArr)
          this.setState({ products: productArr })
          console.log('new state is: ', this.state)
        }
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
   let { products } = this.state;
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