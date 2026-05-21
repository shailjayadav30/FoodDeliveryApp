import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  onSkip?: () => void;
};

export default function Header({
  onSkip,
}: HeaderProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 20,
      }}
    >
      
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Ionicons
          name="restaurant"
          size={24}
          color="#C2410C"
        />

        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: "#1F2937",
          }}
        >
          Crave
        </Text>
      </View>

      
      <TouchableOpacity onPress={onSkip}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "#525252",
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
}