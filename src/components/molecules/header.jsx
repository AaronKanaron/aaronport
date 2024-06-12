import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <header>
            <a href="/" className='name'>
                <h1>Aaron.</h1>
                <p>2024</p>
            </a>
            <div className='boxes'>
                <div className='box special'/>
                <div className='box'/>
                <div className='box'/>
                <div className='box'/>
            </div>

            <div className="menu">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </div>
        </header>
    )
}

export default Header