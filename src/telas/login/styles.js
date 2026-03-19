import { StyleSheet } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#E0F2FE', 
            alignItems: 'baseline', 
            padding: RFPercentage(1),
            maxHeight: RFPercentage(8),

        }, 
        titulo: {
            fontSize: RFPercentage(4), 
            fontWeight: 'bold', 
            color: '#777',
            marginTop: '10px',
        },  
        
        txt: {
            fontSize: RFPercentage(2.5), 
        },
    }
);  

export default styles;