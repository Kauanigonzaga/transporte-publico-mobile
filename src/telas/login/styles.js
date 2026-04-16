import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B82F6',
  },

  voltarBox: {
    position: 'absolute',
    top: RFPercentage(6),
    left: RFPercentage(2),
    backgroundColor: 'white',
    paddingHorizontal: RFPercentage(2),
    paddingVertical: RFPercentage(1),
    borderRadius: RFPercentage(2),
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  voltarTexto: {
    color: '#1E40AF',
    fontSize: RFPercentage(2.2),
    fontWeight: 'bold',
  },

  centerArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFPercentage(2),
  },

  titulo: {
    fontSize: RFPercentage(4),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: RFPercentage(3),
  },

  form: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: RFPercentage(2),
    padding: RFPercentage(2),
  },

  input: {
    fontSize: RFPercentage(2.2),
    backgroundColor: '#eef2f7',
    borderRadius: RFPercentage(1),
    padding: RFPercentage(1.5),
    marginBottom: RFPercentage(2),
  },

  botao: {
    backgroundColor: '#1E40AF',
    padding: RFPercentage(1.8),
    borderRadius: RFPercentage(1.5),
    alignItems: 'center',
    marginTop: RFPercentage(2),
  },

  botaoTexto: {
    fontSize: RFPercentage(2.3),
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;