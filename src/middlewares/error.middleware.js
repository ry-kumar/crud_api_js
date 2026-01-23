const { ZodError } = require('zod');

module.exports = (err, req, res, next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Validation failed',
      details: err.errors
    });
  }

  res.status(400).json({
    error: err.message || 'Something went wrong'
  });
};
