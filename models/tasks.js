const { ObjectId } = require('mongodb');
const connection = require('../connection/connection');

const create = async (title, status, description) => {
  const response = await connection()
    .then((db) => db.collection('tasks').insertOne({ title, status, description }));
  return { _id: response.insertedId, title, status, description };
};

const update = async (id, title, status, description) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  await connection()
    .then((db) => db.collection('tasks').updateOne(
        { _id: ObjectId(id) }, { $set: { title, status, description } },
      ));
  return { _id: id, title, status, description };
};

const findByName = async (title) => {
  const response = await connection()
    .then((db) => db.collection('tasks').findOne({ title }));
  return response;
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const response = await connection()
    .then((db) => db.collection('tasks').findOne(new ObjectId(id)));
  return response;
};

const findAll = async () => {
  const response = await connection()
    .then((db) => db.collection('tasks').find().toArray());
  return response;
};

const remove = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const response = await connection()
    .then((db) => db.collection('tasks').deleteOne({ _id: ObjectId(id) }));
  return response;
};

module.exports = {
  create,
  findByName,
  findById,
  findAll,
  update,
  remove,
};
