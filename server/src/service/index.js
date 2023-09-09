const axios = require("axios");

const DESTINATION_URL = process.env.DESTINATION_URL || "http://api.deezer.com/";

const searchAlbum = async (event) => {
  const { httpMethod, queryStringParameters, headers, path } = event;

  const destinationPath = path.replace("/api/", "").trim();

  const queryBuilder = () => {
    const params =
      queryStringParameters &&
      Object.entries(queryStringParameters).length &&
      Object.entries(queryStringParameters);
    if (params)
      return `${DESTINATION_URL}${
        destinationPath === "/api" ? "" : destinationPath
      }?${params[0][0]}=${params[0][1]}`;
    return `${DESTINATION_URL}${
      destinationPath === "/api" ? "" : destinationPath
    }`;
  };

  if (!destinationPath) {
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: "Bad Request" }),
    };
  }

  return await axios({
    method: httpMethod,
    url: queryBuilder(),
  })
    .then((res) => {
      if (res && res.status)
        return {
          statusCode: res.status,
          headers,
          body: JSON.stringify(res.data),
        };
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: res.error.message || "Internal Server Error",
        }),
      };
    })
    .catch((err) => ({
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || "Internal Server Error" }),
    }));
};

module.exports = { searchAlbum };
