import { StyleSheet } from 'react-native'; 
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: RFPercentage(1), 
        alignItems: 'center', 
        gap: RFPercentage(1),
    }, 
});

export default styles;