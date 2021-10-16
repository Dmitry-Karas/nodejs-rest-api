const sendSuccessRes = (res, data = null, status = 200) =>
  res
    .status(status)
    .json({ status: "success", code: status, ...(data ?? data) });

module.exports = sendSuccessRes;
