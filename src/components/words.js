import React from 'react';
import bg from '../img/words-bg.png'
  
const Words = () => {
    return (
    <>
        <div style={{ marginLeft: '10vw', marginTop: '120px'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow"></link>
        <span style={{ width: '200px' }} >
            <a className="title" href="/personal">julia zheng</a>
        </span>
        <div style={{ display: 'inline-block', marginLeft: '72px' }}>
            <a href="/words"><button className="btnClicked">&nbsp;&nbsp;WORDS&nbsp;&nbsp;</button></a>
            <a href="/picture"><button className="btn">&nbsp;&nbsp;1 PICTURE&nbsp;&nbsp;</button></a>
        </div>
        <div className='box' style={{ backgroundImage: `url(${bg})` }}>
          <body className='wordsText'>
            <div className='wordsTextH'>WRITINGS</div>
            <ul>
              <li>In Progress.</li>
            </ul>
            <div className='wordsTextH'>MISC.</div>
            <ul>
              <li>In Progress.</li>
            </ul>
          </body>
        </div>
        </div>
    </>
);
};
  
export default Words;