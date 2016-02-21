export default function safeFunction(fail, body) {
  return (err, ...args) => {
    return err
      ? fail(err)
      : body && body(...args);
  }
}