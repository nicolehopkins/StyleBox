import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import '../styling/Products.css'


export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: ['https://ae01.alicdn.com/kf/HTB1DCulhyCYBuNkSnaVq6AMsVXaa/Stephen-Hawking-Formal-Quotes-Intelligence-Design-Funny-T-Shirt-for-Men-and-Women-Unisex-Graphic-Premium.jpg_640x640.jpg'],
            productName: ['intelligence tshirt'], 
            modelNumber: ['1TZ34'], 
            description: ['white crew neck tshirt'], 
            isLiked: false,
        }
    }

    render() {

    const { image, productName, modelNumber, description, isLiked } = this.state
    return ( <>
            <div className='category'><h3>Tops</h3></div>
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
            <div className='category'><h3>Bottoms</h3></div>
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
            </div>
            </>
    )
}

}