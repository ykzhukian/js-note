import React from 'react';
import Plx from 'react-plx';

console.log(Plx);

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 0,
    end: 200,
    properties: [
      {
        startValue: '#3cb99c',
        endValue: 'rgba(50,50,200,0.8)',
        property: 'backgroundColor',
      },
      {
        startValue: 0,
        endValue: 90,
        property: 'rotate',
      },
    ],
  },
];

const styles = {
  width: 100,
  height: 100,
  lineHeight: '100px',
  textAlign: 'center',
  borderRadius: 20,
  backgroundColor: '#34ba9c',
  color: '#fff',
  left: '50%',
  marginLeft: -50,
  top: 100,
  position: 'fixed',
  fontFamily: 'Helvetica, Arial, sans-serif'
};

const PlxExample = () => {
  return (
    <div style={{ height: 3000 }}>
      <Plx
        parallaxData={parallaxData}
        style={styles}
      >
        123
      </Plx>
    </div>
  );
};

export default PlxExample;
