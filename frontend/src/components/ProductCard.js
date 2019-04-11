import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button,} from 'reactstrap';
import { FiBox } from 'react-icons/fi';
import '../styling/Products.css';

const ProductCard = (props) => {

  return (
        <Card className='product-card'>
          <CardImg top width="100%" src={props.image} alt="Card image cap" key={props.i} />
          <CardBody>
            <CardTitle key={props.i}><h5>{props.name}</h5></CardTitle>
            <Button key={props.i} value={props.isLiked} onClick={props.handleLikeClick}>Add to Box  <FiBox /></Button>
          </CardBody>
        </Card>
      )
}

export default ProductCard;