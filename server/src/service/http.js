const axios = require("axios");

const DESTINATION_URL = process.env.DESTINATION_URL || "http://api.deezer.com/";

const httpService = async (headers, method, uri, params = null) => {
  return axios({
    method,
    url: `${DESTINATION_URL}${uri}`,
    params,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
    },
  })
    .then((res) => {
      if (res && res.status)
        return {
          statusCode: res.status,
          headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS",
          },
          body: JSON.stringify(res.data),
        };
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS",
        },
        body: JSON.stringify({
          error: res.error.message || "Internal Server Error",
        }),
      };
    })
    .catch((err) => ({
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
      },
      body: JSON.stringify({ error: err.message || "Internal Server Error" }),
    }));
};

module.exports = { httpService };
