import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

const Index = () => {
  return (
      <View style={styles.container}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Link href="/scan" style={{ color: 'blue' }}>
          <Text>Go to page</Text>
        </Link>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

 export default Index;