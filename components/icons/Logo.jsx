import React from 'react';

const Logo = ({ alt, width, height }) => (

  <img src="dark-logo.png" alt={alt} width={150} height={150} />
  
);

export default Logo;


// <img src={light ? "light-logo.png" : "dark-logo.png"} alt={alt} width={width} height={height} />

// <img src="dark-logo.png" alt={alt} width={150} height={150} />