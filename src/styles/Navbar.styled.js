import  styled  from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:10vh;
background-color:#FFF;
font-family:cursive;
padding:0px 15px 0px 15px;
`;
export const Logo=styled.h1`
color:#3AAFA9;
font-weight:bold;
`;

export const Menu=styled.ul`
list-style-type:none;
display:flex;
color:#444;
font-family:Segoe UI;
`;

export const Item=styled.li`
margin:5px;
font-weight:500;
font-size:18px;
cursor:pointer;
`;

export const NavbarLink = styled(NavLink)`
 color:#444;
 
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 
&:hover,
&:focus{
    color:#3AAFA9;
}
&:active{
    color: #444;
};
`;
