const express = require('express');
const router = express.Router();

let orders = [];

router.post('/', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).json(order);
});

router.get('/:id', (req, res) => {
    const order = orders.find(o => o.id === req.params.id);
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ error: 'Pedido não encontrado' });
    }
});

module.exports = router;
