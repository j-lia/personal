
import bg from './img/home-bg.png';
import './App.css';
import { BsArrowUpRight } from 'react-icons/bs';

function App() {
  return (
    <>
      <div style={{ marginLeft: '180px', marginTop: '120px'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Barlow"></link>
        <span className="title" style={{ width: '200px' }}>
          julia zheng
        </span>
        <div style={{ display: 'inline-block', marginLeft: '72px' }}>
          <button className="btn">&nbsp;&nbsp;WORDS&nbsp;&nbsp;</button>
          <button className="btn">&nbsp;&nbsp;1 PICTURE&nbsp;&nbsp;</button>
        </div>
        <div className='box' style={{ backgroundImage: `url(${bg})` }}>
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
        </div>
      </div>
    </>
  );
}
export default App;