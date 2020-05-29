const { Math, Workers } = require("../utils");

const TIMES = 3;

module.exports = {
    /**
     * @description Implemented without worker_threads
     *              - Block NodeJS event loop until it's finished
     */
    standard: async function (req, res, next) {
        const result = Math.fibonacci(TIMES);
        return res.status(200).json(result);
    },
    /**
     * @description Implemented with worker_threads
     *              - Non blocking operation because it's implemented using worker_threads
     */
    threaded: async function (req, res, next) {
        const result = await Workers.fiboWorker({ length: TIMES });
        return res.status(200).json(result);
    },
};
