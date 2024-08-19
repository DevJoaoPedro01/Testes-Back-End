const request = require('supertest');
const app = require('../src/app');

describe('Testes de Integração - Autenticação e Perfil', () => {

    it('Deve fazer login e recuperar o perfil com sucesso', async () => {
        // Simula o login
        const loginResponse = await request(app)
            .post('/auth/login')
            .send({ username: 'user_teste', password: 'senha_teste' });

        expect(loginResponse.statusCode).toBe(200);
        const token = loginResponse.body.token;
        expect(token).toBeDefined();

        // Usa o token para buscar o perfil do usuário
        const profileResponse = await request(app)
            .get('/profile')
            .set('Authorization', `Bearer ${token}`);

        expect(profileResponse.statusCode).toBe(200);
        expect(profileResponse.body.username).toBe('user_teste');
    });

    it('Não deve retornar o perfil se o login falhar', async () => {
        // Simula tentativa de login com credenciais incorretas
        const loginResponse = await request(app)
            .post('/auth/login')
            .send({ username: 'user_invalido', password: 'senha_invalida' });

        expect(loginResponse.statusCode).toBe(401);

        // Tenta acessar o perfil com um token inválido
        const profileResponse = await request(app)
            .get('/profile')
            .set('Authorization', 'Bearer token_invalido');

        expect(profileResponse.statusCode).toBe(401);
    });
});
