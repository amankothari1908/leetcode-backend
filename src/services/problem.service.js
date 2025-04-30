const { markDownSanitizer } = require("../utils");
class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // 1 sanitize the markdown from description
      problemData.description = markDownSanitizer(problemData.description);
      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
