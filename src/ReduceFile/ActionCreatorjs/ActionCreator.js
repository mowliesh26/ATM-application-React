 
import { CHECKBALANCEMESSAGE, CURRENTUSER, DEPOSITAMOUNT, WITHDDRAWTOSHOWBALANCE, WITHDRAWMESSAGE } from '../ActionType/ActionType'

 
export const currentUser = (data) => {
    return {
        type: CURRENTUSER,
        payload: data,
    }
}
export const withdrawToShowBalance =(data)=>{
    return {
        type: WITHDDRAWTOSHOWBALANCE,
        payload: data,
    }
}
export const withdrawMessage =(data)=>{
    return {
        type: WITHDRAWMESSAGE,
        payload: data,
    }
}

export const CheckBalanceMessage =(data)=>{
    return {
        type: CHECKBALANCEMESSAGE,
        payload: data,
    }
}

export const DepositAmount =(data)=>{
    return {
        type: DEPOSITAMOUNT,
        payload: data,
    }
}
