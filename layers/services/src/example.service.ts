import { Octokit } from "octokit";

export const ExampleService = (client: Octokit) => ({
  getRepositoryInformation: async (repoName: string, owner: string) => {
    return client.rest.repos.get({
      owner,
      repo: repoName,
    });
  },
});
