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
    width: RFValue(80),
    marginBottom: 15,
    marginTop:30,
    borderRadius: 15,
    padding: 10,
  },

  tituloBotao:{
    fontSize: RFValue(12),
    color:'#E0F2FE',
    textAlign: 'center',
    fontWeight: 'bold'
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

  tituloPonto: {
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