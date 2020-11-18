import React from 'react';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import StockCardComponent from './components/StockCardComponent';
import StockCardComponent2 from './components/StockCardComponent2';

import getStocks from './api/stocksData';
import getIndicators from './api/analyticsData';


function App() {

  const stocks = getStocks();
  console.log('stocks typeof ' + (typeof stocks));
  console.log('stocks ' + JSON.stringify(stocks));
  console.log('stocks ' + stocks[0]);
  
  const baIndicator = getIndicators('BA');
  console.log('baIndicator ' + JSON.stringify(baIndicator));

  return (
    <div className="container-fluid">
      <HeaderComponent />
      
      <div className='main'>
        <h1>Stocks</h1>
        <div className='row'>
          <h2>show by</h2>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label className="form-check-label" htmlFor="inlineRadio1">popular</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" htmlFor="inlineRadio2">date</label>
          </div>
        </div>
        <div className='row'>

          <StockCardComponent imagePath='images/BA.jpg' title='Boeing'/>
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
