import SearchBox from "@/components/ui/searchbox";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-red-500">Home</Text>
        <SearchBox placeholder="Search items..." />
      </View>
    </SafeAreaView>
  );
}
