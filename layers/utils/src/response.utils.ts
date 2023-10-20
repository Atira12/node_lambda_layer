import { APIGatewayProxyResult } from "aws-lambda";

export const responseHandler = (
  status: number,
  body: object | string,
): APIGatewayProxyResult => {
  return {
    statusCode: status,
    body: typeof body == "object" ? JSON.stringify(body) : body,
  };
};
