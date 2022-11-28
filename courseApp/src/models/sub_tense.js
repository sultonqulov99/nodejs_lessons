import { DataTypes } from 'sequelize'
export default async ({ sequelize }) => {
    sequelize.define('Sub_tense', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
        }
    }, {
        underscored: true,
        tableName: 'sub_tenses',
        updatedAt:false
    })
    // await sequelize.models.Level.hasMany(sequelize.models.Tense, {
    //     foreignKey: 'level_id',
    // })
    await sequelize.models.Sub_tense.belongsTo(sequelize.models.Tense,{
        foreignKey: 'tense_id'
    })
}