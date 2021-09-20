import type { APIGatewayProxyHandler } from 'aws-lambda';

export const r = (statusCode: number, body: any) => ({
  statusCode,
  body: JSON.stringify(body),
});

export const main: APIGatewayProxyHandler = async (event) => {
  console.log(process.env.Foo);
  return r(200, { message: process.env.Foo });
};
