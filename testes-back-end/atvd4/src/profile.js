const express = require('express');
const router = express.Router();

let users = [{ username: 'user_teste', token: 'valid_token' }];

router.get('/', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    const user = users.find(u => u.token === token);
    if (user) {
        res.json({ username: user.username });
    } else {
        res.status(401).json({ error: 'Token inválido ou não fornecido' });
    }
});

module.exports = router;
