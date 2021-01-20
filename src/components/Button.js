import React from 'react'


import '../css/btn.css'

export const Button = ({imp , text}) => {
    return (
        <div className =  'btn'>
            <button className = {`${imp === 'secondary' ? 'button-white' : '' }`} >{text}</button>
        </div>

    )


}

