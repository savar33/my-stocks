import React from 'react';

import StockCardComponent from '../components/StockCardComponent';
import StockCardComponent2 from '../components/StockCardComponent2';

function HomeComponent(props) {
    return (
        <>
            <div className='row'>
                <h1>Stocks</h1>
            </div>
            <div className='row'>
                <h2>show by</h2>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">popular</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">date</label>
                </div>
            </div>
            <div className='row'>

                <StockCardComponent imagePath='images/BA.jpg' title='Boeing' id='1' />
                <StockCardComponent2 />
                <StockCardComponent2 />
                <StockCardComponent2 />
            
                <StockCardComponent2 />
                <StockCardComponent2 />
                <StockCardComponent2 />
            </div>
        </>
    );
}

export default HomeComponent;