const Services = require('../services/tasks');

const findAll = async (_req, res) => {
  const tasks = await Services.findAll();
  return res.status(200).json({ tasks });
};

const findById = async (req, res) => {
  const { id } = req.params;
  const tasks = await Services.findById(id);
  if (tasks.err) {
    return res.status(422).json(tasks);
  }
  return res.status(200).json(tasks);
};

const create = async (req, res) => {
  const { title, status, description } = req.body;

  const isValidToCreate = await Services.create(title, status, description);

  if (isValidToCreate.err) {
    return res.status(422).json(isValidToCreate);
  }

  return res.status(201).json(isValidToCreate);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, status, description } = req.body;
  const isValidToUpdate = await Services.update(id, title, status, description);

  if (isValidToUpdate.err) {
    return res.status(422).json(isValidToUpdate);
  }

  return res.status(200).json(isValidToUpdate);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const tasks = await Services.remove(id);
  if (tasks.err) {
    return res.status(422).json(tasks);
  }
  return res.status(200).json(tasks);
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
