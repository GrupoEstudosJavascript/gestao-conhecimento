import UserModel from '~/models/userModel'

class UserController {
  async create (req, res) {
    const { user } = req.body
    // Verifica se o email já está cadastrado no sistema
    if (await UserModel.findOne({ email: user.email })) {
      return res.status(400).json({
        type: 'error',
        title: 'Email já cadastrado',
        msg: `O email ${
          user.email
        } já está cadastrado no sistema, caso tenha perdido a senha favor clicar em solicitar nova senha`
      })
    }

    // Verifica se já existe um usuario cadastrado
    if (await UserModel.findOne({ username: user.username })) {
      return res.status(400).json({
        type: 'error',
        title: 'Usuário já em uso',
        msg: `O usuário ${
          user.username
        } já está cadastrado no sistema, por favor escolha outro`
      })
    }

    // Cria um novo usuario
    await UserModel.create(user, (err, usr) => {
      if (err) {
        return res.status(400).json({
          type: 'error',
          title: 'Ocorreu um erro ao salvar',
          msg: `Ocorreu um erro ao salvar o usuario no banco de dados, favor tentar novamente ${err}`
        })
      }
      res.status(200).json({
        type: 'success',
        title: 'Usuario salvo com sucesso',
        msg: usr
      })
    })
  }

  async listAll (req, res) {
    await UserModel.find({}, (err, users) => {
      if (err) return res.json(err)
      return res.json(users)
    })
  }
}

export default new UserController()
