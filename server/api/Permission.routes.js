import { Router } from 'express';
import service from '../services/Permission.service';

const handlePromise = (req, res, promise) => promise
  .then(res.json.bind(res))
  .catch((f) => res.send(...f)); 

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
