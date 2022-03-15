import React from 'react'
import  About from './Componentes/About'
import styled from 'styled-components'
import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lobster', sans-serif;
    font-size:1.5rem;  
         
     
  }`
const Hone= styled.h1`
height 29vh; 
width:100%;
color: gray;
background-color:pink;
display: flex;
justify-content: center;
align-items: center;
line-height: 80px;

`
const Container= styled.div`
height 100vh;
width:100vw;
color: red;
border: 9px solid ;
background-color:pink;
`


const Props = () => {

  return(
    <Container>
        <GlobalStyle/>
      <Hone>Props</Hone>
   <About nome= "Stéfany" idade="33" gosto= "estudar React" />
   <About nome= "Maria" idade="10" gosto= "estudar Matemática" />
  
     

    </Container>

  )
}
export default Props 