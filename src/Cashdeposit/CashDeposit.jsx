import React, { useState } from 'react'
import ReuseButton from '../Component/ReuseButton'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { DepositAmount, withdrawMessage } from '../ReduceFile/ActionCreatorjs/ActionCreator';
import { useTranslation } from 'react-i18next';
 
export default function CashDeposit() {
    const [error, setError] = useState("")
    const [depositAmount, setDepositAmount] = useState(0)
    const [ComponentRendering, setComponentRendering] = useState(false)
    const [userEnterPin, setUserEnterPin] = useState(0)
    const [valueFive,setValueFive]=useState("")
    const [valueTwo,setValueTwo]=useState("")
    const [valueOne,setValueOne]=useState("")
    const [valueDeposit,setValueDeposit]=useState("")

    const { t } = useTranslation();
    const navigate = useNavigate()
    const selector = useSelector(items => items.currentuser.balance)
    const selectorpin = useSelector(items => items.currentuser.pin)


    let MainBalance = selector + depositAmount
    const maxLengthpin = 4
    const maxLength = 5
    const dispatch = useDispatch()



    const submitLanguage = () => {
        navigate('/home')
    }
    

    const handleInputChangeFive = (e) => {
       
        const reg = /[^0-9]/;
        if (!reg.test(e.target.value)) {
            setDepositAmount(500 * e.target.value)
            
            setValueFive(e.target.value)
            return setError('')
        }
        
    }

    const handleInputChangeTwo = (e) => {
        const reg = /[^0-9]/;
        if (!reg.test(e.target.value)) {
            setDepositAmount(depositAmount + (200 * e.target.value))
            setValueTwo(e.target.value)
            return setError('')
        }
    }
    const handleInputChangeOne = (e) => {
        const reg = /[^0-9]/;
        if (!reg.test(e.target.value)) {
            
            setDepositAmount(depositAmount + (100 * e.target.value))
            setValueOne(e.target.value)
            return setError('')
        }
    }

    function Deposit() {
        if (depositAmount == 0) {
            setError("Enter amount to deposit")
        }
        else {
            setError('')
            setComponentRendering(true)
            dispatch(DepositAmount(MainBalance))
            dispatch(withdrawMessage("Cash Deposit"))
            
        }
    }

    
    
    const handleInputChangePin = (e) => {
       
        const reg = /[^0-9]/;
        if (!reg.test(e.target.value)) {
            
            setUserEnterPin(e.target.value)
            setValueDeposit(e.target.value)
            return setError('')
        }

    }
     
    function depositPin() {
        if (userEnterPin == selectorpin) {
            navigate('/showbalance')
            setComponentRendering(false)
        }
        else {
            setError("Pin Mismatch")
        }
    }
    return (
        <div >
            {ComponentRendering ?
                <div className='Language'>
                    <div>
                        <ReuseButton variant={"contained"} onClick={()=>setComponentRendering(false)} className='Removecard' >{t('Back')} </ReuseButton>
                    </div>
                    <div className='Text'> {t("Cash Deposit")}   </div>
                    <div className='Text1'> {t("Deposit")}  : {depositAmount}  </div>
                
                    <div className='Text1'> {t("Enter your pin number")}   </div>
                    <div className='Pin'>

                        <div className='CashDeposit Text1' >
                            <TextField
                                variant="outlined"
                                sx={{
                                    input: {
                                        color: "black",
                                        backgroundColor: "#ffa500",
                                        borderColor: "white",
                                        borderRadius: "50px",
                                        textAlign: 'center',
                                        
                                        

                                    },
                                    '& .MuiFormHelperText-root': {
                                        color: 'red',
                                        fontSize: "20px",
                                        textAlign: 'center',
                                    },
                                }}


                                inputProps={{
                                    maxLength: maxLengthpin,

                                }}
                                type="password"
                                value={valueDeposit}
                                onChange={handleInputChangePin}
                                helperText={error}
                            />

                        </div>
                    </div>
                    <div className='ButtonForLanguage'>
                        <div>
                            <ReuseButton variant={"contained"} onClick={depositPin} className='Withdraw' > {t("Deposit")} </ReuseButton>
                        </div>

                    </div>
                </div>
                :
                <div className='Language'>
                    <div>
                        <ReuseButton variant={"contained"} onClick={submitLanguage} className='Removecard' >{t('Back')} </ReuseButton>
                    </div>
                    <div className='Text'>   {t("Cash Deposit")} </div>
                    <div className='Text1'>   {t("Enter your deposit amount")} </div>
                    <div className='FlexDiv'>
                        <div className='WithdrawAmount'>
                            <div className='WithdrawAmountText'> {t("500  x")}</div>
                            <div  >
                                <TextField
                                    variant="outlined"
                                    sx={{
                                        input: {
                                            color: "black",
                                            backgroundColor: "#ffa500",
                                            borderColor: "white",
                                            borderRadius: "50px",
                                            textAlign: 'center',
                                           
                                        },
                                        '& .MuiFormHelperText-root': {
                                            color: 'red',
                                            fontSize: "20px",
                                            textAlign: "center"
                                        },
                                    }}


                                    inputProps={{
                                        maxLength: maxLength,

                                    }}
                                    type="text"
                                    value={valueFive}
                                    onChange={handleInputChangeFive}
                               
                                />

                            </div>
                        </div>
                        <div className='WithdrawAmount'>
                            <div className='WithdrawAmountText'>200 x</div>
                            <div  >
                                <TextField
                                    variant="outlined"
                                    sx={{
                                        input: {
                                            color: "black",
                                            backgroundColor: "#ffa500",
                                            borderColor: "white",
                                            borderRadius: "50px",
                                            textAlign: 'center',
                                            
                                        },
                                        '& .MuiFormHelperText-root': {
                                            color: 'red',
                                            fontSize: "20px",
                                            textAlign: "center"
                                        },
                                    }}


                                    inputProps={{
                                        maxLength: maxLength,

                                    }}
                                    type="text"
                                    value={valueTwo}
                                    onChange={handleInputChangeTwo}
                                    helperText={error}
                                />

                            </div>
                        </div>
                        <div className='WithdrawAmount'>
                            <div className='WithdrawAmountText'> 100 x</div>
                            <div  >
                                <TextField
                                    variant="outlined"
                                    sx={{
                                        input: {
                                            color: "black",
                                            backgroundColor: "#ffa500",
                                            borderColor: "white",
                                            borderRadius: "50px",
                                            textAlign: 'center',
                                            
                                        },
                                        '& .MuiFormHelperText-root': {
                                            color: 'red',
                                            fontSize: "20px",
                                            textAlign: "center"
                                        },
                                    }}
                                    inputProps={{
                                        maxLength: maxLength,
                                    }}
                                    type="text"
                                    value={valueOne}
                                    onChange={handleInputChangeOne}
                              
                                />

                            </div>
                        </div>
                    </div>
                    <div className='ButtonForLanguage'>
                        <div>
                            <ReuseButton variant={"contained"} className='Withdraw' onClick={Deposit} >  {t("Deposit")} </ReuseButton>
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}
