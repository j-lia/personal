
import bg from './home-bg.png';
import './App.css';

function App() {
  return (
    <div>
      <img src={bg} alt="bg" className="bg"/>
      <link rel="stylesheet" href="https://use.typekit.net/kar8wbl.css"></link>
      <span className="text" style={{left: '130px', top: '110px'}}>
        a slight net cast across the stream of perception—
      </span>
      <span className="text" style={{left: '635px', top: '425px'}}>
        —this is that.
      </span>
      <span className="text" style={{fontStyle: 'italic', color: 'rgb(251,0,118)', left: '825px', top: '425px'}}>
        IN PROGRESS.
      </span>
    </div>
  );
}
export default App;