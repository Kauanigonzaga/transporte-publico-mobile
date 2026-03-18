import { StyleSheet } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: RFPercentage(1), 
        alignItems: 'center', 
        gap: RFPercentage(1),
    }, 
    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold', 
        marginVertical: RFPercentage(2), 
    }, 
    botao: {
        borderWidth: RFPercentage(0.3), 
        padding: RFPercentage(1), 
        width: '60%', 
        alignItems: 'center', 
        borderRadius: RFPercentage(1),
    }, 
    txtBotao: {
        fontSize: RFPercentage(2),
    }
});

export default styles;