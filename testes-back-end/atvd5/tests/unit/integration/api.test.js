const request = require('supertest');
const app = require('../../src/app');

describe('Testes de Integração - API', () => {
    let token;

    beforeAll(async () => {
        const authResponse = await request(app)
            .post('/auth/login')
            .send({ username: 'user_teste', password: 'senha_teste' });
        
        token = authResponse.body.token;
    });

    it('Deve criar um produto e fazer um pedido autenticado', async () => {
        // Criar Produto
        const product = { id: '2', name: 'Produto 2', price: 200 };
        const productResponse = await request(app)
            .post('/products')
            .set('Authorization', `Bearer ${token}`)
            .send(product);

        expect(productResponse.statusCode).toBe(201);
        expect(productResponse.body.name).toBe('Produto 2');

        // Fazer Pedido
        const order = { id: '2', productId: '2', quantity: 1 };
        const orderResponse = await request(app)
            .post('/orders')
            .set('Authorization', `Bearer ${token}`)
            .send(order);

        expect(orderResponse.statusCode).toBe(201);
        expect(orderResponse.body.productId).toBe('2');
    });

    it('Deve bloquear operações não autenticadas', async () => {
        const product = { id: '3', name: 'Produto 3', price: 300 };
        const response = await request(app)
            .post('/products')
            .send(product);

        expect(response.statusCode).toBe(401);
    });
});
