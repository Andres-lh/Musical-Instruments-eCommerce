import express from 'express';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import dotenv from 'dotenv';
import connectDb from './config/db.js';


const app = express();
dotenv.config();


app.use(express.json());

//Routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter)


//Database connection
connectDb();

const port = process.env.PORT;
app.listen(port, () => console.log(`Server at http://localhost:${port}`))

