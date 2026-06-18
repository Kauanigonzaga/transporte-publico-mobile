import { get } from './api';

function getPayload(response) {
  return response?.dados || response?.data || response || {};
}

function getList(payload, key) {
  if (Array.isArray(payload)) {
    return payload;
  }

  return payload?.[key] || payload?.itens || [];
}

export async function listarRotas() {
  const response = await get('/rotas');
  const payload = getPayload(response);

  return getList(payload, 'rotas');
}

export async function buscarDetalhesRota(idRota) {
  const response = await get(`/rotas/${idRota}/detalhes`);
  const payload = getPayload(response);
  const rota = payload?.rota || payload || {};

  return {
    ...rota,
    id_rota: rota.id_rota || payload.id_rota || idRota,
    nome_rota:
      rota.nome_rota ||
      rota.nome_linhas ||
      payload.nome_rota ||
      payload.nome_linhas ||
      '',
    cor_rota: rota.cor_rota || rota.corRota || payload.cor_rota || payload.corRota || '',
    sentido: rota.sentido || payload.sentido || '',
    proxima_saida:
      rota.proxima_saida ||
      rota.proximaSaida ||
      payload.proxima_saida ||
      payload.proximaSaida ||
      '',
    mapa_url:
      rota.mapa_url ||
      rota.mapaUrl ||
      rota.mapa ||
      payload.mapa_url ||
      payload.mapaUrl ||
      payload.mapa ||
      '',
    pontos: payload.pontos || rota.pontos || [],
    horarios: payload.horarios || rota.horarios || [],
    motoristas: payload.motoristas || rota.motoristas || [],
  };
}
