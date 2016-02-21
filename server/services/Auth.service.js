import Querier from 'querier.js';
import UserService from './User.service';
import HttpStatusModel from '../utils/httpStatusModel';

const somefancyEncryption = (p) => p;

export default class AuthService {
  static signIn(email, password) {
    return UserService
      .single({ email })
      .where([
        ( ) => new HttpStatusModel(400, "Invalid password provided"),
        (u) => u.password === somefancyEncryption(password)
      ]);
  }

  static signUp(signUpModel) {
    return UserService
      .single({ email: signUpModel.email })
      .then(() =>
        new HttpStatusModel(400, "User already exists"))
      .catch(() => {
        console.log("Will sign up!");

        const password = somefancyEncryption(signUpModel.password);
        const securedModel = Object.assign({}, signUpModel, { password });

        return UserService.save(securedModel);
      });
  }
};
