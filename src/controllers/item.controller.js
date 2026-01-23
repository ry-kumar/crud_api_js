const service = require('../services/item.service');
const { createItemSchema } = require('../validators/item.schema');


exports.create = (req, res, next) => {
  try {
    const validatedData = createItemSchema.parse(req.body);
    const item = service.create(validatedData);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};





exports.getAll = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const result = service.getAll(page, limit);
  res.json(result);
};


exports.getOne = (req, res, next) => {
  try {
    const item = service.getOne(req.params.id);
    res.json(item);

  } catch (err) {
    next(err);
  }
};

exports.update = (req, res, next) => {
  try {
    const item = service.update(req.params.id, req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.remove = (req, res) => {
  service.remove(req.params.id);
  res.json({ message: 'Deleted successfully' });
};
