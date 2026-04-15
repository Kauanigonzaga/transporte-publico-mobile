import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    
    fundo: {
        flex: 1,
        justifyContent: 'center',
    },
  header: {
    width: "100%",
    backgroundColor: "#1E40AF",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  titulo: {
    color: "#E0F2FE",
    fontSize: 22,
    fontWeight: "bold",
  },

  botao: {
    backgroundColor: "#3B82F6",
    color: "#E0F2FE",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontWeight: "bold",
  },

  container: {
    padding: 15,
    gap: 15,
  },

  linha: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 15,
  },

  tituloLinha: {
    color: "#1E40AF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#f9f9f9",
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
    fontSize: 12,
  },
});

export default styles;