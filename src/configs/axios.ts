import Axios from 'axios';
import Cookies from 'js-cookie';
import configs from './envConfig';
import { history, queryClient } from 'Providers';
import paths from './paths';

const request = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.API_DOMAIN,
});

export const logout = () => {
  Cookies.remove('token');
  Cookies.remove('refreshToken');
  queryClient.clear();
  history.push(paths.AUTH.SIGN_IN);
};

request.interceptors.request.use(
  (config: any) => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error),
);

request.interceptors.response.use(
  (response: any) => response.data,
  (error: any) => {
    const originalConfig = error.config;
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
      // logout();
      return Promise.reject(error);
    }
    return Axios.post(`${configs.API_DOMAIN}/v1/app/auth/request-access-token`, {
      refreshToken,
    })
      .then((res: any) => {
        if (res.status === 200) {
          const data = res.data;
          Cookies.set('token', data.token);
          originalConfig.headers.Authorization = `Bearer ${data.token}`;
          return Axios(originalConfig);
        } else {
          // logout();
          return Promise.reject(error);
        }
      })
      .catch(() => {
        // logout();
        return Promise.reject(error);
      });
  },
);
export default request;
