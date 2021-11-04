const { isValid } = require('../validation/tasksValidation');
const Models = require('../models/tasks');

const findAll = async () => {
  const response = await Models.findAll();

  return response;
};

const findById = async (id) => {
  const response = await Models.findById(id);
  if (!response) {
    return {
      err: {
        message: 'Wrong id format', code: 'invalid_data',
      },
    };
  }
  return response;
};

const create = async (title, status, description) => {
  const isTitle = isValid(title);
  const isStatus = isValid(status);
  const isDescription = isValid(description);
  const response = await Models.findByName(title);

  if (isTitle) return isTitle;
  if (isStatus) return isStatus;
  if (isDescription) return isDescription;
  if (response) {
    return {
      err: {
        message: 'status already exists', code: 'invalid_data',
      },
    };
  }

  const createProduct = await Models.create(title, status, description);
  return createProduct;
};

const update = async (id, title, status, description) => {
  const isTitle = isValid(title);
  const isStatus = isValid(status);
  const isDescription = isValid(description);

  if (isTitle) return isTitle;
  if (isStatus) return isStatus;
  if (isDescription) return isDescription;

  const response = await Models.findById(id);
  if (!response) {
    return {
      err: {
        message: 'Wrong id format', code: 'invalid_data',
      },
    };
  }

  const updateProduct = await Models.update(id, title, status, description);
  return updateProduct;
};

const remove = async (id) => {
  const response = await Models.remove(id);
  if (!response) {
    return {
      err: {
        message: 'Wrong id format', code: 'invalid_data',
      },
    };
  }
  return response;
};

module.exports = {
  findById,
  findAll,
  create,
  update,
  remove,
};