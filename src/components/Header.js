import React from 'react'
import teslaLogo from '../assets/teslaLogoSmall.svg'

import '../css/header.css'

export const Header = () => {
    return (
        <div className = 'cont-header'>
            <div className = 'logo'>
                <img src = {teslaLogo} alt = 'teslaLogo.svg'/>
            </div>

            <div className ='menu-header'>
                <p>model s</p>
                <p>model 3</p>
                <p>model x</p>
                <p>model y</p>
                <p>solar roof</p>
                <p>solar panel</p>
            </div>

            <div className = 'account-header'>
                <p>show</p>
                <p>tesla account</p>
            </div>
        </div>
    )
}
