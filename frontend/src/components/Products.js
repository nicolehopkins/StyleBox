import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import '../styling/Products.css'
import Data from '../sources/DummyData'


export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: [],
            productName: [],  
            isLiked: [],
        }
    }

    // getProducts = () => {
    //     Data.
    // }



    render() {

    const { image, productName, isLiked } = this.state
    return ( <>
            <div className='product-container'><h3>Like Products to Add Them to Your Box!</h3></div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>{productName}</h2></CardTitle>
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