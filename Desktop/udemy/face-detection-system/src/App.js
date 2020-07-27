import React from 'react';
import './App.css';

import Particles from 'react-particles-js';

import SignOut from './components/SignOut/SignOut';
import SiteLogo from './components/SiteLogo/SiteLogo';
import SearchImage from './components/SearchImage/SearchImage';
import ImageArea from './components/ImageArea/ImageArea';


const particlesParams = {
  
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
}



function App() {
  return (
    <div className="App" >

      <Particles params={particlesParams} className='particles' />

      <header>
        <SiteLogo />
        <SignOut />
      </header>
      
      <SearchImage />

      <ImageArea />

    </div>
  );
}

export default App;
