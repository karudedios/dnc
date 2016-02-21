import { Router } from 'express';
import handlePromise from '../utils/handlePromise';
import service from '../services/Permission.service';

export default Router()
  .get('/', (req, res) =>
    handlePromise(req, res, service.getAll()))

  .get('/:id', (req, res) =>
    handlePromise(req, res, service.findById(req.params.id)))

  .post('/', (req, res) =>
    handlePromise(req, res, service.save(req.body)))

  .put('/:id', (req, res) =>
    handlePromise(req, res, service.update(req.params.id, req.body))) 

  .delete('/:id', (req, res) =>
    handlePromise(req, res, service.delete(req.params.id)));
