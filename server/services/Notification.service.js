import Querier from 'querier.js'
import Model from '../models/Notification';
import HttpStatusModel from '../utils/httpStatusModel';
import promisedCallback from '../utils/promisedCallback';

const boundPromisedCallback = promisedCallback.bind(null, Model);
const isTruthy = (val) => !!val;

export default class NotificationService {
  static single(query) {
    return Querier
      .append({ as: 'model', from: boundPromisedCallback('findOne', query), where: [
        [() => new HttpStatusModel(404, "Notification not found"), isTruthy]
      ]})
      .select(({ model }) => model)
  }

  static findById(_id) {
    return NotificationService.single({ _id });
  }

  static getAll(query) {
    return NotificationService.where({});
  }

  static where(query) {
    return Querier
      .append({ as: 'models', from: boundPromisedCallback('find', query), where: [
        [() => new HttpStatusModel(404, "Notifications not found"), models => models.length > 0]
      ]})
      .select(({ models }) => models)
  }

  static save(model) {
    return Querier
      .append({ as: 'model', from: promisedCallback(new Model(model), 'save'), where: [
        [() => new HttpStatusModel(500, "Could not create the Notification"), isTruthy]
      ]})
      .select(({ model }) => model)
  }

  static update(_id, updated) {
    return Querier
      .append({ as: 'model', from: boundPromisedCallback('findByIdAndUpdate', _id, updated, { multi: true }), where: [
        [() => new HttpStatusModel(404, "No Notification found with the ID specified"), isTruthy]
      ]})
      .select(({ model }) => model)
  }

  static delete(_id) {
    return Querier
      .append({ as: 'model', from: boundPromisedCallback('findByIdAndRemove', _id), where: [
        [() => new HttpStatusModel(404, "Not Notification found with the ID specified"), isTruthy]
      ]})
      .select(({ model }) => model)
  }
};
