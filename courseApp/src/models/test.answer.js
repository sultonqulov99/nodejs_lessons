import { DataTypes } from 'sequelize'
export default async ({ sequelize }) => {
    sequelize.define('Test_answer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull:false,
        }
    }, {
        underscored: true,
        tableName: 'test_answers',
        updatedAt:false
    })
    // await sequelize.models.Level.hasMany(sequelize.models.Tense, {
    //     foreignKey: 'level_id',
    // })
    await sequelize.models.Test_answer.belongsTo(sequelize.models.Test,{
        foreignKey: 'test_id'
    })
}