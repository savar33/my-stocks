import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
import StockDetails from './components/StockDetails';
import ProfileComponent from './components/ProfileComponent';
import AllStocksComponent from './components/AllStocksComponent';
import NewStockComponent from './components/NewStockComponent';

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
    <BrowserRouter>
      <div className="container-fluid">
        <HeaderComponent />

        <div className='container'>
          <Switch>
            <Route path='/' exact={true}>
              <HomeComponent />
            </Route>

            <Route path="/new-stock">
              <NewStockComponent />
            </Route>
            <Route path="/my-stocks">
              <HomeComponent />
            </Route>
            <Route path="/all-stocks">
              <AllStocksComponent />
            </Route>
            <Route path="/profile">
              <ProfileComponent />
            </Route>
            <Route path="/stock-details/:id">
              <StockDetails />
            </Route>
          </Switch>
        </div>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
