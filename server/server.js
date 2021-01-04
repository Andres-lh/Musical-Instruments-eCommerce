import express from 'express';
import data from './data/data.js'

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/products', (req, res) =>{
    res.send(data)
})

app.get('/api/products/:category/:id', (req, res) => {
    const product = data[`${req.params.category}`].find(item => item.id === parseInt(req.params.id))
    if (product) {
      res.send(product);
    } else {
        console.log(req.params)
      res.status(404).send({ message: 'Product Not Found' });
    }
})

app.listen(port, () => console.log(`Server at http://localhost:${port}`))

app.get('/', (req, res) => {
    res.send('Server is ready');
})