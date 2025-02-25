import { Button, View, Text } from "react-native";

interface ICounter {
  handleIncrement: () => void;
  handleDecrement: () => void;
  value: number;
}

const Counter = ({ handleDecrement, handleIncrement, value }: ICounter) => {
  return (
    <View>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Umur: {value} tahun</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
    </View>
  );
};

export default Counter;
