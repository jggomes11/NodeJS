module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("users", [
            {
                name: "João",
                email: "joao@email.com",
                password: "senha",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Pedro",
                email: "pedro@email.com",
                password: "senha",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    },
};
