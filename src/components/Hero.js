import React from 'react';
import Logo from '../images/illustration-main.svg';



class Hero extends React.Component {
    render() {
        return (
            <div className='landing'>
                <figure className='img-hero'>
                    <img className='img-fluid' src={Logo} alt='logo-landingpage' />
                </figure>
            </div>
        )
    }
}

export default Hero;