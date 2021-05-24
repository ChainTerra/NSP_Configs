var Stratum = require('stratum-pool');
var pool = Stratum.createPool({
    "coin": BitClout,
    "address": "mi4iBXbBsydtcc5yFmsff2zCFVX4XG7qJc",
    "rewardRecipients": {
        "n37vuNFkXfk15uFnGoVyHZ6PYQxppD3QqK": 1.5,
        "mirj3LtZxbSTharhtXvotqtJXUY7ki5qfx": 0.5,
        "22851477d63a085dbc2398c8430af1c09e7343f6": 0.1
    },
    "blockRefreshInterval": 1000,
    "jobRebroadcastTimeout": 55,
    "connectionTimeout": 600,
    "emitInvalidBlockHashes": false,
    "tcpProxyProtocol": false,
    "banning": {
        "enabled": true,
        "time": 600,
        "invalidPercent": 50,
        "checkThreshold": 500,
        "purgeInterval": 300
    },
    "ports": {
        "3032": {
            "diff": 32,
            "varDiff": {
                "minDiff": 8,
                "maxDiff": 512,
                "targetTime": 15,
                "retargetTime": 90,
                "variancePercent": 30
            }
        },
        "3256": {
            "diff": 256
        }
    },
    "daemons": [
        {   
            "host": "127.0.0.1",
            "port": 19000,
        }
    ],
    "p2p": {
        "enabled": false,
        "host": "127.0.0.1",
        "port": 17000,
        "disableTransactions": true
    }
}, function(ip, port , workerName, password, callback){
    console.log("Authorize " + workerName + ":" + password + "@" + ip);
    callback({
        error: null,
        authorized: true,
        disconnect: false
    });
});
