import React from "react";
import '../styling/Fonts.css';

// IMAGES
import Man from '../sources/man.svg';
import Box from  '../sources/box-heart.svg';
import Outfit from  '../sources/outfit.svg';

const HowItWorks = () => {
  return (
    <div className="section brown lighten-5" style={{ minHeight: '100vh', padding: '5%', alignContent: 'center', 
    // backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/000/100/746/non_2x/vector-abstract-geometric-pattern-background.jpg')" 
    }}>
      <div className="row" style={{ padding: '3%' }}>
        <h1 className='rubik'>HOW IT WORKS</h1>
      </div>
      <div className='row' style={{ padding: '2%' }}>
        <div className="col s4">
          <h3 className='rubik'>Step 1.</h3>
          <img src={Man} style={{ maxWidth: '300px', padding: '10%'}} alt='gentleman' />
            <p className='rubik' style={{ fontSize: '20px' }}>Tell us a bit about yourself by signing up.</p>
        </div>
        <div className="col s4">
        <h3 className='rubik'>Step 2.</h3>
          <img src={Box} style={{ maxWidth: '300px', padding: '10%'}} alt='box' />
          <p className='rubik' style={{ fontSize: '20px' }}>Browse products that fit your personal style.</p>
        </div>
        <div className="col s4">
          <h3 className='rubik'>Step 3.</h3>
          <img src={Outfit} style={{ maxWidth: '300px', padding: '1%'}} alt='outfit' />
          <p className='rubik' style={{ fontSize: '20px' }}>Success! Your Stylebox has arrived with the freshest clothes.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
