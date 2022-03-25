import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from '../Config'

type requestMethod = "GET" | "POST" | "PUT" | "DELETE";

export const actionObject = (type: string, payload: any = null) => ({
  type,
  payload,
});

export const request = async (
  url: string,
  method: requestMethod = "GET",
  params: any = null
) => {

 
  const requestObject: AxiosRequestConfig = {
    url: `${config.API}${url}`,
    method,
    data: params,
  };

  const response: AxiosResponse = await axios(requestObject);

  return response;
};
