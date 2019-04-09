import React, { Component } from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../styling/MyAccount.css'
import { FaHeart, FaInfoCircle } from 'react-icons/fa'


const MyAccount = () => {

        return (<> 
                <div className='heading'>
                    <h2>My Account</h2>
                </div>
                <div classname='card-container'>
                    <Row>
                        <Col sm="6">
                            <a href='http://localhost:3000/#/cart'>
                                <Card className='card' body outline color="primary" >
                                    <CardTitle><h4>Your faves   <FaHeart /></h4></CardTitle>
                                    <CardText>Everything you've liked</CardText>
                                </Card>
                            </a> 
                        </Col>
                        <Col sm="6">
                            <a href='http://localhost:3000/#/customerinfo'>
                                <Card className='card' body outline color="primary">
                                    <CardTitle><h4>Profile   <FaInfoCircle /></h4></CardTitle>
                                    <CardText>Manage email and other account information</CardText>
                                </Card>
                            </a> 
                        </Col>
                    </Row>
                </div>
                </>
        )
}

export default MyAccount;