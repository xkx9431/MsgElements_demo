import React from 'react';

import Parent from './component/portal'


function App() {
  return (
    <div>
      <h1>
        react demos
      </h1>
      <br/>
      <div className = 'modal'>
      <Parent />
      </div>
    </div>
  );
}

export default App;
