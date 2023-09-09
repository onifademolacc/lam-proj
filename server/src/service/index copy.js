const axios = require("axios");

const DESTINATION_URL = process.env.DESTINATION_URL || "http://api.deezer.com/";
const PROXY_URL = process.env.PROXY_URL || "http://api.allorigins.win/raw?url=";

const fetchData = async (event) => {
  console.log("Received: ", event);
  const { httpMethod, queryStringParameters, headers, body, path } = event;

  // Define CORS headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  };

  // Do preflight CORS request
  if (httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
    };
  }

  const destinationPath = path.replace("/api/", "").trim();

  const queryBuilder = () => {
    const params =
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
      headers: corsHeaders,
      body: JSON.stringify({ error: "Bad Request" }),
    };
  }
  console.log("Testeee: ", queryBuilder());
  const rtp = await axios.get(queryBuilder());
  // const rtp = await axios.get(
  //   "http://api.allorigins.win/raw?url=http://api.deezer.com/search?q=eminem"
  // );
  console.log("DDDDDDDD: ", rtp);
  return {
    statusCode: rtp.status,
    headers: { ...corsHeaders },
    body: JSON.stringify(rtp.data),
  };
};

module.exports = { fetchData };
