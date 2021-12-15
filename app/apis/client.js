import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";
const apiClient = create({
  baseURL: "http://192.168.43.241:9000/api",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  console.log(url);
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    console.log("cached");
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

apiClient.addAsyncRequestTransform(async (request) => {
  const token = await authStorage.getToken();
  if (!token) return;

  request.headers["x-auth-token"] = token;
});

export default apiClient;
