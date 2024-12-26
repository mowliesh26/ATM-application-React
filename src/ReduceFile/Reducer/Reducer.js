import React from 'react'
import { CHECKBALANCEMESSAGE, CURRENTUSER, DEPOSITAMOUNT, WITHDDRAWTOSHOWBALANCE, WITHDRAWMESSAGE } from '../ActionType/ActionType'


const UserDetails = [
    {
        name: "Mouli",
        cardnum: "3333333333333",
        pin: 3333,
        balance: 40000
    },
    {
        name: "Vikinesh",
        cardnum: "1111111111111",
        pin: 1111,
        balance: 12000
    },
    {
        name: "Praveen",
        cardnum: "2222222222222",
        pin: 2222,
        balance: 500000
    },
]
const reducerState = {
    loginvalue: false,
    Userdetails: UserDetails,
    currentuser: {},
    withdrawMessage: ""
}
export const Reducerfunction = (state = reducerState, action) => {
    switch (action.type) {
        case CURRENTUSER:
            return {
                ...state,
                loginvalue: state.loginvalue = true,
                currentuser: UserDetails.find(item => item.cardnum === action.payload)
            }
        case WITHDDRAWTOSHOWBALANCE:
            return {
                ...state,
                currentuser: { ...state.currentuser, balance: state.currentuser.balance -= action.payload }
            }

        case WITHDRAWMESSAGE:
            return {
                ...state,
                withdrawMessage: action.payload
            }
        case CHECKBALANCEMESSAGE:
            return {
                ...state,
                withdrawMessage: action.payload
            }
        case DEPOSITAMOUNT:
            return {
                ...state,
                currentuser:{...state.currentuser,balance:state.currentuser.balance =action.payload}
            }
        default:
            return state

    }

}
