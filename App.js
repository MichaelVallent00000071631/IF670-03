import { StyleSheet, View, TextInput, Text } from "react-native";
import { useState } from "react";
import Counter from "./Counter";
import Profile from "./Profile";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Halo, {name || "Anonymous"}!</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your name here"
        onChangeText={(text) => setName(text)}
      />
      <Counter value={count} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
      <Profile name={name} age={count} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 200,
    margin: 10,
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
