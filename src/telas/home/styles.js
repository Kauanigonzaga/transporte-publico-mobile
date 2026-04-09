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
        marginBottom: 15,
        borderRadius: RFPercentage(30),
        width: '55%', 
        marginLeft: RFPercentage(11),

    },
    fundo: {
        position: 'absolute',  
    }, 

    // menuSuperior: {
    // backgroundColor: '#384255',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // paddingHorizontal: 30, 
    // gap: 50, 
    // }


});


export default styles;