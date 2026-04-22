import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E40AF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 20,
  },

  estrelas: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  ativa: {
    fontSize: 35,
    color: '#3B82F6',
    marginHorizontal: 5,
  },

  inativa: {
    fontSize: 35,
    color: '#ccc',
    marginHorizontal: 5,
  },

  input: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },

  botao: {
    width: '100%',
    backgroundColor: '#1E40AF',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  botaoSecundario: {
    width: '100%',
    backgroundColor: '#E0F2FE',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoSecundario: {
    color: '#1E40AF',
    fontWeight: 'bold',
  },

  voltar: {
    marginTop: 15,
    color: '#111827',
  },
  avaliacaoBox: {
  width: '100%',
  backgroundColor: '#E0F2FE',
  padding: 10,
  borderRadius: 10,
  marginBottom: 10,
},

texto: {
  color: '#111827',
},

data: {
  fontSize: 12,
  color: '#555',
  marginTop: 5,
},
});
export default styles;