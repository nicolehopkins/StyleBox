import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const Cart = () => {
  return (
          <div className='product-card'>
                <Card >
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

                <CardTitle><h2>Product Name</h2></CardTitle>
                    <Button>Remove from box</Button>
                </Card>
            </div>
  );
};

export default Cart;