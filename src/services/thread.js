const { Functions, Workers } = require("../utils");

const TIMES = 3;

module.exports = {
    /**
     * @description Implemented without worker_threads
     *              - Block NodeJS event loop until it's finished
     */
    standard: async function (req, res, next) {
        const result = await Functions.Test.delayEventLoop(false, TIMES);
        return res.status(200).json(result);
    },
    /**
     * @description Implemented with worker_threads
     *              - Non blocking operation because it's implemented using worker_threads
     */
    threaded: async function (req, res, next) {
        const io = req.app.io;
        const event = req.query.event;

        const result = await Workers.worker({ length: TIMES }, io, event);
        return res.status(200).json(result);
    },
};
