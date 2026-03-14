// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export const API_ENDPOINTS = {
  BASE: `${API_BASE_URL}/api/v1`,
  USER: `${API_BASE_URL}/api/v1/user`,
  BLOG: `${API_BASE_URL}/api/v1/blog`,
  COMMENT: `${API_BASE_URL}/api/v1/comment`,
};
