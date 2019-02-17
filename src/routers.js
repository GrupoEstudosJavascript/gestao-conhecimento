import { Router } from 'express'
import {
  UserController,
  ArticleController,
  SessionController
} from '~/controllers'

const router = Router()

router.get('/info', (req, res) => {
  res.send({
    msg: 'Servidor on',
    process: process.env
  })
})

// -=-=-=-=-= ROTAS DE USUARIOS -=-=-=-=
router.get('/user', UserController.listAll)
router.post('/user', UserController.create)
router.post('/user/login', SessionController.authenticate)

// -=-=-=-=-= ROTAS DE ARTIGOS -=-=-=-=-=
router.post('/article', ArticleController.create)
router.get('/article', ArticleController.listAll)
router.get('/article/tags', ArticleController.listTags)
router.get('/article/articlefortag/:tag', ArticleController.listArticleForTag)

export default router
