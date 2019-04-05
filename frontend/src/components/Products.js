import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import '../styling/Products.css'


const Products = (props) => {
    // this.state = {
    //     images: [],
    //     productName: '', 
    //     modelNumber: '', 
    //     description: '', 
    //     isLiked: false,
    // }


    return (
        <div className='container'>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>Product Name</h2></CardTitle>
                    <CardSubtitle><h3>Model Number</h3></CardSubtitle>
                    <CardText>Product description. yadda yadda yadda...</CardText>
                    <Button>I like  <FiHeart /></Button>
                </CardBody>
                </Card>
            </div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>Product Name</h2></CardTitle>
                    <CardSubtitle><h3>Model Number</h3></CardSubtitle>
                    <CardText>Product description. yadda yadda yadda...</CardText>
                    <Button>I like  <FiHeart /></Button>
                </CardBody>
                </Card>
            </div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>Product Name</h2></CardTitle>
                    <CardSubtitle><h3>Model Number</h3></CardSubtitle>
                    <CardText>Product description. yadda yadda yadda...</CardText>
                    <Button>I like  <FiHeart /></Button>
                </CardBody>
                </Card>
            </div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h2>Product Name</h2></CardTitle>
                    <CardSubtitle><h3>Model Number</h3></CardSubtitle>
                    <CardText>Product description. yadda yadda yadda...</CardText>
                    <Button>I like  <FiHeart /></Button>
                </CardBody>
                </Card>
            </div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>Product Name</h2></CardTitle>
                    <CardSubtitle><h3>Model Number</h3></CardSubtitle>
                    <CardText>Product description. yadda yadda yadda...</CardText>
                    <Button>I like  <FiHeart /></Button>
                </CardBody>
                </Card>
            </div>
            <div className='product-card'>
                <Card >
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle><h2>Product Name</h2></CardTitle>
                    <CardSubtitle><h3>Model Number</h3></CardSubtitle>
                    <CardText>Product description. yadda yadda yadda...</CardText>
                    <Button>I like  <FiHeart /></Button>
                </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Products;