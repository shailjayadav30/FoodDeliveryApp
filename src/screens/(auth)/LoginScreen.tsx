import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import CustomButton from "../../components/CustomBtn";
import { AuthContext } from "../../AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }: any) {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  async function handleLogin() {
    const storedUser = await AsyncStorage.getItem("user");
    if (!storedUser) {
      Alert.alert("User does not exists");
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    if (inputValues.email === parsedUser.email && inputValues.password === parsedUser.password) {
      Alert.alert("User Logged in successfully");
      setIsAuthenticated(true)

    }
else{
  Alert.alert("Invalid credentials")
}
  }

  return (
    <ImageBackground
      source={require("../../../assets/loginbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar   hidden={true}/>


      <BlurView
        intensity={18}
        tint="dark"
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.darkOverlay} />


      <View style={styles.container}>

        <BlurView intensity={60} tint="light" style={styles.card}>

          <Text style={styles.logo}>Crave</Text>
          <Text style={styles.subtitle}>Log in to your flavor profile</Text>


          <TouchableOpacity style={styles.socialButton} activeOpacity={0.85}>
            <Ionicons name="logo-apple" size={22} color="#1A1A1A" />
            <Text style={styles.socialText}>Continue with Apple</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.85}>
            <Ionicons name="logo-google" size={22} color="#EA4335" />
            <Text style={styles.socialText}>Continue with Google</Text>
          </TouchableOpacity>


          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>


          <TextInput
            value={inputValues.email}
            onChangeText={(text) =>
              setInputValues({
                ...inputValues,
                email: text,
              })
            }
            placeholder="Email Address"
            placeholderTextColor="#9A7A68"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              value={inputValues.password}
              onChangeText={(text) =>
                setInputValues({
                  ...inputValues,
                  password: text,
                })
              }
              placeholder="Password"
              placeholderTextColor="#9A7A68"
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#7A5A48"
              />
            </TouchableOpacity>
          </View>


          <TouchableOpacity>
            <CustomButton
              title="Sign In"
              buttonStyle={styles.signInBtn}
              onPress={handleLogin}
            />
          </TouchableOpacity>



          <TouchableOpacity style={styles.guestBtn}>
            <Text style={styles.guestText}>Continue as Guest</Text>
          </TouchableOpacity>


          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signupLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(30, 10, 0, 0.38)",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  card: {
    borderRadius: 32,
    paddingHorizontal: 28,
    paddingVertical: 36,
    overflow: "hidden",
    backgroundColor: "rgba(230, 210, 190, 0.45)",
    borderWidth: 1,
    borderColor: "rgba(255, 230, 200, 0.35)",
  },

  logo: {
    fontSize: 54,
    fontWeight: "800",
    color: "#C2410C",
    textAlign: "center",
    letterSpacing: -1,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#6B4A34",
    marginTop: 4,
    marginBottom: 28,
  },

  socialButton: {
    height: 62,
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
  },

  socialText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(91,64,52,0.22)",
  },
  orText: {
    marginHorizontal: 16,
    fontSize: 14,
    fontWeight: "600",
    color: "#9A7A68",
    letterSpacing: 1,
  },

  input: {
    height: 62,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 18,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#2D1A0E",
    marginBottom: 14,
  },

  passwordContainer: {
    height: 62,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#2D1A0E",
  },

  signInBtn: {
    height: 62,
    backgroundColor: "#E8541A",
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    shadowColor: "#C2410C",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 14,
    elevation: 8,
  },

  guestBtn: {
    marginTop: 22,
    alignItems: "center",
  },
  guestText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#C2410C",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
  signupText: {
    fontSize: 15,
    color: "#6B4A34",
  },
  signupLink: {
    fontSize: 15,
    fontWeight: "700",
    color: "#C2410C",
  },
});
