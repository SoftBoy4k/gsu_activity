import { HomePageSvgSelector } from '../../pages/HomePage/HomePageSvgSelector'
import { SVG_LOGO, SVG_MENU } from '../../const'
import "./Header.scss"
import { useState } from 'react'
import { Menu } from '../Menu/Menu'
import { Link } from 'react-router-dom'

export const Header = () => {
    const [menuIsActive, setMenuIsActive] = useState(false)
    return (
        <div className="header">
            <Link className="logo" to="/">
                <HomePageSvgSelector svg = {SVG_LOGO}/>
            </Link>
            <div className="user">
                <Link to = '/login'>
                    <button className='btn-login'>
                        Log in
                    </button>
                </Link>
                {/* <button className='btn-user'>
                    ВП
                </button> */}
                <div onClick={() => {setMenuIsActive(!menuIsActive)}} className="menu-icon"><HomePageSvgSelector svg = {SVG_MENU}/></div>
                {menuIsActive ? <Menu/> : undefined}
            </div>
        </div>
    )
}