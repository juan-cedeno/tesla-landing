import React from 'react'

import '../css/items.css'
import { Button } from './Button'

export const Item = ({title , desc , image , leftBtntext , rigthBtnText  , twoBtn , first}) => {
    return (
        <div className = 'cont-items' style = {{
            backgroundImage: `url(${image})`
        }}>

            <div className = 'letter-items'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

            <div className = 'btn-items'>
                <Button text = {leftBtntext} />
                {
                    twoBtn && <Button imp = 'secondary' text = {rigthBtnText}/> 
                }

            </div>

            <div className = 'icon-items'>
                    {
                        first && <i className="fas fa-angle-down"></i>
                    }
            </div>

        </div>
    )
}
