import React from 'react'
import ReuseButton from '../Component/ReuseButton'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function Language() {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const selector= useSelector(items=> items.currentuser.name)
    const submitLanguage = () => {
           navigate('/language')
    }

    return (
        <div className='Language'>
            <div>
                <ReuseButton variant={"contained"} onClick={submitLanguage} className='Removecard' >{t("Back")} </ReuseButton>
            </div>
            <div className='Text'>
            {t(`welcome`,{name:selector})}
            </div>
            <div className='ButtonForLanguage'>
                <div>
                    <ReuseButton variant={"contained"} onClick={()=>{navigate('/balance')}} className='English' >{t("Check Balance")} </ReuseButton>
                </div>
                <div>
                    <ReuseButton variant={"contained"}  onClick={()=>{navigate('/cashwithdraw')}} className='Tamil' >{t("Cash Withdrawal")}  </ReuseButton>
                </div>
            </div>
            <div className='ButtonForLanguage'>
                <div>
                    <ReuseButton variant={"contained"} onClick={()=>navigate('/cashdeposit')} className='English' >{t("Cash Deposit")}  </ReuseButton>
                </div>
                <div>
                    <ReuseButton variant={"contained"} className='Tamil' >{t("Other Services")}    </ReuseButton>
                </div>
            </div>
        </div>
    )
}
