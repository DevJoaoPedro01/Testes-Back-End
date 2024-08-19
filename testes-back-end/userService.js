function registerUser(name, email, password) {
    if (!name || !email || !password) {
        throw new Error('Todos os campos são obrigatórios.');
    }
    // Simulação de cadastro no banco de dados
    return {
        id: 1,
        name: name,
        email: email,
        message: 'Usuário cadastrado com sucesso!'
    };
}

module.exports = { registerUser };
