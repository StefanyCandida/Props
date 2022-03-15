import React from 'react'
import styled from 'styled-components'

const Container= styled.div`

width:100%;
color: red;
text-align:center;
background-color:violet;
line-height: 60px;
`


const Card = ({nome, idade, gosto }) =>{
  return (
   
  <Container>
    <p> Oi me chamo <b>{nome}</b> tenho {idade} e gosto de {gosto}, aprender me deixa muito feliz . </p>
   
 </Container>
 

  )}
export default Card;