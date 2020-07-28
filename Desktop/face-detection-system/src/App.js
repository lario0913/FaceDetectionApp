import React from 'react';
import './App.css';

import Clarifai from 'clarifai'
import Particles from 'react-particles-js';

import SignOut from './components/SignOut/SignOut';
import SiteLogo from './components/SiteLogo/SiteLogo';
import SearchImage from './components/SearchImage/SearchImage';
import ImageArea from './components/ImageArea/ImageArea';


const app = new Clarifai.App({
 apiKey: '5a80c0cf0ebf44d5ab3a568e7706fabb'
});


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


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input : '',
       imageUrl: ''
    }
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonClicked = () => {
    this.setState({imageUrl: this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
      console.log(response)
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (
      <div className="App" >
  
        <Particles params={particlesParams} className='particles' />
  
        <header>
          <SiteLogo />
          <SignOut />
        </header>
        
        <SearchImage onInputChange={this.onInputChange} onButtonClicked={this.onButtonClicked} />
  
        <ImageArea imageUrl= {this.state.imageUrl} />
  
      </div>
    )
  }
}

export default App

