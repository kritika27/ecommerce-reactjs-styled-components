import styled from "styled-components";

export const ProductList=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin:0 auto;
width:80vw;

`;

export const ProductItems=styled.div`


width:30vw;
height:100vh;
margin:2rem;
background:red;
`;

export const ProductPic=styled.div`

    height: 30rem;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    
    border-top-right-radius: 0.25rem;
    
`;

export const Image=styled.img`
height: 30rem;
    width: 100%;
    display: block;

`;

export const Footer=styled.div`
    padding: 1.5rem;
    
    /* display: flex; */
    
    /* flex-direction: column; */
`;