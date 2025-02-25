import { View, Text } from "react-native";

interface IProfile {
  name: string;
  age: number;
}

const Profile = ({ name, age }: IProfile) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Profile</Text>
      <Text>Nama: {name || "Anonymous"}</Text>
      <Text>Umur: {age} tahun</Text>
    </View>
  );
};

export default Profile;
