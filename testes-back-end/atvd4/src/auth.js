const express = require('express');
const router = express.Router();

let users = [{ username: 'user_teste', password: 'senha_teste', token: 'valid_token' }];

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ token: user.token });
    } else {
        res.status(401).json({ error: 'Credenciais inválidas' });
    }
});

module.exports = router;
