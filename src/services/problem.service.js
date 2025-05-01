const { markDownSanitizer } = require("../utils");
class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // 1 sanitize the markdown from description
    problemData.description = markDownSanitizer(problemData.description);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemId) {
    const problem = await this.problemRepository.getProblem(problemId);
    return problem;
  }

  async deleteProblem(problemId) {
    const problem = await this.problemRepository.deleteProblem(problemId);
    return problem;
  }

  async updateProblem(id, updateData) {
    const updatedData = await this.problemRepository.updateProblem(
      id,
      updateData
    );
    return updatedData;
  }
}

module.exports = ProblemService;
