import Querier from 'querier.js'
import Model from '../models/ContractorRequest';
import promisedCallback from '../utils/promisedCallback';

const boundPromisedCallback = promisedCallback.bind(null, Model);
const isTruthy = (val) => !!val;

export default class ContractorRequestService {
  static single(query) {
    return Querier
      .append({ as: 'model', from: boundPromisedCallback('findOne', query), where: [
        [() => [404, "ContractorRequest not found"], isTruthy]
      ]})
      .select(({ model }) => model)
  }

  static findById(_id) {
    return ContractorRequestService.single({ _id });
  }

  static getAll(query) {
    return ContractorRequestService.where({});
  }

  static where(query) {
    return Querier
      .append({ as: 'models', from: boundPromisedCallback('find', query), where: [
        [() => [404, "No ContractorRequests Found"], models => models.length > 0]
      ]})
      .select(({ models }) => models)
  }

  static save(model) {
    return Querier
      .append({ as: 'model', from: promisedCallback(new Model(model), 'save'), where: [
        [() => [500, "Could not create the ContractorRequest"], isTruthy]
      ]})
      .select(({ model }) => model)
  }

  static update(_id, updated) {
    return Querier
      .append({ as: 'model', from: boundPromisedCallback('findByIdAndUpdate', _id, updated, { multi: true }), where: [
        [() => [404, "No ContractorRequest with the ID specified"], isTruthy]
      ]})
      .select(({ model }) => model)
  }

  static delete(_id) {
    return Querier
      .append({ as: 'model', from: boundPromisedCallback('findByIdAndRemove', _id), where: [
        [() => [404, "Not ContractorRequest with the ID specified"], isTruthy]
      ]})
      .select(({ model }) => model)
  }
};
