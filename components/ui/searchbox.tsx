import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBox({
  placeholder = "Search...",
}) {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3">
      <Feather name="search" size={20} color="#6b7280" />

      <TextInput
        className="ml-3 flex-1 text-base text-black"
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        autoCorrect={false}
      />
    </View>
  );
}
