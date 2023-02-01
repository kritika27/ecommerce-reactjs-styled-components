import React from 'react'
import { Nav ,Logo,Menu,Item,NavbarLink} from '../../styles/Navbar.styled';


const Navbar = () => {
  return (
   <Nav>
     <Logo>Trends</Logo>
     <Menu>
       <NavbarLink to="/"><Item>Home</Item></NavbarLink>
       <NavbarLink to="/products"><Item>Products</Item></NavbarLink>
       
     </Menu>
     <Menu>
     
       <Item>Cart</Item>
       
     </Menu>
   </Nav>
  )
}

export default Navbar