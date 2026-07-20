import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';
import { API_BASE_URL, API_TIMEOUT_MS } from './config';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT_MS,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(config => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    // No refresh-token endpoint has been wired up yet — for now a 401 just
    // drops the local session so the app falls back to the login screen.
    // Once a `/auth/refresh` endpoint exists, retry the original request
    // here after refreshing instead of clearing the session outright.
    if (error.response?.status === 401) {
      useAuthStore.getState().clearSession();
    }
    return Promise.reject(error);
  },
);
