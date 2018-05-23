import client from 'superagent';

const symbol = 'BTCUSDT';
const startTS = '1514764800';
const interval = '1M';
const url = `https://www.binance.com/api/v1/klines?symbol=${symbol}&interval=${interval}&startTime=${startTS}`;

client.get(url)
    .then(response => response.body
        .map(month => ({
            high: Number(month[2]),
            low: Number(month[3])
        }))
        .reduce((prev, curr) => ({
            high: prev.high < curr.high ? curr.high : prev.high,
            low: prev.low > curr.low ? curr.low : prev.low
        }), { high: 0, low: 999999 })
    )
    .then(result => {
        console.log(`High: $${result.high}`);
        console.log(`Low: $${result.low}`);
    })
    .catch(err => {
        console.log(err);
    })
