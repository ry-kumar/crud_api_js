const { z } = require('zod');

const createItemSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    category: z.string().min(1, 'Category is required'),
    price: z.number().positive('Price must be a positive number'),
    inStock: z.boolean()
});

module.exports = { createItemSchema };
