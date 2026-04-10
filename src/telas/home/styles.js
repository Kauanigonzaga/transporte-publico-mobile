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
        marginBottom: 20,
        borderRadius: RFPercentage(15),
        width: '65%',
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
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: RFPercentage(15),
        flex: 1,
    },

    menuInferior: {
        // flex: 1,
        backgroundColor: '#1E40AF',
        justifyContent: 'center',
        alignItems: 'left',        
        height: RFPercentage(6),
        marginTop: RFPercentage(20),
        width: '100%',
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