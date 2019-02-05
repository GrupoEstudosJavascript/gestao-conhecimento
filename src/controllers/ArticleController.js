import Article from '~/models/articleModel';

class ArticleController {
  async create(req, res) {
    const { article } = req.body;
    await Article.create(article, (err, art) => {
      if (err) return res.json(err);
      return res.json(art);
    });
  }

  async listAll(req, res) {
    await Article.find({}, (err, arts) => {
      if (err) return res.json(err);
      return res.json(arts);
    });
  }

  async listTags(req, res) {
    await Article.distinct('tags', (err, arts) => {
      if (err) return res.json(err);
      return res.json(arts);
    });
  }

  // TODO - Ajeita essa pesquisa para procurar por contem determinada tag
  // Local - http://localhost:5200/article/articlefortag/aqui fica a tag
  async listArticleForTag(req, res) {
    const { tag } = req.params;
    console.log(tag);
    await Article.where('tags')
      .regex(`/${tag}/`)
      .exec((err, result) => {
        if (err) return res.json(err);
        return res.json(result);
      });
  }
}

export default new ArticleController();
