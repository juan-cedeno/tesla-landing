import React from 'react'

import '../css/footer.css'

export const Footer = () => {
    return (
        <div className = 'footer'>
            <label>juan cedeño &copy;</label>
            <a href = 'https://github.com/juan-cedeno' target = '_blank' rel="noreferrer">
                <i className="fab fa-github"></i>
            </a>

            <a href = 'https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/' target = '_blank' rel = 'noreferrer'>
                <i className="fab fa-linkedin"></i>
            </a>

            <label>privacy & legal</label>
            <label>contact</label>
            <label>careers</label>
            <label>get newsletter</label>
            <label>new</label>
            <label>forum</label>
            <label>locations</label>
        </div>
    )
}
