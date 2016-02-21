export default class HttpStatusModel {
  constructor(statusCode, message) {
    Object.assign(this, { statusCode, message });
  }

  buildResponse(res) {
    console.log('Failed bullshit');
    return res.send(this.statusCode, this.message);
  }
};
