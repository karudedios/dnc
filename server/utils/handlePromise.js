export default function handlePromise(req, res, promise) {
  return promise
    .then(res.json.bind(res))
    .catch(fail => fail.buildResponse(res));
};
