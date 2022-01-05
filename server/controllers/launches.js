const { getAllLaunches } = require('../models/launch');

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

module.exports = {
  httpGetAllLaunches
}