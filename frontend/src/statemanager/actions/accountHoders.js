import axios from 'axios';
import { ALL_ACCOUNT_HOLDERS,CREATE_AC, DELACCOUNT,SINGLE_ACCOUNT,ERROR } from '../actionTypes/actionTypes';

export const createAccount = (accountformdata)=>(dispatch)=>{
    axios.post('/createaccount',accountformdata,{
        headers:{
            "content-type":"application/json"
        }
    })
    .then(response =>{
        dispatch({
            type:CREATE_AC,
            payload:{
                message:response.data
            }
        })
    })
    .catch(error=>{
        dispatch({
            type:ERROR,
            payload:{
                error:error.response.data
            }
        })
    })
}
export const deletingAccount = (id)=>(dispatch) =>{
    axios.delete(`/deletingaccount/${id}`)
    .then(Response=>{
        dispatch({
            type:DELACCOUNT,
            payload:Response.data
        })
    })
    .catch(error=>{
        console.log(error)
    })
}

export const allAccountHolders = () =>(dispatch)=>{
    axios.get('/allaccountholders')
    .then(Response =>{
        dispatch({
            type:ALL_ACCOUNT_HOLDERS,
            payload:{
                accountHolders:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })

}

export const singleAccount = (id) =>(dispatch)=>{
    axios.get(`/singleaccountholder/${id}`)
    .then(Response =>{
        dispatch({
            type:SINGLE_ACCOUNT,
            payload:{
                accountHolders:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })

}


