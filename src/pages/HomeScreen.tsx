import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { createTask } from '../utils/Api'
import { v4 as uuidv4 } from "uuid"

const HomeScreen = () => {
    const Schema = yup.object({
        task: yup.string().required("This Field is Required"),
        priority: yup.string().required("This Field is Required"),
        avatar: yup.string().required("This Field is Required"),
    

    })
    const {
        reset,
        handleSubmit,
        formState: {errors},
       register,

    } = useForm({
        resolver: yupResolver(Schema)
    })
    const onhandleSubmmission = handleSubmit((res:any)=>{
        console.log("Submitted", res)
        reset()
        const date =  Date.now()
        createTask({
            id: uuidv4(),
            task: res.task,
            priority: res.priority,
            avatar: res.avatar,
            time: date

        })
    


    })
  return (
    <div>
      <Container>
        <Main onSubmit={onhandleSubmmission}>
                 {/*Task */}
            <InputHolder>
            <Title>Task</Title>
            <Input placeholder='Add Task' {...register("task")}/>
            <Error>{errors.task && "Please Task Input"}</Error>
            </InputHolder>
            
              {/*Avatar */}
              <InputHolder>
            <Title>Avatar</Title>
            <Input placeholder='Enter Avatar' {...register("avatar")}/>
            <Error>{errors.avatar && "Please enter avatar"}</Error>
            </InputHolder>



            {/*Priority */}
            <InputHolder>
            <Title>Priority</Title>
            <Select {...register("priority")}>
            Priority
            <Option>Urgent</Option>
            <Option>High</Option>
            <Option>Low</Option>
            </Select>
            <Error>{errors.priority && "Please Enter Select "}</Error>
            
            </InputHolder>
            <Button 
            type='submit'
            >Add Task</Button>
        </Main>
      </Container>
    </div>
  )
}

export default HomeScreen
const Error = styled.div`
font-size: 12px;
position: absolute;
color: red;
right: 50px;
`
const Option = styled.option``
const Select = styled.select`
width: 83%;
height: 100%;


`
const Menu = styled.button`
margin: 10px 0;
padding: 10px 10px;
font-size: 12px;
background-color: purple;
outline: none;
border: 0;
color: white;
font-weight: 600;
border-radius: 4px;
`
const Holder = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 20px;
`
const Title = styled.div`
position: absolute;
background-color: white;
top: -10px;
left: 10px;
`
const Input = styled.input`
height: 100%;
width: 80%;
background-color: white;
`
const InputHolder = styled.div`
position: relative;
width: 100%;
height:40px;
margin-left: 20px;
margin: 20px 20px;
`
const Avatar = styled.img`
object-fit: cover;
width: 60px;
height: 60px;
border-radius: 50%;
align-self: center;
background-color: black;
`
const Button = styled.button`
width: 100px ;
height: 50px;
align-self: center;
outline: none;
margin-top: 5px;
border: 0;
background-color: blue;
color: white;
border-radius: 3px;
font-size: 15px;
cursor: pointer;

`
const Main = styled.form`
width: 300px;
height: 270px;
display:flex;
padding: 50px 0;
/* justify-content: center; */
border: 1px solid silver;
flex-direction: column;

`
const Container = styled.div`
width: 100%;
display: flex;
height: calc(100vh - 80px);
justify-content: center;
align-items: center;
color: black;
`
