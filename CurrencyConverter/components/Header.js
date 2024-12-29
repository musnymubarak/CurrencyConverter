import { View, StyleSheet } from 'react-native';
import { PaperProvider, Text, Divider } from 'react-native-paper';

export default function Header() {
    return (
        <PaperProvider>
        <View style={styles.container}>
            <Text variant="displayMedium" style={styles.header}>CURRENCY CONVERTER</Text>
            <Divider />
        </View>    
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ADD8E6', 
        paddingVertical: 20,       
        paddingHorizontal: 10,   
        alignItems: 'center',     
      },
      headerText: {
        color: '#000',             
        textAlign: 'center',       
        fontWeight: 'bold',       
      },
});