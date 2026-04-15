import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B82F6',
    padding: 16,
  },

  botao:{
    backgroundColor: '#1E40AF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 20,
    borderRadius: 8,
  },

  tituloBotao:{
    fontSize: RFValue(15),
    color:'#E0F2FE',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  titulo: {
    fontSize: 24,
    color:  '#E0F2FE',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  card: {
    backgroundColor:'#E0F2FE',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  nomeLinha: {
    fontSize: 18,
    color:  '#1E40AF',
    fontWeight: 'bold',
    marginBottom: 8
  },

  descricao: {
    fontSize: 14,
    color:  '#1E40AF',
    marginBottom: 10
  },

  subtitulo: {
    fontSize: 16,
    color:  '#1E40AF',
    fontWeight: 'bold',
    marginBottom: 5
  },

  ponto: {
    fontSize: 14,
    color:  '#1E40AF',
    marginLeft: 5
  }
});