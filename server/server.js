import express from 'express';
import userRouter from './routes/userRoutes.js';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MongoURL = 'mongodb+srv://admin:civilwar1@cluster0.oqyuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URL || MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log('MongoDB database connection established successfully'))
    .catch(err => console.log(err) )

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server at http://localhost:${port}`))

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

app.use('/api/users', userRouter);
app.use('/api/products', productRouter)

app.use((err, req, res, next) =>{
  res.status(500).send({message: err.message})
});








