import { useState } from 'react';
import './App.css';

function App() {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, seTVertical] = useState(10);
  const [blur, setBlur] = useState(5);
  const [spread, setSpread] = useState(0);
  const shadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(0, 0, 0, 1)`;

  return (
    <>
      <h2>Box Shadow Generator</h2>
      <div className="app">
        <div className="left">
          <div style={{ boxShadow: shadow }} className="cube">
            <div className="measurements">box-shadow: {shadow}</div>
          </div>
        </div>
        <div className="right">
          <div className="box">
            <label htmlFor="hLength">Horizontal Length:</label>
            <div>
              <input type="number" id="hLength" value={horizontal} onChange={e => setHorizontal(e.target.value)} />
              <input type="range" min='-200' max='200' value={horizontal} onChange={e => setHorizontal(e.target.value)} />
            </div>
          </div>
          <div className="box">
            <label htmlFor="vLength">Vertical Length:</label>
            <div>
              <input type="number" id="vLength" value={vertical} onChange={e => seTVertical(e.target.value)} />
              <input type="range" min='-200' max='200' value={vertical} onChange={e => seTVertical(e.target.value)} />
            </div>
          </div>
          <div className="box">
            <label htmlFor="blur">Blur Radius:</label>
            <div>
              <input type="number" id="blur" value={blur} onChange={e => setBlur(e.target.value)} />
              <input type="range" min='0' max='300' value={blur} onChange={e => setBlur(e.target.value)} />
            </div>
          </div>
          <div className="box">
            <label htmlFor="spread">Spread Radius:</label>
            <div>
              <input type="number" id="spread" value={spread} onChange={e => setSpread(e.target.value)} />
              <input type="range" min='-200' max='200' value={spread} onChange={e => setSpread(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
