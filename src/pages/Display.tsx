import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardProps from '../components/Reuse/CardProps'
import {  readTask,readProgressTask, readDoneTask } from '../utils/Api'



const Display = () => {
    const [state,setState] = useState<[]>([])
    const [state1,setState1] = useState<[]>([])
    const [state2,setState2] = useState<[]>([])
    useEffect(()=>{
        readTask().then((res:any)=>{
            setState(res)

        })
        readProgressTask().then((res:any)=>{
            setState1(res)

        })
        readDoneTask().then((res:any)=>{
            setState2(res)

        })
    })
    console.log(state)
  return (
    <div>
      <Container>
        <Main>
            <CardProps 
            title='Task List'
            data={state}
            text='Move to Progress'
            display=''
            display1='kk'
            display2='ll'
            display3= "jj"
            
            />
            <CardProps 
            title='In Progress'
            data={state1}
            display3=""
            display='jj'
            display1='jj'
            display2=''
            text="Move to Progress"

            />
            <CardProps 
            title='Done'
            data={state2}
            text='Back to Progress'
            display='j'
            display3="jj"
            display1=''
            display2="jj"

            />
        </Main>
      </Container>
    </div>
  )
}

export default Display
const Main = styled.div`
display: flex;
`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 50px;
`
