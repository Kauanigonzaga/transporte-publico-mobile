import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alingnItems: 'center',
        justifyContent: 'center',
        borderRadius: RFPercentage(20),
        justifyContent: 'center',
        border: RFPercentage(10),
        borderRadius: RFPercentage(10),
    },

    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        marginBottom: 10,
        borderRadius: RFPercentage(20),
        textAlign: 'center',
        color: '#E0F2FE',
    },

    botao:{
        backgroundColor: '#1E40AF',
        borderRadius: RFPercentage(30),
        width: '55%', 
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: RFPercentage(2),
        borderRadius: RFPercentage(20),
        justifyContent: 'center',
        border: RFPercentage(10),
        borderRadius: RFPercentage(10),
    },
    
    fundo: {
        position: 'absolute',  
    }, 

    menuSuperior: {
    backgroundColor: '#1E40AF',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 30, 
    gap: 50, 
    }, 

    tituloMenuSuperior: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        color: '#E0F2FE',
        
    },


});


export default styles;