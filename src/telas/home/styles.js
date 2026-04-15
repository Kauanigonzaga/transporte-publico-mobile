import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({

    titulo: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        marginBottom: 10,
        borderRadius: RFPercentage(20),
        textAlign: 'center',
        color: '#E0F2FE',
    },

    botao: {
        backgroundColor: '#1E40AF',
        marginVertical: 10, // melhor que marginBottom
        borderRadius: RFPercentage(50),
        width: '70%'
        
    },

    fundo: {
        flex: 1,
        justifyContent: 'center',
    },

    menuSuperior: {
        backgroundColor: '#1E40AF',
        justifyContent: 'center',
        alignItems: 'left',
        height: RFPercentage(6),

    },

    tituloMenuSuperior: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        color: '#E0F2FE',
        paddingLeft: RFPercentage(2),

    },
    containerSuperior: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuInferior: {
        // flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: RFPercentage(6),
        backgroundColor: '#1E40AF',
        justifyContent: 'center',
        alignItems: 'flex-end', 
    },

    btnInferior: {
        // width: '50%',
    },

    tituloMenuInferior: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
        color: '#E0F2FE',
        textAlign: 'right',
        paddingRight: RFPercentage(2),
    },



});


export default styles;