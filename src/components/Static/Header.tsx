import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
        <Conatiner>
            <Main>
                <Logo>Logo</Logo>
                <NavHolder>
                    <Nav to="/display">Home</Nav>
                </NavHolder>
                <Link to="/">
                <Button>Add Task</Button>
                </Link>
            </Main>
        </Conatiner>
      
    </div>
  )
}

export default Header
const Button = styled.button`
background-color: white;
color: black;
padding: 10px 18px;
outline: none;
border: 0;
border-radius: 3px;
font-size: 15px;
font-weight: 500;
text-decoration: none ;
:hover{
    background-color: #0404e4;
    cursor: pointer;
    color: white;
}
`
const Nav = styled(Link)`
font-size: 20px;
text-decoration: none;
color: white;
:hover{
    color: red;
    cursor: pointer;
}
`
const NavHolder = styled.div``
const Logo = styled.div`
font-size: 30px;


`
const Main = styled.div`
width: 90%;
height: 100%;
display:flex;
justify-content: space-between;
align-items: center;
`
const Conatiner = styled.div`
width: 100%;
display: flex;
height: 80px;
justify-content: center;
align-items: center;
background-color: black;
color: white;
`

