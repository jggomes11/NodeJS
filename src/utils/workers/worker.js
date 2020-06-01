const { Test } = require("../functions");
const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

/**
 * @param {JSON} workerData
 * @description New worker_thread's worker:
 *              - Instantiate a Worker
 *              - Worker's events
 */
const newWorker = (workerData, io, event) => {
    io.emit(event, { atual: 0, total: 0 });
    return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, { workerData }); // File's name to be threaded and it's params

        // Event triggered when use `parentPort.postMessage'
        // Communicate with frontend or send the result somewhere else
        worker.on("message", (message) => {
            const { atual, total } = message;

            console.log(message); // All __fibonacciThreaded interations are printed here
            io.emit(event, {
                atual: atual + 1,
                total,
            });
        });
        // Event triggered When an error happens
        worker.on("error", reject);
        // Event triggered when thread finishes
        worker.on("exit", (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            } else return resolve(code);
        });
    });
};

/**
 * @param {JSON} workerData
 * @description Function that verify if it's not the main thread:
 *              - If it's not: run some code and return the result to main thread
 */
const notMainThread = async function (workerData) {
    if (!isMainThread) {
        const { length } = workerData;
        await Test.delayEventLoop(true, length);
    }
};

notMainThread(workerData);

module.exports = newWorker;
