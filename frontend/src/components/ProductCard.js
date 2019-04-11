import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button,} from 'reactstrap';
import { FiHeart } from 'react-icons/fi';

const ProductCard = (props) => {

  return (
        <Card className='product-card'>
          <CardImg top width="100%" src={props.image} alt="Card image cap" key={props.i} />
          <CardBody>
            <CardTitle><h5>{props.name}</h5></CardTitle>
            <Button value={props.isLiked} onClick={props.handleClick}>I like  <FiHeart /></Button>
          </CardBody>
        </Card>
      )
}

export default ProductCard;