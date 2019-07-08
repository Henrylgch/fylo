import React from 'react';

import '../styles/navbar.css'
import logo from '../images/logo.svg';

class Navbar extends React.Component {
    render() {
        return (
            <div className='global-navbar'>
                <div className='d-inline-flex'>
                    <a href='/'>
                        <img src={logo} alt='logo-fylo' /> 
                    </a>
                </div>
                <ul class='nav d-inline-flex'>
                    <li><a class="nav-link active" href="/">Twitter</a></li>
                    <li><a class="nav-link" href="/">Facebook</a></li>
                    <li><a class="nav-link" href="/">Gmail</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;