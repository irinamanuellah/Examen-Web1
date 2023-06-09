import React from 'react';
import "./ToogleTheme.css";

function ToogleTheme() {
  return (
      <body className='light'>
          <label className='toogle' for="toogle"></label>
          <i className='bx bxs-sun'></i>
          <i className='bx bx-moon'></i>
          <span className='ball'></span>
    </body>
  )
}

export default ToogleTheme;