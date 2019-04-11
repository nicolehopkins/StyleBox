import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../styling/MyAccount.css';
import { FaHeart, FaInfoCircle, FaHotjar, FaTag } from 'react-icons/fa';


const MyAccount = () => {

  return (<>
    <div className='heading'>
      <h2>My Account</h2>
    </div>
      <Row>
        <Col sm="6 middle-card">
          <a href='http://localhost:3000/#/products'>
            <Card className='card' body outline color="primary" >
              <CardTitle><h4>See what's new!   <FaHotjar /></h4></CardTitle>
              <CardText>Browse the hottest trends to add to your cart</CardText>
            </Card>
          </a>
        </Col>
        <Col sm="6">
          <a href='http://localhost:3000/#/cart'>
            <Card className='card' body outline color="primary" >
              <CardTitle><h4>Your faves   <FaHeart /></h4></CardTitle>
              <CardText>Everything you've liked</CardText>
            </Card>
          </a>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <a href='http://localhost:3000/#/submission'>
            <Card className='card' body outline color="primary" >
              <CardTitle><h4>Have a product to sell?   <FaTag /></h4></CardTitle>
              <CardText>Contact us to become a vendor and get showcase your creativity</CardText>
            </Card>
          </a>
        </Col>
        <Col sm="6">
          <a href='http://localhost:3000/#/updateform'>
            <Card className='card' body outline color="primary">
              <CardTitle><h4>Profile   <FaInfoCircle /></h4></CardTitle>
              <CardText>Manage email and other account information</CardText>
            </Card>
          </a>
        </Col>
      </Row>
  </>
  )
}

export default MyAccount;