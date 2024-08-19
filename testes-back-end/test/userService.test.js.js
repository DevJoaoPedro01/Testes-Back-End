const { expect } = require('chai');
const { registerUser } = require('../userService');

describe('Testes de Cadastro de Usuário', () => {
    it('Deve cadastrar um usuário com sucesso', () => {
        const result = registerUser('João da Silva', 'joao.silva@email.com', 'Senha@123');
        expect(result).to.have.property('id');
        expect(result).to.have.property('message', 'Usuário cadastrado com sucesso!');
    });

    it('Deve lançar um erro se o nome não for informado', () => {
        expect(() => registerUser('', 'joao.silva@email.com', 'Senha@123')).to.throw('Todos os campos são obrigatórios.');
    });

    it('Deve lançar um erro se o email não for informado', () => {
        expect(() => registerUser('João da Silva', '', 'Senha@123')).to.throw('Todos os campos são obrigatórios.');
    });

    it('Deve lançar um erro se a senha não for informada', () => {
        expect(() => registerUser('João da Silva', 'joao.silva@email.com', '')).to.throw('Todos os campos são obrigatórios.');
    });
});

