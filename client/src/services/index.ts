import axios from "axios";
import { HttpMethod } from "../types/index.d";

const baseUri =
  process.env.API_URL ||
  "https://544i4jhypb.execute-api.us-east-1.amazonaws.com/prod";

const TOKEN = "";

const apiCall = async (
  method: HttpMethod,
  uri: string,
  data = null,
  params = null
) => {
  return axios({
    method,
    url: `${baseUri}${uri}`,
    data,
    params,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const HttpGet = async (uri: string, params: any) =>
  apiCall(HttpMethod.GET, uri, null, params);

export const HttpPost = async (uri: string, data: any) =>
  apiCall(HttpMethod.POST, uri, data);

export const HttpPut = async (uri: string, data: any) =>
  apiCall(HttpMethod.PUT, uri, data);

export const HttpPatch = async (uri: string, data: any) =>
  apiCall(HttpMethod.PATCH, uri, data);

export const HttpDelete = async (uri: string) =>
  apiCall(HttpMethod.DELETE, uri, null);
