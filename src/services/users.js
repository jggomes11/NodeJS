const db = require("../database/models");

module.exports = {
    /**
     *
     * @returns
     * [
        {
            "id": 2,
            "name": "João",
            "email": "joao.email.com",
            "password": "senha",
            "createdAt": "2020-05-19T21:17:17.058Z",
            "updatedAt": "2020-05-19T21:17:17.058Z",
            "deletedAt": null
        },
     * ]
     * @description Get all user's from database's users table
     */
    get: async function (req, res, next) {
        const users = await db.users.findAll({ raw: true });
        return res.status(200).json(users);
    },
    /**
     * @param {String} name
     * @param {String} email
     * @param {String} password
     * @example
     * {
	        "name": "João",
	        "email": "joao.email.com",
	        "password": "teste"
        }
     * @returns
     * {
            "id": 2,
            "name": "João",
            "email": "joao.email.com",
            "password": "senha",
            "createdAt": "2020-05-19T21:17:17.058Z",
            "updatedAt": "2020-05-19T21:17:17.058Z",
            "deletedAt": null
        }
     * @description Create an user on database's users table
     */
    create: async function (req, res, next) {
        const { name, email, password } = req.body;

        const [user, created] = await db.users
            .findOrCreate({
                where: { email },
                defaults: { name, password },
                paranoid: false,
                raw: true,
            })
            .catch((err) => {
                console.log(err);
            });

        // If user was created previously, remove it's logical deletion
        if (created === false) {
            await db.users.restore(user);
        }

        return res.status(200).json(user);
    },
    /**
     * @param {Number} id
     * @param {String} name
     * @param {String} email
     * @param {String} password
     * @example
        {
            "id": 1,
            "name": "Pedro",
            "email": "pedro.email.com",
            "password": "123"
        }
     * @returns
     * {}
     * @description Update an user on database's users table
     */
    update: async function (req, res, next) {
        const { id, name, email, password } = req.body;

        const [updatedRows] = await db.users.update({ name, email, password }, { where: { id } });

        if (updatedRows !== 1) {
            console.log("Error");
        }

        return res.status(200).json({});
    },
    /**
     *
     * @param {String} id
     * @example
     * {
     *  id: "1"
     * }
     * @returns NUMBER
     * @description Delete an user from database's users table
     */
    delete: async function (req, res, next) {
        const { id } = req.params;

        const deletedRows = await db.users.destroy({ where: { id } }).catch((err) => {
            console.log(err);
        });

        if (deletedRows !== 1) {
            console.log("Error");
        }

        return res.status(200).json(deletedRows);
    },
};
