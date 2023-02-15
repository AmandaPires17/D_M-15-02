import{ Text, View, StyleSheet} from 'react-native';
export default function header() {
    return (
        <View style={styles.header}>
        <Text style={styles.headerText}>lista de tarefas</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'gray',
        padding: 15,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
      },
      headerText: {
        color: 'purple',
        fontSize: 25,
      },
})