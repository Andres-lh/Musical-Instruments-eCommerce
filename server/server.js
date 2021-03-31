import express from 'express';
import userRouter from './routes/userRoutes.js';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
import dotenv from 'dotenv';


const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log('MongoDB database connection established successfully'))
    .catch(err => console.log(err) )

const port = process.env.PORT;
app.listen(port, () => console.log(`Server at http://localhost:${port}`))

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

app.use('/api/users', userRouter);
app.use('/api/products', productRouter)

app.use((err, req, res, next) =>{
  res.status(500).send({message: err.message})
});








