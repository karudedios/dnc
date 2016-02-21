import safeFunction from './safeFunction';
import HttpStatusModel from '../utils/httpStatusModel';

export default function promisedCallback(object, property, ...query) {
  return new Promise((resolve, reject) => {
    return object[property](...query, safeFunction(reject, resolve));
  }).catch(err => {
    console.log(err);
    return new HttpStatusModel(500, "Something went wrong") });
};
