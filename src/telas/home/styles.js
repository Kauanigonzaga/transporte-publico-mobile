import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alingnItems: 'center',
        justifyContent: 'center',
       borderRadius: RFValue(20),
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 100,
        borderRadius: RFValue(20),
        textAlign: 'center',
    },
    botao:{
        backgroundColor: '#1d2881',
        marginBottom: 10,
        textAlign: 'center',
        fontSize: RFValue(30),
    },

});


export default styles;