import express, { Application } from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import sequelize from './config/database';
import './associations';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use('/users', userRoutes);


app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);


  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
