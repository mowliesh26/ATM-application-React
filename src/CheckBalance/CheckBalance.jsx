import React, { useState } from 'react'
import ReuseButton from '../Component/ReuseButton'
import { useNavigate } from 'react-router'
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { CheckBalanceMessage } from '../ReduceFile/ActionCreatorjs/ActionCreator'
import { useTranslation } from 'react-i18next'

export default function CheckBalance() {
    const [error, setError] = useState(false)
    const [value, setValue] = useState("")
    const [valueInForm, setValueInForm] = useState("")
    const navigate = useNavigate()
    const { t } = useTranslation();
    const maxLength = 4
    const selector = useSelector(items => items.currentuser.pin)
    const dispatch = useDispatch()
    

    const handleInputChange = (e) => {
       
        const reg= /[^0-9]/;
        if (!reg.test(e.target.value)) {
            setValue(e.target.value)
            setValueInForm(e.target.value)
            return setError('')
        }
        
    }

    const check = () => {
        let isValid = true;
        if (value.length < 3) {
            setError("Card number must be 4 digits")
            isValid = false;
        }
        else if (selector !== Number(value)) {
            setError("Incorrect Pin")
            isValid = false;
        }
        else if (isValid) {
            dispatch(CheckBalanceMessage("Check balance successfull"))
            navigate("/showbalance")
        }
        else {
            setError('')

        }
    };

    return (
        <div className='Language'>
            <div>
                <ReuseButton variant={"contained"} onClick={() => navigate('/home')} className='Removecard' > {t("Back")} </ReuseButton>
            </div>
            <div className='Text' >  {t("Check Balance")}  </div>
            <div className='Pin'> {t("Enter your pin number")}   </div>
            <div className='PinText' >

                <TextField
                    variant="outlined"
                    sx={{
                        input: {
                            color: "black",
                            fontWeight: "bolder",
                            backgroundColor: "#ffa500",
                            borderColor: "white",
                            borderRadius: "40px",
                            textAlign: "center"
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
                    value={valueInForm}
                    type="password"
                    onChange={handleInputChange}
                    helperText={error}
                />
            </div>
            <div className='CheckPinDiv'>
                <ReuseButton variant={"contained"} onClick={check} className='CheckPin' >{t("Check")}  </ReuseButton>
            </div>
        </div>
    )
}
