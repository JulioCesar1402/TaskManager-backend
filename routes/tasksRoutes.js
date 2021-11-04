const router = require('express').Router();
const Controller = require('../controllers/tasks');

router.get('/', Controller.findAll);
router.get('/:id', Controller.findById);
router.post('/', Controller.create);
router.put('/:id', Controller.update);
router.delete('/:id', Controller.remove);

module.exports = router;