let items = [];
let idCounter = 1;

exports.create = (data) => {
  const item = { id: idCounter++, ...data };
  items.push(item);
  return item;
};

exports.getAll = (page = 1, limit = 10) => {
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    page,
    limit,
    totalItems: items.length,
    totalPages: Math.ceil(items.length / limit),
    data: items.slice(start, end)
  };
};

exports.getOne = (id) => {
  const item = items.find(i => i.id == id);
  if (!item) throw new Error('Item not found');
  return item;
};

exports.update = (id, data) => {
  const index = items.findIndex(i => i.id == id);
  if (index === -1) throw new Error('Item not found');

  items[index] = { ...items[index], ...data };
  return items[index];
};

exports.remove = (id) => {
  items = items.filter(i => i.id != id);
};
