const NotFoundError = require("../errors/notFound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFoundError("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const response = await Problem.deleteOne({ _id: id });
      if (response.deletedCount == 0) {
        throw new NotFoundError("Problem", id);
      }
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(id, updateData) {
    try {
      const updatedData = await Problem.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!updatedData) {
        throw new NotFoundError("Problem", id);
      }
      return updatedData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
