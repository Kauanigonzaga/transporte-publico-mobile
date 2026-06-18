import { get } from './api';

function getPayload(response) {
  return response?.dados || response?.data || response || {};
}

export async function buscarMotorista(idMotorista) {
  const response = await get(`/motoristas/${idMotorista}`);
  const payload = getPayload(response);

  return payload.motorista || payload.usuario || payload;
}

export async function listarAvaliacoesMotorista(idMotorista) {
  const response = await get(`/avaliacao/${idMotorista}`);
  const payload = getPayload(response);

  if (Array.isArray(payload)) {
    return payload;
  }

  return payload.avaliacoes || payload.itens || [];
}

export async function buscarMediaAvaliacoes(idMotorista) {
  const response = await get(`/mediaAvaliacao/${idMotorista}`);
  const payload = getPayload(response);

  return {
    media:
      payload.media_avaliacao ??
      payload.media ??
      response?.media_avaliacao ??
      response?.media ??
      0,
    quantidade:
      payload.quantidade_avaliacoes ??
      payload.total_avaliacoes ??
      payload.quantidade ??
      payload.total ??
      payload.nItens ??
      response?.quantidade_avaliacoes ??
      response?.total_avaliacoes ??
      response?.quantidade ??
      response?.total ??
      response?.nItens ??
      0,
  };
}
