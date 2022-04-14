const returnContorller = (res, status, data, message) => {
  res.send({
    status: status,
    data: data,
    message: message,
  });
};

module.exports = {
  returnContorller,
};
