import { get, post } from './api';

function getPayload(response) {
  return response?.dados || response?.data || response || {};
}

export async function buscarMotorista(idMotorista) {
  const response = await get(`/motoristas/${idMotorista}`);
  const payload = getPayload(response);

  return payload.motorista || payload.usuario || payload;
}

export async function listarRotasMotorista(idMotorista) {
  const response = await get(`/motoristas/${idMotorista}/rotas`);
  const payload = getPayload(response);

  if (Array.isArray(payload)) {
    return payload;
  }

  return payload.rotas || payload.itens || [];
}

export async function buscarResumoAvaliacoesMotorista(idMotorista) {
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
      payload.quantidade ??
      payload.total ??
      response?.quantidade_avaliacoes ??
      response?.quantidade ??
      response?.total ??
      0,
  };
}

export async function enviarAvaliacaoMotorista({
  id_motorista,
  nota_avaliacao,
  comentario_avaliacao,
}) {
  return post('/avaliacao', {
    id_motorista,
    nota_avaliacao,
    comentario_avaliacao,
  });
}
