const express = require('express');
const router = express.Router();

let products = [];

router.post('/', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
});

router.put('/:id', (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
        products[index] = { ...products[index], ...req.body };
        res.json(products[index]);
    } else {
        res.status(404).json({ error: 'Produto não encontrado' });
    }
});

router.delete('/:id', (req, res) => {
    products = products.filter(p => p.id !== req.params.id);
    res.status(204).send();
});

module.exports = router;
