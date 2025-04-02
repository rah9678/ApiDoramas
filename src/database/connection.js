import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/dramas.sqlite'
});

export default sequelize;
