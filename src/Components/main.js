//nathan
import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import bolo from './image/bolo.png'
import pizza from './image/pizza.png'
import vitamina from './image/vitamina.png'

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Source Code Pro', monospace;
    color: #373737;
}
`
const Section = styled.section`
  background-color: #F2F4F1;
  display: flex;
  justify-content: center;
  flex-direction:column;
`
const Title = styled.div`
  display: flex;
  width: 100%;
  height: 19vh;
  align-items: center;
  flex-direction: column;
  h4{
    font-size: 2vw;
  }
`
const Line = styled.div`
  border: 2px solid #373737;
  width: 10vw;
  margin-left: 10px;
`
const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height:80vh;
`
const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items:center;
  width: 26,5%;
  margin-top: 10vh;
`
const Img = styled.img`
  width: 26,5%;
  height: 250px;
  `
  const Linharecipe = styled.div`
    border: 2px solid #373737;
    width: 5vw;
    margin-top: 10vh;
    margin-bottom: 3vh;
  `
export default function App() {
  return(
    <>
    <GlobalStyle/>
    <Section>
        <Title>
            <h4>Latest Recipes</h4>
            <Line></Line>
        </Title>
        <Menu>
            <Recipe>
                <Img src={bolo} alt="red velvet cake"/>
                <Linharecipe></Linharecipe>
                <p>Red Velvet Cake</p>
            </Recipe>
            <Recipe>
                <Img src={pizza} alt="pizza"/>
                <Linharecipe></Linharecipe>
                <p>Margherita Pizza</p>
            </Recipe>
            <Recipe>
                <Img src={vitamina} alt="vitamina"/>
                <Linharecipe></Linharecipe>
                <p>Margherita Pizza</p>
            </Recipe>
        </Menu>
    </Section>
    </>
  )  
}
