import React  from 'react'
import img from '../Assets/download.png'
import ReuseButton from '../Component/ReuseButton'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import boopSfx from '../Assets/cash-register-fake-88639.mp3'
import useSound from 'use-sound';
export default function ShowBalance() {
    
    const { t } = useTranslation();
    const navigate = useNavigate()
    const selector = useSelector(items => items.currentuser.balance)
    const selectorname = useSelector(items => items.withdrawMessage)
    const [playbackRate, setPlaybackRate] = React.useState(0.75);

    const [play] = useSound(boopSfx, {
        playbackRate,
        volume: 2.5,
    });
    const MakeSound = () => {
        setPlaybackRate(playbackRate + 0.1);
        play();
        setTimeout(() => {
            navigate('/home')
          }, 2000);
    }
    return (
        <div className='LoginPageColor'>
            <div >
                <img src={img} className='ImageShowBalance' />
            </div>
            <div className='Text'>
                {selector <= 0 ? t("Available balance", { balance: 0 }) :
                    t("Available balance", { balance: selector })}
            </div>
            <div className='Pin'>
                {t(`${selectorname}`)}
            </div>
            <div className='CheckPinDiv'>
                <ReuseButton variant={"contained"} onClick={MakeSound} className='CheckPin' > {t("Go back to home")}</ReuseButton>
            </div>

        </div>
    )
}
