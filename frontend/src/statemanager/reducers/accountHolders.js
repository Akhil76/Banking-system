import {ALL_ACCOUNT_HOLDERS,CREATE_AC, DELACCOUNT, SINGLE_ACCOUNT,ERROR} from '../actionTypes/actionTypes';

const initialstate = {
    accountHolders:[],
    accountHolder:[],// Single accountholder only
    message:{},
    error:{},
    loading:true
}

const accountHolders = (state=initialstate,action)=>{
    switch(action.type){
        case ALL_ACCOUNT_HOLDERS:
            return{
                ...state,
                accountHolders:action.payload.accountHolders,
                loading:false
            }
        case CREATE_AC:
            return{
                ...state,
                message:action.payload.message,
                error:{}
            }
        case ERROR:
            return{
                ...state,
                error:action.payload.error
            }
        case DELACCOUNT:
            return{
                ...state,
                accountHolders:state.accountHolders.map((e)=>
                e._id===action.payload.id?action.payload:e
                )
            }
        case SINGLE_ACCOUNT:
            return{
                ...state,
                accountHolder:action.payload.accountHolders,
                loading:false
            }
        default :
            return state

    }
}

export default accountHolders;