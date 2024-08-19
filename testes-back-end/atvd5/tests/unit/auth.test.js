const request = require('supertest');
const app = require('../../src/app');

describe('Testes de Unidade - Autenticação', () => {
    it('Deve autenticar usuário com credenciais válidas', async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({ username: 'user_teste', password: 'senha_teste' });

        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
    });

    it('Não deve autenticar usuário com credenciais inválidas', async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({ username: 'user_invalido', password: 'senha_invalida' });

        expect(response.statusCode).toBe(401);
        expect(response.body.token).toBeUndefined();
    });
});
