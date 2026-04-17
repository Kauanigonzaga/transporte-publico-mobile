import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    
    fundo: {
    flex: 1,
    backgroundColor: '#3B82F6',
    padding: 10,
    },

  header: {
    backgroundColor: '#1E40AF',
    width: RFValue(80),
    marginBottom: 20,
    marginTop:50,
    borderRadius: 15,
    padding: 10,
  }, 

  botao: {
    fontSize: RFValue(12),
    color:'#E0F2FE',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  container: {
    padding: 15,
    gap: 15,
  },

  linha: {
    backgroundColor: "#e1e4f1",
    padding: 10,
    borderRadius: 15,
  },

  tituloLinha: {
    color: "#1E40AF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#cdd8ee",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nome: {
    fontWeight: "bold",
    fontSize: 16,

  },

  horarios: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    gap: 6,
  },

  hora: {
    backgroundColor: "#1E40AF",
    color: "#E0F2FE",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize:15,
    fontWeight: "bold",
  },
});

export default styles;