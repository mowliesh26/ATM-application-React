import React, { useState } from 'react'
import ReuseButton from '../Component/ReuseButton'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { withdrawMessage, withdrawToShowBalance } from '../ReduceFile/ActionCreatorjs/ActionCreator';
import { useTranslation } from 'react-i18next';

export default function CashWithdraw() {
    const [errorPin, setErrorPin] = useState()
    const [errorWithdraw, setErrorWithdraw] = useState()
    const [withdrawAmount, setWithdrawAmount] = useState()
    const [valueAmount, setValueAmount] = useState("")
    const [valuePin, setValuePin] = useState("")
    const [pin, setPin] = useState()
    const navigate = useNavigate()
    const selector = useSelector(items => items.currentuser.pin)

    const { t } = useTranslation();
    const dispatch = useDispatch()
    const maxLength = 5
    const maxLengthpin = 4
    const submitLanguage = () => {
        navigate('/language')
    }

    const handleInputChangeAmount = (e) => {

        const reg = /[^0-9]/;
        if (!reg.test(e.target.value)) {
            setWithdrawAmount(e.target.value)
            setValueAmount(e.target.value)
            return setErrorWithdraw('')
        }

    }
    const handleInputChangePin = (e) => {

        const reg = /[^0-9]/;
        if (!reg.test(e.target.value)) {
            setPin(e.target.value)
            setValuePin(e.target.value)
            return setErrorPin('')
        }
    }


    function withdraw() {
        let isValid = true;
        if (withdrawAmount > 20000 || withdrawAmount < 100) {
            setErrorWithdraw("Amount should between 100 to 20000")
            isValid = false;
        }
        else if (withdrawAmount % 100 != 0) {
            setErrorWithdraw("Amount should be multiple of 100")
            isValid = false;
        }
        else if (selector != pin) {
            setErrorPin("Incorrect Pin")
        }

        else if (isValid) {

            dispatch(withdrawToShowBalance(withdrawAmount))
            dispatch(withdrawMessage("Cash withdrawal successfull"))
            navigate("/showbalance")
        }
        else {
            setErrorPin('')
            setErrorWithdraw('')

        }
    }
    return (
        <div className='Language'>
            <div>
                <ReuseButton variant={"contained"} onClick={submitLanguage} className='Removecard' >{t('Back')} </ReuseButton>
            </div>
            <div className='Text'>  {t("Cash Withdrawal")}  </div>
            <div className='FlexDiv'>

                <div className='WithdrawAmount'>
                    <div className='EnterWithdrawalAmount'> {t("Enter your withdrawal amount")}</div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
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
                                        fontSize: "15px",
                                        textAlign: "center",

                                    },
                                }}


                                inputProps={{
                                    maxLength: maxLength,

                                }}
                                value={valueAmount}
                                type="text"
                                onChange={handleInputChangeAmount}
                                helperText={errorWithdraw}
                            />

                        </div>
                    </div>
                </div>

                <div className='WithdrawAmount'>
                    <div className='WithdrawAmountText1'>{t("Enter your pin number")} </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
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
                                    fontSize: "15px",
                                    textAlign: "center",

                                },
                            }}


                            inputProps={{
                                maxLength: maxLengthpin,

                            }}
                            type="Password"
                            value={valuePin}
                            onChange={handleInputChangePin}
                            helperText={errorPin}
                        />

                    </div>
                    </div>
                </div>
            </div>
            <div className='ButtonForLanguage'>
                <div>
                    <ReuseButton variant={"contained"} className='Withdraw newWithdraw' onClick={withdraw} >  {t("Withdraw")} </ReuseButton>
                </div>
            </div>
        </div>
    )
}
