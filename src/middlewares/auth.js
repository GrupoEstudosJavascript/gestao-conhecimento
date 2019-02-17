import jwt from 'jsonwebtoken'
import config from '~/config/configServer'
import { promisify } from 'util'
export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res
      .status(401)
      .json({ type: 'error', title: 'Usuário não logado', msg: 'Favor efetuar o login para acesse esse conteudo' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, config.secretConhecimento)
    req.userId = decoded.id
    next()
  } catch (err) {
    res.status(401).json({ type: 'error', title: 'Token Invalido', msg: 'O token informado não é valido' })
  }
}
