import UserModel from '~/models/userModel';

class UserController {
  async create(req, res) {
    const { user } = req.body;
    await UserModel.create(user, (err, usr) => {
      if (err) return res.json(err);
      res.json(usr);
    });
  }

  async listAll(req, res) {
    await UserModel.find({}, (err, users) => {
      if (err) return res.json(err);
      return res.json(users);
    });
  }
}

export default new UserController();
