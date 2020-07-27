import React from 'react'
import Tilt from 'react-tilt'
import face from './logo.jpg'

function SiteLogo() {
    return (
        <div className='sitelogo'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
            
                <div className="Tilt-inner">
                    <img src={face} alt='display face loading' className='logo' />
                </div>
            </Tilt>
            
        </div>
    )
}

export default SiteLogo
