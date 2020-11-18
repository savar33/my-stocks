
const getStocks = () => {
    const stocks = [
        {   id:1, 
            name: 'Boeing',
            code: 'BA',
            addDate: '20200427', 
            previousClose: 204.23, 
            dayRange: '203.51-204.25',
            week52Range: '182.52 - 224.86', 
            marketCap: '423.8B',
            eps: -7.89
        },
        // {id: 10,name:'', addDate: ''},
        {id:10, code:'BTC', name: 'Bitcoin USD', addDate: '20190514'}
    ];
    return stocks;
}

export default getStocks;