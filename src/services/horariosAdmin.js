import { del, get, post, put } from './api';

function getPayload(response) {
  return response?.dados || response?.data || response || {};
}

function getList(payload, key) {
  if (Array.isArray(payload)) {
    return payload;
  }

  return payload?.[key] || payload?.itens || [];
}

export async function listarPontosDaRota(idRota) {
  const response = await get(`/rotas/${idRota}/pontos`);
  const payload = getPayload(response);

  return getList(payload, 'pontos');
}

export async function listarHorariosDoPonto(idPonto) {
  const response = await get(`/pontos/${idPonto}/horarios`);
  const payload = getPayload(response);

  return getList(payload, 'horarios');
}

export async function criarHorario({ token, idPonto, hora }) {
  return post(
    '/horarios',
    {
      id_ponto: idPonto,
      passagem_horarios: hora,
    },
    { authToken: token },
  );
}

export async function atualizarHorario({ token, idHorario, idPonto, hora }) {
  return put(
    `/horarios/${idHorario}`,
    {
      id_ponto: idPonto,
      passagem_horarios: hora,
    },
    { authToken: token },
  );
}

export async function excluirHorario({ token, idHorario }) {
  return del(`/horarios/${idHorario}`, { authToken: token });
}
