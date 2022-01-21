import React from 'react';
import styled from 'styled-components';
import {Container, Row ,Col , Button } from 'react-bootstrap';

export default function Section(props) {
    const cardsetting = {
        width:'18rem',
        margin:'20px'
      };
const fixImgSize = {
  height : '200px',
  objectFit: 'cover'
};

     

  return (
    
    <div>   
        <div className="card " style={cardsetting}>
          <img className="card-img-top" height="130"  src={props.bgImg} alt="Card image cap"  style={fixImgSize}  />
          <div className="card-body">
            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardDescription}</p>
            <a href="#" className="btn btn-primary">{props.btnOne}</a> &nbsp;
            {props.btnTwo && 
            <a href="#" className="btn btn-primary">{props.btnTwo}</a>
             }
          </div>
        </div>       
    </div>
  )
}
