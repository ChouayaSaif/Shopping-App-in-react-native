import { TouchableOpacity, View, Alert, StyleSheet, Text } from "react-native";
import { theme } from "../themes";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  name: string;
  isComplete?: boolean;
};

export function ShoppingListItem({ name, isComplete }: Props) {
  const handleDelete = (name: string) => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting."),
          style: "destructive",
        },
        { text: "Cancel", style: "cancel" },
      ],
    );
  };

  return (
    <View style={[styles.itemContainer, isComplete ? styles.completedContainer : undefined]}>
      <Text style={styles.itemText}>{name}</Text>
      <TouchableOpacity
        onPress={() => handleDelete(name)}
        style={styles.button}
        activeOpacity={0.8}
      >
        <AntDesign name="close" size={24} color={isComplete ? theme.colorRed : theme.colorWhite} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedContainer: {
    backgroundColor: theme.colorCerulean,
    borderBottomColor: theme.colorCerulean,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
