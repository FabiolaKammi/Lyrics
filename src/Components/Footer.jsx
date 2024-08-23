import React from 'react';

const Footer = () => {
  const date = new Date();
  const year=date.getFullYear();
  return (
    <div className='footer-section'>
      {/*<ul className='words'>
        <li>Made with passion,love,and resilience, under a countinuous learning and improvment mindset </li>
        <li>By Fabiola Kammi, your potential SWE</li>
        <li>{now}</li>
      </ul>
      <ul className='icons'>
      <li>FK</li>
      <li>{formattedDate}</li>
      </ul>*/}

<ul className='media'>
        
        <li>©</li>
          <li>Copyright</li>
          <li>{year}</li>
        </ul>
    </div>
  )
}

export default Footer;
