const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface ApiError {
  message: string;
  status?: number;
  data?: unknown;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export class ApiException extends Error {
  status?: number;
  data?: unknown;

  constructor(message: string, status?: number, data?: unknown) {
    super(message);
    this.name = 'ApiException';
    this.status = status;
    this.data = data;
  }
}

const getHeaders = (customHeaders?: HeadersInit): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  return headers;
};

const handleResponse = async <T>(response: Response): Promise<ApiResponse<T>> => {
  if (!response.ok) {
    let errorMessage = `HTTP error! status: ${response.status}`;
    let errorData: unknown;

    try {
      errorData = await response.json();
      if (errorData && typeof errorData === 'object' && 'message' in errorData) {
        errorMessage = (errorData as { message: string }).message;
      }
    } catch {
      try {
        errorMessage = await response.text();
      } catch {
      }
    }

    throw new ApiException(errorMessage, response.status, errorData);
  }

  const data = await response.json();
  return {
    data,
    status: response.status,
    statusText: response.statusText,
  };
};

export const get = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: getHeaders(options?.headers),
    ...options,
  });

  return handleResponse<T>(response);
};

export const post = async <T>(
  endpoint: string,
  body?: unknown,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: getHeaders(options?.headers),
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  return handleResponse<T>(response);
};

export const put = async <T>(
  endpoint: string,
  body?: unknown,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: getHeaders(options?.headers),
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  return handleResponse<T>(response);
};

export const patch = async <T>(
  endpoint: string,
  body?: unknown,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    method: 'PATCH',
    headers: getHeaders(options?.headers),
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  return handleResponse<T>(response);
};

export const del = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: getHeaders(options?.headers),
    ...options,
  });

  return handleResponse<T>(response);
};

export const uploadFile = async <T>(
  endpoint: string,
  file: File | FormData,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  const formData = file instanceof FormData ? file : (() => {
    const fd = new FormData();
    fd.append('file', file);
    return fd;
  })();

  const headers: HeadersInit = {};

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: formData,
    ...options,
  });

  return handleResponse<T>(response);
};

