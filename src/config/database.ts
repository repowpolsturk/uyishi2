import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'yourusername',
  password: 'yourpassword',
  database: 'online_learning',
});

export default sequelize;