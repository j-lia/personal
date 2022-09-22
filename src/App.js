
import bg from './img/home-bg.png';
import decal1 from './img/decal1.png';
import decal2 from './img/decal2.png';
import './App.css';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <img src={decal1} alt="decal1" className="bg" style={{ top: '-53px', left: '14px', width: '174px', overflow: '205.36px' }}/>
      <img src={decal2} alt="decal2" className="bg" style={{ top: '71px', left: '425px', width: '1512px', overflow: 'hidden' }}/>
      <div style={{ marginLeft: '180px', marginTop: '120px'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Gafata"></link>
        <span className="title">
          Julia Zheng
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div style={{ display: 'inline-block' }}>
          <button className="btn">&nbsp;&nbsp;WORDS&nbsp;&nbsp;</button>
          <button className="btn">&nbsp;&nbsp;PICTURES&nbsp;&nbsp;</button>
        </div>
        <div>
          <img src={bg} alt="bg" className="bg" style={{ top: '200px', width: '725px' }}/>
          <link rel="stylesheet" href="https://use.typekit.net/kar8wbl.css"></link>
          <span className="text" style={{ left: '250px', top: '250px', color: 'white' }}>
            a slight net cast across the stream of perception—
          </span>
          <span className="text" style={{ left: '780px', top: '575px', color: 'white' }}>
            —this is that.
          </span>
        </div>
      </div>
    </div>
  );
}
export default App;