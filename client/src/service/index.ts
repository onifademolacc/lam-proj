import axios from "axios";
import { HttpMethod } from "types";

const baseUri = process.env.API_URL;

const TOKEN = "";

const apiCall = async (method: HttpMethod, uri: string, data = null) => {
  return axios({
    method,
    url: `${baseUri}/${uri}`,
    data,
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": TOKEN,
    },
  })
    .then((res) => res)
    .catch((err) => err);
};

export const HttpGet = async (uri: string) =>
  apiCall(HttpMethod.GET, uri, null);

export const HttpPost = async (uri: string, data: any) =>
  apiCall(HttpMethod.POST, uri, data);

export const HttpPut = async (uri: string, data: any) =>
  apiCall(HttpMethod.PUT, uri, data);

export const HttpPatch = async (uri: string, data: any) =>
  apiCall(HttpMethod.PATCH, uri, data);

export const HttpDelete = async (uri: string) =>
  apiCall(HttpMethod.DELETE, uri, null);
