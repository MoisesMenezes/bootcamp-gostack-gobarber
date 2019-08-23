import User from '../models/User';

class UserController {
  async store(req, res) {
    const emailExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (emailExists) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

export default new UserController();
