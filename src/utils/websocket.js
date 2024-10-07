const WebSocket = require('ws');

var reconnectInterval = 1000 * 10
var ws;


var connect = function () {


    const ws = new WebSocket('wss://marketdata.tradermade.com/feedadv');


    ws.on('open', function open() {
        ws.send('{"userKey":"wsdi9ZkD2yTqxKIMAv3w", "symbol":"GBPUSD,UK100"}');
    });


    ws.on('close', function () {
        console.log('socket close : will reconnect in ' + reconnectInterval);
        setTimeout(connect, reconnectInterval)
    });


    ws.on('message', function incoming(data) {
        if (data != "Connected") {
            data = JSON.parse(data)
            console.log(data)
        }
    });
};
connect();