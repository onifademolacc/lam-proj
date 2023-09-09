const service = require("./http");

const search = async (event) => {
  const { httpMethod, queryStringParameters, headers } = event;

  const { category, ...rest } = queryStringParameters;

  if (!category || !rest) {
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: "Bad Request" }),
    };
  }

  return await service.httpService(headers, httpMethod, `/search/${category}`, {
    ...rest,
  });
};

const pathSearch = async (event) => {
  const { path, headers, httpMethod } = event;

  if (!path) {
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: "Bad Request" }),
    };
  }

  return await service.httpService(headers, httpMethod, path);
};

const parameterizedSearch = async (event) => {
  const { path, headers, httpMethod, queryStringParameters } = event;

  if (!path || !queryStringParameters) {
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: "Bad Request" }),
    };
  }

  return await service.httpService(
    headers,
    httpMethod,
    path,
    queryStringParameters
  );
};

module.exports = { search, pathSearch, parameterizedSearch };
