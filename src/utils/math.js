const fibonacci = require("fibonacci");
const { performance } = require("perf_hooks");
const { parentPort } = require("worker_threads");

const NUMBER = 10000;

module.exports = {
    /**
     * @param {Number} length
     * @description Fibonacci's benchmark implementation
     */
    fibonacci: async function (length) {
        let totalTime = 0;

        for (let i = 0; i < length; i++) {
            let t0 = performance.now();

            fibonacci.iterate(NUMBER); // Fibonacci's iteration

            let t1 = performance.now();
            totalTime += t1 - t0;
        }
        average = total / length;

        const data = {
            totalTime: totalTime / 1000,
            average: average / 1000,
        };

        return data;
    },
    /**
     * @param {Number} length
     * @description Can only be used inside a worker from a worker_thread
     */
    __fibonacciThreaded: async function (length) {
        let totalTime = 0;

        for (let i = 0; i < length; i++) {
            let t0 = performance.now();

            fibonacci.iterate(NUMBER); // Fibonacci's iteration

            // Used to check progress on frontend
            parentPort.postMessage({ atual: i, total: length }); // Clone result variable and send it to main thread

            let t1 = performance.now();
            totalTime += t1 - t0;
        }
        average = total / length;

        const data = {
            totalTime: totalTime / 1000,
            average: average / 1000,
        };

        return data;
    },
};
