import express from 'express';
import userRouter from './routes/userRoutes.js';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/store', {
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

app.get('/', (req, res) => {
    res.send('Server is ready');
})





