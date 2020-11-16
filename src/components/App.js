import React from 'react';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

function App() {
  return (
    <div className="container-fluid">
      <HeaderComponent />
      
      <div className='main'>
        <h2>Stocks</h2>
      </div>

      <FooterComponent />
      

    </div>
  );
}

export default App;
