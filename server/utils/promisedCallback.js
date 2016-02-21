import safeFunction from './safeFunction';
import { compose } from 'functional-programming-utilities';

export default function promisedCallback(object, property, ...query) {
  return new Promise((resolve, reject) => {
    return object[property](...query,   safeFunction(reject, resolve));
  }).catch(err => { console.log(err); return [500, "Something went wrong"] });
}
