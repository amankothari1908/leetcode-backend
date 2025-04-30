const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is live" });
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new Problem",
      error: {},
      data: newProblem,
    });
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
