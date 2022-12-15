function errorRes(res, err, errMsg = "failed operation", statusCode = 500) {
  console.error("ERROR:", err);
  return res.status(statusCode).json({ success: false, error: errMsg });
}

function successRes(res, data, statusCode = 200) {
  return res.status(statusCode).json({ success: true, data });
}

function errData(res, errMsg = "failed operation", statusCode = 400) {
  return res.status(statusCode).json({ success: false, error: errMsg });
}

module.exports = { errorRes, successRes, errData };
