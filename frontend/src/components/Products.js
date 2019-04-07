import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button} from 'reactstrap';
import { FiHeart } from 'react-icons/fi';
import '../styling/Products.css'
import Data from '../sources/DummyData'


export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: ['https://ae01.alicdn.com/kf/HTB1DCulhyCYBuNkSnaVq6AMsVXaa/Stephen-Hawking-Formal-Quotes-Intelligence-Design-Funny-T-Shirt-for-Men-and-Women-Unisex-Graphic-Premium.jpg_640x640.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqBDUoB1H7K50Bm2nlFyIj4GB4WCbf54kzB97HuCs34bacX7g', 'https://cdn.cliqueinc.com/cache/posts/275492/spring-2019-trends-to-buy-now-275492-1545429888988-image.700x0c.jpg', 'https://i.pinimg.com/originals/15/20/70/152070eff331ebd628fed9751f739015.jpg'],
            productNames: ['intelligence tshirt', 'mens two-toned polo shirt', 'womens golden oversized blazer', 'womens tan pants'],  
            isLiked: false,
        }
    }



    render() {

    const { images, productNames, isLiked } = this.state
    return ( <>
            <div className='product-container'><h3>Like Products to Add Them to Your Box!</h3></div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src={images[0]} alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>{productNames[0]}</h2></CardTitle>
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