import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button,
    InputGroup, Input, InputGroupAddon } from 'reactstrap';
import { FiHeart } from 'react-icons/fi';
import '../styling/Products.css'
import Axios from 'axios';


export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [
                {name: '', image: '', price: ''}
            ]
        }
    }

    componentDidMount() {
        let { productName, images} = this.state;
        Axios.get(`http://localhost:3001/products/`)
            .then(response => {
                console.log('response is: ',response)
                return response;
            })
            .then(data => {
                console.log('data is: ', data.data);
                let productData = data.data
                for (let i = 0; i < productData.length; i++) {
                    // productName = productData[i].name
                    productName.push(productData[i].name)
                    images.push(productData[i].image)
                    this.setState({ productName, images})
                    console.log('new state is: ', this.state)
                }
            })
    }

    handleClick = (e) => {
        const { isLiked } = this.state;
        if (isLiked === false) {
            this.setState({isLiked: true})
        } else {
            this.setState({ isLiked: false})
        }
    }


    render() {

    const { images, productName, isLiked} = this.state.products;
    return ( <>
        <InputGroup>
            <Input placeholder="and..." />
          <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
        </InputGroup>
        { 
                            <Card className='product-card'>
                            <CardImg top width="100%" src={images[0]} alt="Card image cap" />
                            <CardBody>
                            <CardTitle><h5>{productName}</h5></CardTitle>
                                <Button value={isLiked} onClick={this.handleClick}>I like  <FiHeart /></Button>
                            </CardBody>
                        </Card>

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