import Axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { RequestMethods } from "./type";

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
  // 请求超时时间
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
};

class httpAPI {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }
  /** 先创建axios实例 */
  private static axiosInstance: AxiosInstance = Axios.create(defaultConfig);

  /** 请求拦截 */
  private httpInterceptorsRequest() {
    httpAPI.axiosInstance.interceptors.request.use(
      /** 在发送请求之前做些什么 */
      async (config): Promise<any> => {
        return config;
      },

      /** 对请求错误做些什么 */
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  /** 响应拦截 */
  private httpInterceptorsResponse() {
    httpAPI.axiosInstance.interceptors.response.use(
      async (response): Promise<any> => {
        console.log(response);
      },
      (err) => {
        return Promise.reject(err);
      }
    );
  }

  /** 通用请求工具函数 */
  public request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    data?: AxiosRequestConfig,
    axiosConfig?: AxiosRequestConfig
  ): Promise<T> {
    const config = { method, url, ...param, ...axiosConfig, data } as AxiosRequestConfig;
    console.log(data, "axiosConfig");
    return new Promise((resolve, reject) => {
      httpAPI.axiosInstance
        .request(config)
        .then((res: undefined) => {
          console.log(res, "ressss");
          resolve(res);
        })
        .catch((err) => {
          console.log(err, "errrererer");
          reject(err);
        });
    });
  }

  /** 单独抽离的post工具函数 */

  /** 单独抽离的get工具函数 */
}

export const http = new httpAPI();
