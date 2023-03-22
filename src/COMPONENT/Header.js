import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fontSize, height } from '@mui/system';
import { DLT ,REMOVE} from './Redux/actions/action';


const Header = () => {
const [price ,setPrice] = useState(0);
  const dispatch =useDispatch();
  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id))
  }
  const remove = (item) => {
    dispatch(REMOVE(item))
   }

  const total = () => {
    let price = 0;
    getdata.map((elem,k)=>{
      price=elem.price*elem.qnty+price
    })
    setPrice(price);
  }
  useEffect(()=>{
   total()
  },[total])
  return (
    <>
    <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to="/" className="text-light text-decoration-none mx-3" >Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-light text-decoration-none">Home</NavLink>

          </Nav>

          <Badge badgeContent={getdata.length} color="primary"
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
          >
          <i className="fa-sharp fa-solid fa-cart-plus text-light" style={{fontSize:25,cursor:"pointer"}}></i>
         </Badge>

          
        </Container>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
  {
      getdata.length ?
       <div className='card_details' style={{width:"24rem" , padding:10}}>
        <Table>
          <thead>
            <tr>
              <th>photo</th>
              <th>Restaurant Name</th>
            </tr>
          </thead>
          <tbody>
             {
              getdata.map((e) => {
                console.log(e.id)
                return(
                  <>
                  <tr>
                    <td>
                    <NavLink to={`/cart/${e.id}`} onClick={handleClose} className="text-light text-decoration-none">
                      <img src={e.imgdata} style={{width:"5rem" , height:"5rem"}} alt=''/>
                      
                      </NavLink>
                    </td>
                    <td>
                      <p>{e.rname}</p>
                      <p>Price: ₹{e.price}</p>
                      <p>Price: ₹{e.price}</p>
                      <p>Quantity: ₹{e.qnty}</p>
                      <p style={{color:"red" ,fontSize:20, cursor:"pointer"}} onClick={e.qnty <=1 ?()=>dlt(e.id) : ()=>remove(e)}>
                        <i className='fas fa-trash smalltrash'></i>
                      </p>
                    </td>
                    <td className="mt-5" style={{color:"red" ,fontSize:20, cursor:"pointer"}} onClick={e.qnty <=1 ?()=>dlt(e.id) : ()=>remove(e)}>
                    <i className='fas fa-trash'></i>
                    </td>
                  
                  </tr>
                  </>
                )
              })
             }
            <p className='text-center'>Total :₹{price} </p>
          </tbody>
        </Table>
      </div> 
      : 
           <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10, position:"relative"}} >
           <i className="fas fa-close smallclose"
           onClick={handleClose}
           style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
           <p style={{fontSize:22}}>Your cart is Empty</p>
           <img src='./cart.gif' alt='' className='emptycart_img' style={{width:"5rem",padding:10}}></img>
          </div>
  }



      </Menu>

      </Navbar>
    </>
  )
}

export default Header
