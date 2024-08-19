const request = require('supertest');
const app = require('../../src/app');

describe('Testes de Unidade - Pedidos', () => {
    it('Deve criar um novo pedido', async () => {
        const order = { id: '1', productId: '1', quantity: 2 };
        const response = await request(app)
            .post('/orders')
            .send(order);

        expect(response.statusCode).toBe(201);
        expect(response.body.productId).toBe('1');
    });

    it('Deve retornar um pedido existente', async () => {
        const response = await request(app)
            .get('/orders/1');

        expect(response.statusCode).toBe(200);
        expect(response.body.productId).toBe('1');
    });
});
