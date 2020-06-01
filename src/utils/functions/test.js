const fibonacci = require("fibonacci");
const { parentPort } = require("worker_threads");

const NUMBER = 10000;

module.exports = {
    /**
     * @param {Boolean} isWorker True - If this function is been called on an worker thread
     * @param {Number} length Number of iterations
     * @description function that stall Node's event Loop
     */
    delayEventLoop: async function (isWorker, length) {
        for (let i = 0; i < length; i++) {
            fibonacci.iterate(NUMBER); // Fibonacci's iteration, used to stall node event loop when isWorker = false

            if (isWorker) {
                parentPort.postMessage({ atual: i, total: length }); // Clone result variable and send it to main thread
            }
        }
    },
};
