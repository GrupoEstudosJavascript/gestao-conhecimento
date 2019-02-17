import UserSchema from '~/models/userModel'

class SessionController {
  async authenticate (req, res) {
    const { user } = req.body

    const userFind = await UserSchema.findOne({ email: user.email })
    // Verifica se recebeu um usuario
    if (!userFind) {
      return res.status(400).json({
        type: 'error',
        title: 'Ocorreu um erro',
        msg: 'Usuario não localizado'
      })
    }

    if (!(await userFind.compareHash(user.password))) {
      res.status(400).json({
        type: 'error',
        title: 'Ocorreu um erro',
        msg: 'Senha ou usuario errado'
      })
    }
    res
      .status(200)
      .json({ user: userFind, token: UserSchema.generateToken(userFind) })
  }
}

export default new SessionController()
