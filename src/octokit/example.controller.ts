import { ExampleService } from "@layers/services/src/example.service";
import { createOctokitClient } from "@layers/utils/src/octokit.utils";
import { responseHandler } from "@layers/utils/src/response.utils";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const { queryStringParameters } = event;
  if (!queryStringParameters) {
    return responseHandler(400, "Invalid Response");
  }

  const { repoName, owner } = queryStringParameters;
  if (!repoName || !owner) {
    return responseHandler(400, "Invalid Response");
  }

  const octokit = createOctokitClient();
  const result = await ExampleService(octokit).getRepositoryInformation(
    repoName,
    owner,
  );
  return responseHandler(200, result);
};
