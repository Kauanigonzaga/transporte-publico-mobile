export const API_URL =
  process.env.EXPO_PUBLIC_API_URL || 'http://10.67.23.43:3333';

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || data?.sucesso === false) {
    throw new Error(data?.mensagem || 'Nao foi possivel acessar o servidor.');
  }

  return data;
}

export function get(path) {
  return request(path);
}

export function post(path, body) {
  return request(path, {
    method: 'POST',
    body: JSON.stringify(body),
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
