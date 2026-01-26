const service = require('../services/item.service');
const { createItemSchema } = require('../validators/item.schema');

exports.create = async (req, res, next) => {
  try {
    const validatedData = createItemSchema.parse(req.body);
    const item = await service.create(validatedData);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const result = await service.getAll(page, limit);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const item = await service.getOne(req.params.id);
    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await service.update(req.params.id, req.body);
    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
