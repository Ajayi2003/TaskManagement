import React from 'react'
import styled from 'styled-components'
import moment from "moment"
import { DeleteProgressTask, DeleteTask,createDoneTask,createProgressTask, deleteDoneTask,create1Task,createTask  } from '../../utils/Api'

interface iCard{
    title?:string,
    data:[], 
    text?:string,
    timestamp?:string,
    display?:string,
    display1?:string,
    display2?:string,
    display3?:string,
}


const CardProps:React.FC<iCard> = ({title,data,text,timestamp,display,display1,display2,display3}) => {
  return (
    <div>
        <Container>
            <Main>

               <Title>{title}</Title>
              {
                data?.map((props:any)=>(
                    <Card key={props?.id}
                    bg={
                        props.priority === "Urgent" ? "red":
                        props.priority === "High" ? "blue":
                        props.priority === "Low" ? "green": "yellow"
                    }
                    >
                    <Task>{props?.task} <Image src={props.avatar}/></Task>
                    <Task1>{moment(props.time).fromNow()}</Task1>
                    <Div>
                    <Move
                    display={display}
                    onClick={()=>{
                      
                        createProgressTask(props)
                        DeleteTask(props?.id)
                        
                        window.location.reload()
                    }}
                    >
                {text}
              </Move>
              <Moving 

              display={display3}
              onClick={()=>{
                createDoneTask(props)
                DeleteProgressTask(props?.id)
                window.location.reload()
              }}
              >
                Move 
                

              </Moving>
              <Moving1 

              display={display1}
              onClick={()=>{
                createProgressTask(props)
                deleteDoneTask(props?.id)
                window.location.reload()
              }}
              >
                Move 
                

              </Moving1>
              <Moving2 

              display={display2}
              onClick={()=>{
                createTask({
                  id: props?.id,
                  task: props?.task,
                  time: props?.time,
                  avatar: props?.avatar,
                  priority: props?.priority

                })
                DeleteProgressTask(props?.id)
                window.location.reload()
              }}
              >
                Task 
                

              </Moving2>
              </Div>

              
    
                   </Card>
                ))
              }
            
              
             


            </Main>
        </Container>
      
    </div>
  )
}

export default CardProps

const Div = styled.div`
  display: flex;
  align-items: center;

`
const Image = styled.img`
width: 20px;
height: 20px;
border-radius: 50%;

`
const Moving2 = styled.div<{display?:string}>`
padding: 5px ;
color: white;
background-color: #2e2a2a;
margin-left:10px ;
cursor: pointer;
display: ${({display})=>display ? "none" : ""};
`
const Moving1 = styled.div<{display?:string}>`
padding: 5px ;
color: white;
background-color: #2e2a2a;
margin-left:10px ;
cursor: pointer;
display: ${({display})=>display ? "none" : ""};
`
const Moving = styled.div<{display?:string}>`
padding: 5px ;
color: white;
background-color: #2e2a2a;
margin-left:10px ;
cursor: pointer;
display: ${({display})=>display ? "none" : ""};
`
const Move = styled.div<{display?:string}>`
padding: 5px 15px;
color: white;
background-color: #2e2a2a;
display: ${({display})=>display ? "none" : ""};
margin-left:10px ;
cursor: pointer;
`
const Task1 = styled.div`
color: white;
font-size: 13px;
margin-left:10px ;

`
const Task = styled.div`
margin: 0 10px ;
color: white;
font-weight: 700;
font-size: 19px;
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
`
const Card = styled.div<{bg?:string}>`
width: 100%;
height: 90px;
margin-top: 5px;
background-color: ${({bg})=> bg};
display: flex;
flex-direction: column;
justify-content: space-between;


`
const Title = styled.div`
width: 100%;
height: 50px;
background-color: purple;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
font-weight: 500;
`
const Main = styled.div`
width: 300px;
border: 1px solid black;
background-color: black;
`
const Container = styled.div`



`
