import axios from "axios";


const STRING_URL:string = "http://localhost:2900/data"
const STRING_URL1 = "http://localhost:2900/progress"
const STRING_URL2 = "http://localhost:2900/Done"

export const createTask = async(data:any)=>{
    try {
        await axios.post(STRING_URL, data).then((res)=>{
            return res.data

        })
        
    } catch (error) {
        console.log(error)
        
    }
}
export const create1Task = async(data:any)=>{
    try {
        await axios.post(STRING_URL, data).then((res)=>{
            return res.data

        })
        
    } catch (error) {
        console.log(error)
        
    }
}
export const readTask = async()=>{
    try {
        return await axios.get(STRING_URL).then((res)=>{
            return res.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
export const DeleteTask = async(id:string)=>{
    try {
        return await axios.delete(`${STRING_URL}/${id}`).then((res)=>{
            return res.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

// In Progress 
export const createProgressTask = async (data: any) => {
    try {
        await axios.post(STRING_URL1, data).then(res => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const readProgressTask = async () => {
    try {
        return await axios.get(STRING_URL1).then((res: any) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const DeleteProgressTask = async(id:string)=>{
    try {
        return await axios.delete(`${STRING_URL1}/${id}`).then((res)=>{
            return res.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

// Done Task
export const createDoneTask = async (data: any) => {
    try {
        await axios.post(STRING_URL2, data).then(res => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const readDoneTask = async () => {
    try {
        return await axios.get(STRING_URL2).then((res: any) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteDoneTask = async(id:string)=>{
    try {
        return await axios.delete(`${STRING_URL2}/${id}`).then((res)=>{
            return res.data
        })
        
    } catch (error) {
        console.log(error)
        
    }
}
