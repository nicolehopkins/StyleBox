import React from 'react';
import Cards from './ProductCards';
import { Container, Row, Col } from 'reactstrap';


const Products = (props) => {

    return (
       
        <Row>
          <Col><Cards /></Col>
          <Col><Cards /></Col>
          <Col><Cards /></Col>
          <Col><Cards /></Col>
        </Row>
     
    )
}
