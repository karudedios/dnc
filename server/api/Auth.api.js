import { Router } from 'express';
import service from '../services/Auth.service';
import safeFunction from '../utils/safeFunction';
import handlePromise from '../utils/handlePromise';
import HttpStatusModel from '../utils/httpStatusModel';

import passport from 'passport';
import passportLocal from 'passport-local';

passport.use(new passportLocal.Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (email, password, done) => {
  const success = done.bind(null, null);
  const failure = done.bind(null, null, false);
  return service.signIn(email, password).then(success).catch(failure);
}));

export default new Router()
  .post('/login', (req, res, next) => {
    const boundSafeFunction = safeFunction.bind(null, next);

    passport.authenticate('local', boundSafeFunction((user, info) => {
      if (!user) {
        return res.send(info.statusCode || 500, info.message);
      }

      req.logIn(user, boundSafeFunction(res.json.bind(res, user)));
    }))(req, res, next);
  })

  .post('/signup', (req, res, next) =>
    (req.user
      ? Promise.reject(new HttpStatusModel(400, "User already loged in"))
      : service.signUp(req.body))
        .then(user => res.json(user))
        .catch(err => err.buildResponse(res)))

  .post('/logout', (req, res, next) => {
    req.logout();
    res.json({ message: "logged out" });
  });
