const isValid = (params) => {
  if (!params || params.length < 5) {
    return {
      err: {
        message: 'all parameters must be filled', code: 'invalid_data',
      },
    };
  }

  return null;
};

module.exports = {
  isValid,
};
