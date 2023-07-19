import './header.css';

import { useState } from 'react'

import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Link } from 'react-router-dom';

export default function Header() {
    const [menu, setMenu] = useState(false);

    function openMenu() {
        setMenu(true);
    }

    function closeMenu() {
        setMenu(false);
    }

    return (
        <div className='app'>

            <div className='header'>
                <h1>DevLuiz</h1>

                <nav className='header-nav'>
                    <a href='#'><FaInstagram /></a>
                    <a href='#'><FaTwitter /></a>
                    <a href='#'><FaWhatsapp /></a>
                </nav>

                <button onClick={openMenu} className='header-menuHamburger'><GiHamburgerMenu /></button>
            </div>

            {menu && (
                <div className='menuOpen'>
                    <button onClick={closeMenu} className="closeButton">X</button>
                    <div className='nav-menu'>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                        <Link to="/create-account">
                            <button>Create Account</button>
                        </Link>
                        <Link to="/reset-password">
                            <button>Reset Password</button>
                        </Link>
                        <Link to="*">
                            <button>404 Page</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}