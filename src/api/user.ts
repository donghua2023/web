import { http } from "@/utils/http/index";

export const login = (data: any) => {
  return http.request("post", "/authApi/authorize?tenant=tec", {}, data);
};
