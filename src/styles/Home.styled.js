import  styled  from "styled-components";
import banner from "../images/ahmed-carter-tiWcNvpQF4E-unsplash.jpg";

export const Homepage=styled.section`
display:flex;

height:90vh;
background-color:#ECF0F1;
width:100%;
`;

export const Text =styled.div`
width:40vw;
`;

export const Pic = styled.div`
    width: 60%;
    height:90vh;
     background-size: cover; 
    background-repeat:no-repeat;
    
    background-image: url(${banner});   
    object-fit: contain;
    background-position: center;

    background-color:red;


    img {
      width: 100%;
      object-fit: contain;
    }
    `;

    export const Content=styled.div`
      width: 40%;
  text-align: center;
  
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  background-color: #ecf0f1;
    `;

export const Header=styled.h1`
    font-size: 60px;
    line-height: 1em;
  `;


  export const SmallText=styled.p`
  
    color: #17252a;
  `;

export const Head=styled.div`

    max-width: 60%;
    line-height: 2em;
    margin: 0;
    text-align: left;
    border-top: 3px solid #3aafa9;
    padding-top: 20px;
  `;

  export const Button=styled.button`
  
    padding: 10px;
    color: #fff;
    background-color: #3aafa9;
    border: none;
    cursor: pointer;
  `;