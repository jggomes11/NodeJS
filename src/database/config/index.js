module.exports = {
    development: {
        username: process.env.LOGIN,
        password: process.env.PASSWORD,
        database: "database_development",
        host: "localhost",
        port: 1433,
        dialect: "mssql",
        dialectOptions: {
            encrypt: false,
        },
        define: {
            freezeTableName: true,
        },
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mssql",
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mssql",
    },
};
