

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E40AF',
  },

  /* HEADER */
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  botaoVoltar: {
    backgroundColor: '#3B82F6',
    padding: 7,
    borderRadius: 8,
    marginRight: 8,
  },

  textoVoltar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  titulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* CARD */
  card: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  /* TOPO */
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#3B82F6',
  },

  info: {
    marginLeft: 15,
    flex: 1,
  },

  infoBox: {
    backgroundColor: '#E0F2FE',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  label: {
    fontSize: 12,
    color: '#555',
  },

  valor: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111827',
  },

  estrelas:{
    color: '#3B82F6',
    backgroundColor: '#E0F2FE',
    width: 110,
    height: 40,
    padding: 10,
    borderRadius: 10
  },

  /* TEXTO */
    avaliacaoText: {
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },

  /* INPUT */
  input: {
    height: 100,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 15,
  },

  /* BOTÕES */
  botaoEnviar: {
  backgroundColor: '#1E40AF',
  padding: 14,
  borderRadius: 12,
  alignItems: 'center',
  marginBottom: 10,
  elevation: 3, // sombra Android
},

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  botaoVer: {
    backgroundColor: '#E0F2FE',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  textoVer: {
    color: '#1E40AF',
    fontWeight: 'bold',
  },
});

export default styles;