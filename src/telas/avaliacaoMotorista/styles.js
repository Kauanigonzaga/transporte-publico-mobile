import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5'
  },

  header: {
    backgroundColor: '#c7d6e2',
    padding: 15,
    alignItems: 'center'
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },

  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  },

  infoBox: {
    backgroundColor: '#c7d6e2',
    width: '90%',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5
  },

  infoText: {
    fontSize: 14,
    color: '#333'
  },

  avaliacaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: '#999'
  },

  avaliacaoText: {
    marginHorizontal: 10,
    color: '#333'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#c7d6e2',
    borderRadius: 8,
    paddingHorizontal: 10
  },

  input: {
    flex: 1,
    height: 40
  },

  botaoEnviar: {
    padding: 8
  },

  textoBotao: {
    fontSize: 18
  },

  botaoVer: {
    marginTop: 20,
    backgroundColor: '#cfcfcf',
    padding: 12,
    borderRadius: 6
  },

  textoVer: {
    color: '#333'
  }
});

export default styles;