import React from 'react'
import Section  from './Section'
import {Container, Row ,Col , Button } from 'react-bootstrap';
export default function Blog() {


  return (
    <div>
        <Container fluid>
          <Row>
            <Col md={3}>
                <Section
                  bgImg     = 'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg'
                  cardTitle = 'Card One'
                  cardDescription = 'Some quick example text to build on the card title and make up the bulk of the cards content'
                  btnOne = 'Show'
                  btnTwo = 'Hide' 
                />
            </Col>
            <Col md={3}>
                <Section
                  bgImg     = 'https://images.pexels.com/photos/3900437/pexels-photo-3900437.jpeg'
                  cardTitle = 'Card Two'
                  cardDescription = 'Some quick example text to build on the card title and make up the bulk of the cards content'
                  btnOne = 'Show'
                  btnTwo = 'Hide' 
                />
            </Col>
            <Col md={3}>
                <Section
                  bgImg     = 'https://images.pexels.com/photos/4458/cup-mug-desk-office.jpg'
                  cardTitle = 'Card Three'
                  cardDescription = 'Some quick example text to build on the card title and make up the bulk of the cards content'
                  btnOne = 'Show'
                  btnTwo = 'Hide' 
                />
            </Col>
            <Col md={3}>
                <Section
                  bgImg     = 'https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg'
                  cardTitle = 'Card Four'
                  cardDescription = 'Some quick example text to build on the card title and make up the bulk of the cards content'
                  btnOne = 'Show'
                
                />
            </Col>
          </Row>
        </Container>
    </div>
  )
}

