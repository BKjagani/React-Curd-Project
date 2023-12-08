import axios from "axios";


const API = "  http://127.0.0.1:3002/users"


export const getData = async() => {
    try{
        return await axios.get(API);
    }catch(error){
        console.log(error.message)
    }
}
export const postData = async(addUser) => {
    try{
        return await axios.post(API, addUser);
    }catch(error){
        console.log(error.message)
    }
}


export const putData = async(id, addUser) => {
    try{
        return await axios.put(`${API}/${id}`, addUser);
    }catch(error){
        console.log(error.message)
    }
}


export const deleteData = async(id) => {
    try{
        return await axios.delete(`${API}/${id}`);
    }catch(error){
        console.log(error.message)
    }
}