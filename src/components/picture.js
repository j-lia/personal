import React from 'react';
import bg from '../img/picture-bg.jpeg'
  
const Picture = () => {
  return (
    <>
    <div style={{ marginLeft: '10vw', marginTop: '120px'}}>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow"></link>
    <span style={{ width: '200px' }} >
        <a className="title" href="/personal">julia zheng</a>
    </span>
    <div style={{ display: 'inline-block', marginLeft: '72px' }}>
        <a href="/personal/words"><button className="btn">&nbsp;&nbsp;WORDS&nbsp;&nbsp;</button></a>
        <a href="/personal/picture"><button className="btnClicked">&nbsp;&nbsp;1 PICTURE&nbsp;&nbsp;</button></a>
    </div>
    
    <div>
      <span className='box' style={{ backgroundColor: '#B11817' }}>
        <body className='wordsText' style={{ position: 'absolute', top: '50px', left:'60px' }}>
          <a href='/personal/words' className='link' style={{ textDecoration: 'underline', color: 'white' }}>(Look. Slowly, closely.)</a>
        </body>
        <img src={bg} alt='moment' className='moment' style={{ top: '110px', left:'60px' }}></img>
        <span className='caption'>
          <div className='captionTitle'>THROUGH</div>
          <br/>
          <div className='captionDate'>September 21, 2022</div>
          <br/>
          <div className='captionText'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliquas. Fusce ut placerat orci nulla
            pellentesque dignissim enim sit.
          </div>
        </span>
      </span>
    </div>

    </div>
    </>
);
};
  
export default Picture;