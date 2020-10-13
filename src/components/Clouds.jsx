import React, { Component } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';


class Clouds extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = CLOUDS({
      el: this.vantaRef.current,
      


     

      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 330.00,
      minWidth: 330.00,
      sunColor: 0x0,
      sunGlareColor: 0xff3f00,
      speed: 0.00,
      scale: 1.00,
      scaleMobile: 1.00,
      
  
      
      
      


      THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
            
    </div>
  }
}

export default Clouds;