import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

type CustomButtonProps = {
  title: string;

  onPress?: () => void;

  buttonStyle?: ViewStyle;

  textStyle?: TextStyle;
};

export default function CustomButton({
  title,
  onPress,
  buttonStyle,
  textStyle,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Text style={[styles.text, textStyle]}>
          {title}
        </Text>

        <Ionicons
          name="arrow-forward"
          size={20}
          color="#fff"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E85D04",

    height: 58,

    borderRadius: 16,

    justifyContent: "center",

    alignItems: "center",

    shadowColor: "#E85D04",

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.25,

    shadowRadius: 12,

    elevation: 6,
  },

  text: {
    color: "#fff",

    fontSize: 18,
letterSpacing:0.83,
    fontWeight: "700",
  },
});