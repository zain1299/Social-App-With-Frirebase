import {StyleSheet, Text, View} from 'react-native';
import {FormButton} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WellCome</Text>
      <FormButton buttonTitle={'Logout'} onPress={() => {}} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
