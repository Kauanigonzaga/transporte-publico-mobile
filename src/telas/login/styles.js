import { StyleSheet } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#E0F2FE', 
            alignItems: 'baseline', 
            padding: RFPercentage(1),
            height:'100%',
        }, 
        titulo: {
            fontSize: RFPercentage(4), 
            fontWeight: 'bold', 
            color: '#777',
            marginTop: RFPercentage(1),
            width: '100%',
            textAlign: 'center'
        },  
        
        input: {
            fontSize: RFPercentage(2.5), 
            marginTop: RFPercentage(4)
        },

        botaoTexto: {
            fontSize: RFPercentage(2.5),
            paddingLeft: RFPercentage(2),
            paddingTop: RFPercentage(0.8),
            color: '#777',
            fontWeight: 'bold',
        },

        botao: {
            backgroundColor:'#00a2ff',
            marginTop: RFPercentage(5),
            marginLeft: RFPercentage(11.1),
            width: '52%',
            height: RFPercentage(5),
            borderRadius: RFPercentage(2),
        },
    }
);  

export default styles;