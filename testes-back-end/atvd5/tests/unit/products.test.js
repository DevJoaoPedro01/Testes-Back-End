const request = require('supertest');
const app = require('../../src/app');

describe('Testes de Unidade - Produtos', () => {
    it('Deve criar um novo produto', async () => {
        const product = { id: '1', name: 'Produto 1', price: 100 };
        const response = await request(app)
            .post('/products')
            .send(product);

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe('Produto 1');
    });

    it('Deve retornar um produto existente', async () => {
        const response = await request(app)
            .get('/products/1');

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Produto 1');
    });
});
