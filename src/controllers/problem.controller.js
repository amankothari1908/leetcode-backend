const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is live" });
}

function addProblem(req, res, next) {
  try {
    // not implemeneted
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  try {
    // not implemeneted
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res) {
  try {
    // not implemeneted
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res) {
  try {
    // not implemeneted
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {
  try {
    // not implemeneted
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
