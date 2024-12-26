import React from 'react'
import ReuseButton from '../Component/ReuseButton'
import { useNavigate } from 'react-router'
import { persistor } from "../ReduceFile/Store/Store.js";
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';


export default function Language() {
     
    const navigate = useNavigate()
    const submitLanguage = () => {
        navigate('/')
        persistor.purge();
    }
    const { t } = useTranslation();


    const handleChange = (value) => {       
        changeLanguage(value)
        navigate('/home')
    };

    return (
        <div className='Language'>
            <div>
                <ReuseButton variant={"contained"} onClick={submitLanguage} className='Removecard' > {t("Remove card")} </ReuseButton>
            </div>
            <div className='Text'> {t("select")}</div>
            <div className='ButtonForLanguage'>

                <div>
                    <ReuseButton variant={"contained"}className='English' onClick={()=>{handleChange('en')}}>{t("English")} </ReuseButton>
                </div>
                <div>
                    <ReuseButton variant={"contained"}  className='Tamil' onClick={()=>{handleChange('ta')}}>{t("Tamil")}   </ReuseButton>
                </div>
            </div>
        </div>
    )
}
