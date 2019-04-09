import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap';
import { FiHeart } from 'react-icons/fi';
import '../styling/Products.css'
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
        Axios.get(`http://localhost:3001/products/7`)
            .then(response => {
                console.log('response is: ',response.data)
                return response;
            })
            .then(data => {
                const { productName, images } = this.state
                productName.push(data.data.name)
                images.push(data.data.image)
                this.setState({ productName, images});
                console.log('new state is: ', this.state)
            })
    }



    render() {

    const { images, productName, isLiked } = this.state
    return ( <>
            <div className='product-container'><h2>Latest Trends</h2></div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src={images[0]} alt="Card image cap" />
                <CardBody>
                <CardTitle><h5>{productName}</h5></CardTitle>
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