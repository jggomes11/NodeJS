module.exports = (sequelize, DataTypes) => {
    const USERS = sequelize.define(
        "users",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
            deletedAt: DataTypes.DATE,
        },
        {
            // tableName: "users",
            // createdAt: 'created_at',
            // updatedAt: 'updated_at',
            // deletedAt: 'deteledAT',
            timestamps: true,
            paranoid: true,
        }
    );
    USERS.associate = function (models) {
        // associations can be defined here
    };
    return USERS;
};
