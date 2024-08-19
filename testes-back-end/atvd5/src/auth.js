const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [{ username: 'user_teste', password: 'senha_teste' }];

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
});

module.exports = router;
