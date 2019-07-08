import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import '../styles/global.css'
import '../styles/landing.css'
import LandingMessage from '../components/LandingMessage';
import SignUp from '../components/SignUp';

class LandingPage extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col landing-leftside'>
                    <Hero />
                </div>
                <div className='col'>
                    <Navbar />
                    <LandingMessage />
                    <SignUp />
                </div>
            </div>
        )
    }
}

export default LandingPage;