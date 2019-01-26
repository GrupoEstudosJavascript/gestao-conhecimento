export const rotas = app.group('/users', (router) => {
  router.get('/', (req, res) => {
    res.send({
      users: [
        {
          id: 1,
          email: 'teste@teste.com',
          username: 'teste',
          password: 'alskdaksjjkh3482392',
        },
        {
          id: 2,
          email: 'teste2@teste.com',
          username: 'teste2',
          password: 'alskdaksjjkh3482392',
        },
      ],
    });
  });
  router.post('/', (req, res) => {
    // faz o cadastro
    res.send({
      msg: 'Usuario cadastrado com sucesso',
    });
  });
});
