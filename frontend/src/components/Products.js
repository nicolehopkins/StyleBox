import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap';
import { FiHeart } from 'react-icons/fi';
import '../styling/Products.css'
import Data from '../sources/DummyData'
import Axios from 'axios';


export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: [],
            images: [],  
            isLiked: false,
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:3001/products/?offset=0&limit=5`)
            .then(response => {
                console.log('response is: ',response.data)
                return response;
            })
            // .then(productsArr => {
            //     let productName = [];
            //     let images = [];
            //     productsArr.forEach((e, i) => {
            //         productName
            //     });
            // })
    }



    render() {

    const { images, productNames, isLiked } = this.state
    return ( <>
            <div className='product-container'><h2>Latest Trends</h2></div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src={images[0]} alt="Card image cap" />
                <CardBody>
                <CardTitle><h2></h2></CardTitle>
                    <Button value={isLiked}>I like  <FiHeart /></Button>
                </CardBody>
                </Card>
            </div>
            {/* <div className='category'><h3>Bottoms</h3></div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>{productName}</h2></CardTitle>
                    <CardSubtitle><h3>{modelNumber}</h3></CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button>I like  <FiHeart /></Button>
                </CardBody>
                </Card>
            </div>
            <div className='category'><h3>Accessories</h3></div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>{productName}</h2></CardTitle>
                    <CardSubtitle><h3>{modelNumber}</h3></CardSubtitle>
                    <CardText>{description}</CardText>
                    <Button>I like  <FiHeart /></Button>
                </CardBody>
                </Card>
            </div> */}
            </>
    )
}

}