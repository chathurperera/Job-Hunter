import React from 'react'
import {Plus , PauseCircle} from 'react-bootstrap-icons'

const NavBar = () => {
    return (
        <nav className='navbar__container'>
            <div className="logo">
                <h3>Job Hunter <PauseCircle /></h3>
            </div>
            <div className="cta__options">
                <button className='cta__secondary__btn' > <Plus /> Post a job </button>    
                <button className='cta__secondary__btn'>Register for free</button>    
                <button className='cta__primary__btn'>Sign in</button>    
            </div>            
        </nav>
    )
}

export default NavBar
