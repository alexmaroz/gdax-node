import Gdax from 'gdax';

const websocket = new Gdax.WebsocketClient(['ETH-USD']);

websocket.on('open', () => {
    console.log('Websocket opened.');
});

websocket.on('close', () => {
    console.log('Websocket closed.');
});

websocket.on('open', err => {
    console.log('Websocket error: ' + err);
});

websocket.on('message', data => {
    if (data.type !== 'heartbeat') {
        if (data.price) {
            console.log(`$${data.price}`);
        }
    }
});