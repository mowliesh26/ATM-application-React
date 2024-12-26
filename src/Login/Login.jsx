import React, { useEffect, useState } from 'react'
import '../App.css'

import img from '../Assets/atmCard.27625226daa8ac354706.jpg'
import {  TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../ReduceFile/ActionCreatorjs/ActionCreator';

export default function Login() {
    const [cardnum, setCardnum] = useState('')
    const [error, setError] = useState(false)
    const [value, setValue] = useState("")
    const navigate = useNavigate()
    const selector = useSelector(items => items.Userdetails)
    const dispatch = useDispatch()
    const maxLength = 13;

    let filerData = selector.map(item => item.cardnum)

    function checkNumber(num) {
        return num === cardnum
    }

    const submit = () => {
        let isValid = true;
        if (cardnum.length < 13) {
            setError("Invalid card Number")
            isValid = false;
        }
        else if (!filerData.some(checkNumber)) {
            setError("Invalid card Number")
            isValid = false;
        }
        else if (isValid) {

            dispatch(currentUser(cardnum))
            navigate("/language")
        }
        else {
            setError('')

        }
    };


    const handleInputChange = (e) => {
        const reg = /[^0-9]/;
        if (!reg.test(e.target.value)) {
            setCardnum(e.target.value)
            setValue(e.target.value)
            return setError('')
        }
        
    }


    return (
        <div className='LoginPageColor'>
            <div className='Image'>
                <img src={img} />
            </div>
            <div className='CardNumber'>
                <Typography variant='h4' >
                    Enter Card Number
                </Typography>
            </div>
            <div >
                <TextField
                    variant="outlined"
                    sx={{
                        input: {
                            color: "black",
                            fontWeight: "bolder",
                            fontSize: "20px",
                            backgroundColor: "#ffa500",
                            borderColor: "white",
                            borderRadius: "50px",
                            textAlign: 'center'
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
                    value={value}
                    type="text"
                    onChange={handleInputChange}
                    helperText={error}
                />

            </div>
            <div className="loginButtondiv">
                {/* <ReuseButton variant={"text"} onClick={() => submit()} className='loginButton' > Continue </ReuseButton> */}
                <Button
                    color='#353034'
                    variant="contained"
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#353034",
                        color: "white",
                        padding: "18px 36px",
                        fontSize: "18px",

                    }}
                    
                    onClick={() => submit()}
                    sx={{ m: 3 }}
                >
                    Continue
                </Button>
            </div>



        </div>


    )
}


