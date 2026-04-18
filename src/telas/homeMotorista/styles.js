import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#E0F2FE',
        padding: 16,
    },

    header: {
        alignItems: "center",
        margin: 20,
        marginTop: 170,
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },

    nome: {
        color: "#0f172a",
        fontSize: 22,
        fontWeight: "bold",
    },

    linhaText: {
        marginTop: 6,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: "#2563eb",
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
        overflow: "hidden",
    },

    linhasContainer: {
        flexDirection: "row",
        gap: 8,
    },

    linhaButton: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 8,
    },

    linhaSelecionada: {
        borderWidth: 2,
        borderColor: "#000",
    },

    linhaButtonText: {
        color: "#000",
        fontWeight: "bold",
    },

    statusContainer: {
        marginBottom: 30,
        alignSelf: "center",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 16,
        elevation: 3,
        width: "100%",
    },

    statusText: {
        color: "#0f172a",
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center",
        fontWeight: "bold",
    },

    button: {
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },

    online: {
        backgroundColor: "#16a34a",
    },

    offline: {
        backgroundColor: "#dc2626",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },

    card: {
        backgroundColor: "#1e293b",
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
    },

    cardTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },

    cardText: {
        color: "#cbd5f5",
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    actionButton: {
        backgroundColor: "#2563eb",
        padding: 12,
        borderRadius: 10,
        width: "48%",
        alignItems: "center",
    },

    actionText: {
        color: "#fff",
        fontWeight: "bold",
    },

    listContainer: {
        flex: 1,
    },

    listItem: {
        backgroundColor: "#1e293b",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    listText: {
        color: "#fff",
    },

    aval: {
        width: "100%",
        marginTop: 10,
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 16,

        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },

    desemp: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 10,
        color: "#1e293b",
    },

    input: {
        width: "100%",
        height: 100,
        borderWidth: 1,
        borderColor: "#e2e8f0",
        borderRadius: 12,
        padding: 12,
        backgroundColor: "#f8fafc",
        textAlignVertical: "top",
    },

    botaoEnviar: {
        marginTop: 12,
        backgroundColor: "#2563eb",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },

    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
    },

    linha: {
        width: "40%",
        marginTop: 20,
        backgroundColor: "#E0F2FE",
        padding: 16,
        borderRadius: 16,
        elevation: 5,
        marginBottom: 50,
        alignSelf: "center",
    },

    infoCard: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 16,
        marginTop: 20,

        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },

    infoTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#0f172a",
    },

    infoItem: {
        marginBottom: 10,
    },

    infoLabel: {
        fontSize: 12,
        color: "#64748b",
    },

    infoValue: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#0f172a",
    },

    avaliacoesContainer: {
        marginTop: 20,
        width: "100%",
    },

    botaoAvaliacoes: {
        backgroundColor: "#0f172a",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },
});

export default styles;