const AppError = require('../utils/AppError');

let items = [];
let idCounter = 1;

exports.create = async (data) => {
  const item = { id: idCounter++, ...data };
  items.push(item);
  return item;
};

exports.getAll = async (page, limit) => {
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    page,
    limit,
    totalItems: items.length,
    totalPages: Math.ceil(items.length / limit),
    data: items.slice(start, end),
  };
};

exports.getOne = async (id) => {
  const item = items.find(i => i.id == id);
  if (!item) throw new AppError('Item not found', 404);
  return item;
};

exports.update = async (id, data) => {
  const index = items.findIndex(i => i.id == id);
  if (index === -1) throw new AppError('Item not found', 404);

  items[index] = { ...items[index], ...data };
  return items[index];
};

exports.remove = async (id) => {
  const index = items.findIndex(i => i.id == id);
  if (index === -1) throw new AppError('Item not found', 404);

  items.splice(index, 1);
};
