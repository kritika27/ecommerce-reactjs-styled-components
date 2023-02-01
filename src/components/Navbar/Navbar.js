import React from 'react'
import { Nav ,Logo,Menu,Item } from '../../styles/Navbar.styled';

const Navbar = () => {
  return (
   <Nav>
     <Logo>Trends</Logo>
     <Menu>
       <Item>Home</Item>
       <Item>Products</Item>
     </Menu>
     <Menu>
     <Item>Log In</Item>
       <Item>Cart</Item>
       
     </Menu>
   </Nav>
  )
}

export default Navbar