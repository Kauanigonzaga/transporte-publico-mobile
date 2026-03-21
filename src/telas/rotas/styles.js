import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alingnItems: 'center',
        justifyContent: 'center',
       /*borderRadius: RFValue(20),
        justifyContent: 'center',*/
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        borderRadius: RFValue(20),
        textAlign: 'center'
    },
    botao:{
        backgroundColor: '#6f7de4',
        marginBottom: 10,
        textAlign: 'center',
        fontSize: RFValue(20),
    },

});


export default styles;