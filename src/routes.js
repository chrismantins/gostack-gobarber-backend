import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Christian2',
    email: 'christian2@teste.com.br',
    password_hash: '123812371231',
  });

  return res.json(user);
});

export default routes;
