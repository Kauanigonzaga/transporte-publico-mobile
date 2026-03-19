import { Pressable, Text } from 'react-native';

import styles from './styles.js';

export default function Botao({ children }) {
    return (
        <Pressable
            styles={
                ({ pressed }) => pressed ?
                    [styles.botao, styles.btnPress]
                    :
                    styles.botao
            }
            onPress={() => {}}
        >
            <Text styles={styles.txtBotao}>{children}</Text>
        </Pressable>
    );
}