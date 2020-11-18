import React from 'react';

function StockDetails(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-3">
                    <h4>Stock name</h4>
                </div>
                <div className="col-3">
                    <h4>Visibility</h4>
                </div>
                <div className="col-1"/>
                <div className="col-2">
                    <h4>Choose logo</h4>
                </div>
            </div>

            <div className='row'>

                <div className="input-group col-2">
                    <input type="text" className="form-control mb-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="col-1"/>

                <div className="col-3">           
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">me</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">all</label>
                    </div>
                </div>
                
                <div className="col-1"/>
                <div className="col-3"> 
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                            <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-3">
                    <h4>Source</h4>
                    <h4>Yahoo finance</h4>
                </div>
            </div>
            <div className='row'>
            </div>

        </div>
    );
}

export default StockDetails;