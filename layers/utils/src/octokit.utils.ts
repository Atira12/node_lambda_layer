import { Octokit } from "octokit";

export const createOctokitClient = (): Octokit => {
  return new Octokit({});
};
