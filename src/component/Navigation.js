import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({ setSymbol }) {
  const [temp, setTemp] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="wrapper">
        <ul>
          <Link to="/"><li onClick={() => setShow(false)}>Home</li></Link>
          <Link to="/chart"><li onClick={() => setShow(true)}>Graphs</li></Link>
          <Link><li>Suggestions</li></Link>
          <Link><li>Charts</li></Link>
        </ul>

        {show && (
          <div>
            <input
              type="text"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              placeholder="Enter Stock Symbol"
            />
            <button onClick={() => setSymbol(temp)}>Submit</button>
          </div>
        )}
        <div>
          <p>Stock<span>App</span></p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
