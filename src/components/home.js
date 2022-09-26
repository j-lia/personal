import React from 'react';
import bg from '../img/home-bg.png';
import { BsArrowUpRight } from 'react-icons/bs';
  
const Home = () => {
    return (
        <>
            <div style={{ marginLeft: '10vw', marginTop: '120px'}}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow"></link>
            <span style={{ width: '200px' }} >
                <a className="title" href="/personal">julia zheng</a>
            </span>
            <div style={{ display: 'inline-block', marginLeft: '72px' }}>
                <a href="/words"><button className="btn">&nbsp;&nbsp;WORDS&nbsp;&nbsp;</button></a>
                <a href="/picture"><button className="btn">&nbsp;&nbsp;1 PICTURE&nbsp;&nbsp;</button></a>
            </div>
            <div className='box' style={{ backgroundImage: `url(${bg})` }}>
                <body className='homeText'>
                    is a Yale senior thinking about
                    <ul>
                    <li>algorithmic alignment,</li>
                    <li>in silico models of the brain, and</li>
                    <li>Lindt Intense Orange Dark Chocolate.</li>
                    </ul>
                    She is currently
                    <ul>
                    <li>listening to Sandy Lam,</li>
                    <li>reading <em>The Turnaway Study</em>, and</li>
                    <li>learning to climb rocks.</li>
                    </ul>
                    <br></br>
                    <a className='link' href = "mailto: julia.zheng@yale.edu">EMAIL <BsArrowUpRight/></a>&nbsp;&nbsp;&nbsp;
                    <a className='link' href = "https://www.linkedin.com/in/julia-y-zheng/">LINKEDIN <BsArrowUpRight/></a>&nbsp;&nbsp;&nbsp;
                    <a className='link' href = "https://www.instagram.com/juliaxyzz/">INSTAGRAM <BsArrowUpRight/></a>
                </body>
            </div>
            </div>
        </>
    );
};
  
export default Home;