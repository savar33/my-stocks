const getIndicators = (code) => {
    const allIndicators = [
        {code:'BA', EMA:2.01, MACD:3.41, RSI:0.54, SO:1.25}, 
        // {code:'', EMA:, MACD:, RSI:, SO:},
        {code:'BTC', EMA:1.42, MACD:0.58, RSI:1.28, SO:0.34}
    ];
    return allIndicators.find(stock => stock.code === code);
}

export default getIndicators;