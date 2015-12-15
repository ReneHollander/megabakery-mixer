'use strict';

var Promise = require('bluebird');
var net = Promise.promisifyAll(require('net'));

class Client {

    constructor(identifier) {
        this.identifier = identifier;
        this.socket = new net.Socket();
    }

    connect(ip, port) {
        var that = this;
        return that.socket.connectAsync(port, ip)
            .then(function () {
                that.socket.write('identify ' + that.identifier)
            });
    }

    disconnect() {
        this.socket.destroy()
    }

    onData(fn) {
        this.socket.on('data', fn);
    }

    onClose(fn) {
        this.socket.on('close', fn);
    }

    onError(fn) {
        this.socket.on('error', fn);
    }

    write(data) {
        this.socket.write(data);
    }

}

module.exports = Client;