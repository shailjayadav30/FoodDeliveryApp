import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomBtn";
import { AuthContext } from "../../AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function SignupScreen({ navigation }: any) {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });
async  function handleSignUp() {
    if (!inputValues.email || !inputValues.fullName || !inputValues.password) {
      Alert.alert("All the fields are required");
      return;
    }
    try{
 await AsyncStorage.setItem("user",JSON.stringify(inputValues))
    console.log("Saved user", inputValues);
    Alert.alert("Sign up successfully");
    setIsAuthenticated(true);
  }
  catch(error){
console.log("error",error)
Alert.alert("Invalid credentials")
  }
}
  return (
    <LinearGradient
      colors={["#6B4A2A", "#A0724A", "#C89060", "#7A5535"]}
      style={styles.container}
    >

      <View style={styles.blob1} />
      <View style={styles.blob2} />
      <View style={styles.blob3} />

      <SafeAreaView style={styles.safeArea}>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={20} color="#5B3A1E" />
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >

          <BlurView intensity={75} tint="light" style={styles.card}>
            
            <Text style={styles.title}>Join the Flavor Profile</Text>
            <Text style={styles.subtitle}>
              Sign up to discover the best local dishes delivered to your door.
            </Text>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Full Name</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={inputValues.fullName}
                  onChangeText={(text) =>
                    setInputValues({
                      ...inputValues,
                      fullName: text,
                    })
                  }
                  placeholder="Alex Rivera"
                  placeholderTextColor="#B0957E"
                  style={styles.input}
                />
              </View>
            </View>


            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={inputValues.email}
                  onChangeText={(text) =>
                    setInputValues({
                      ...inputValues,
                      email: text,
                    })
                  }
                  placeholder="alex@example.com"
                  placeholderTextColor="#B0957E"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                />
              </View>
            </View>


            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={inputValues.password}
                  onChangeText={(text) =>
                    setInputValues({
                      ...inputValues,
                      password: text,
                    })
                  }
                  placeholder="Alex@12"
                  placeholderTextColor="#B0957E"
                  secureTextEntry={!showPassword}
                  style={[styles.input, { flex: 1 }]}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeBtn}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#8B6347"
                  />
                </TouchableOpacity>
              </View>
            </View>


            <TouchableOpacity>
              <CustomButton
                title="Sign Up"
                buttonStyle={styles.signUpBtn}
                onPress={handleSignUp}
              />
            </TouchableOpacity>
        
            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>OR SIGN UP WITH</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
                <Ionicons name="logo-apple" size={20} color="#1A1A1A" />
                <Text style={styles.socialText}>Apple</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
                <Ionicons name="logo-google" size={20} color="#EA4335" />
                <Text style={styles.socialText}>Google</Text>
              </TouchableOpacity>
            </View>

    
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signInLink}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </BlurView>


          <Text style={styles.footer}>
            By signing up, you agree to our 
            <Text style={styles.footerLink}>Terms of Service</Text>and
            <Text style={styles.footerLink}>Privacy Policy</Text>.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingBottom: 32,
  },


  blob1: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(255, 150, 60, 0.35)",
    top: "12%",
    left: "-8%",
  },
  blob2: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "rgba(80, 40, 10, 0.3)",
    bottom: "10%",
    right: "-12%",
  },
  blob3: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "rgba(220, 160, 80, 0.25)",
    top: "50%",
    right: "5%",
  },

  
  backBtn: {
    margin: 16,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(255,255,255,0.75)",
    alignItems: "center",
    justifyContent: "center",
  },

  
  card: {
    borderRadius: 28,
    padding: 28,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },


  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2D1A0E",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#7A5535",
    lineHeight: 20,
    marginBottom: 24,
  },


  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#4A2E1A",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.82)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(180,130,90,0.2)",
    paddingHorizontal: 16,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#2D1A0E",
  },
  eyeBtn: {
    padding: 4,
  },

  signUpBtn: {
    backgroundColor: "#F97316",
    borderRadius: 30,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    shadowColor: "#C2510A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  signUpText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.4,
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(91,64,52,0.2)",
  },
  orText: {
    marginHorizontal: 12,
    fontSize: 11,
    fontWeight: "600",
    color: "#9A7055",
    letterSpacing: 0.8,
  },

  
  socialRow: {
    flexDirection: "row",
    gap: 12,
  },
  socialBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 14,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(180,130,90,0.2)",
  },
  socialText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2D1A0E",
  },

  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 22,
  },
  signInText: {
    fontSize: 14,
    color: "#7A5535",
  },
  signInLink: {
    fontSize: 14,
    fontWeight: "700",
    color: "#C2410C",
  },

  
  footer: {
    textAlign: "center",
    fontSize: 11,
    color: "rgba(255,255,255,0.6)",
    marginTop: 20,
    lineHeight: 18,
  },
  footerLink: {
    color: "rgba(255,255,255,0.9)",
    textDecorationLine: "underline",
  },
});
