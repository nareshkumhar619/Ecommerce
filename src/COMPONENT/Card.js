import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData';
import "./style.css";
import { useDispatch } from 'react-redux';
import {ADD} from "../COMPONENT/Redux/actions/action"

const Cards = () => {

  const[ data , setData] =useState(Cardsdata);

  const dispatch= useDispatch();

  const send = (elem) => {
     dispatch(ADD(elem))
  }
  

  return (
    <div className='container mt-3 '>
    <h2 className='text-center'>Add To Cart Project</h2>

    <div className='row d-flex justify-content-center align-items-center' >
{
    data.map((elem ,id) => {
      return(

        <Card style={{ width: '18rem', border:"none"  }} className = "mx-2 mt-4 card_style">
        <Card.Img variant="top" src={elem.imgdata} style={{height:"16rem"}} className="mt-3"/>
        <Card.Body>
          <Card.Title>{elem.rname}</Card.Title>
          <Card.Text>
            Price:₹ {elem.price}
          </Card.Text>
          <div className='button_div d-flex justiyfy-content-center'>
          <Button onClick={() => send(elem)} variant="primary" className='col-lg-12'>Add To Cart</Button>

          </div>
         
        </Card.Body>
      </Card>

      )
    })


}


    </div>
    
  </div>
  )
}

export default Cards
