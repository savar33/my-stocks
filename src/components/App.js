import React from 'react';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import StockCardComponent from './StockCardComponent';
import StockCardComponent2 from './StockCardComponent2';

function App() {
  return (
    <div className="container-fluid">
      <HeaderComponent />
      
      <div className='main'>
        <h1>Stocks</h1>
        <div className='row'>
          <h2>show by</h2>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label className="form-check-label" for="inlineRadio1">popular</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" for="inlineRadio2">date</label>
          </div>
        </div>
        <div className='row'>

          <StockCardComponent imagePath='images/bo.jpg' title='Boeing'/>
          <StockCardComponent2 />
          <StockCardComponent2 />
          <StockCardComponent2 />
        </div>
        <div className='row'>
          <StockCardComponent2 />
          <StockCardComponent2 />
          <StockCardComponent2 />
        </div>
          

      </div>

      <FooterComponent />
      

    </div>
  );
}

export default App;
