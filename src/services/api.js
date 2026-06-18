import { Platform } from 'react-native';

export const API_URL =
  process.env.EXPO_PUBLIC_API_URL ||
  (Platform.OS === 'web'
    ? 'http://localhost:3333'
    : 'http://10.0.2.2:3333');

async function request(path, options = {}) {
  const { authToken, headers, ...requestOptions } = options;
  const requestHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };

  if (authToken) {
    requestHeaders.Authorization = `Bearer ${authToken}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...requestOptions,
    headers: requestHeaders,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || data?.sucesso === false) {
    throw new Error(data?.mensagem || 'Nao foi possivel acessar o servidor.');
  }

  return data;
}

export function get(path, options) {
  return request(path, options);
}

export function post(path, body, options) {
  return request(path, {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  });
}

export function put(path, body, options) {
  return request(path, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(body),
  });
}

export function patch(path, body, options) {
  return request(path, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(body),
  });
}

export function del(path, options) {
  return request(path, {
    ...options,
    method: 'DELETE',
  });
}

export function getAssetUrl(path) {
  if (!path) {
    return null;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${API_URL}/${String(path).replace(/^\/+/, '')}`;
}
