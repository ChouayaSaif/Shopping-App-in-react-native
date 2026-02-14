import { StyleSheet, View } from "react-native";
import { theme } from "../themes";
import { ShoppingListItem } from "../components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" isCompleted />
      <ShoppingListItem name="Milk" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  link: {
    fontSize: 16,
    color: '#1a759f',
    marginBottom: 16,
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: "#1a759f",
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  button: {
    marginTop: 8,
    padding: 8,
    backgroundColor: "#ef4444",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
