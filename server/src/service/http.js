const axios = require("axios");

const DESTINATION_URL = process.env.DESTINATION_URL || "http://api.deezer.com/";

const httpService = async (headers, method, uri, params = null) => {
  return axios({
    method,
    url: `${DESTINATION_URL}${uri}`,
    params,
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

module.exports = { httpService };
