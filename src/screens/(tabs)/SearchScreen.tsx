import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Ionicons size={22} color="#787679" name="search-outline" />
        <TextInput
          placeholderTextColor="#9CA3AF"
          style={{
            backgroundColor: "E4E2E4",
            flex: 1,
            fontSize: 14,
            color: "#111827",
          }}
          placeholder="Cuisines , restaurants, or dishes"
        />
      </View>
      <View style={styles.section2}>
        <Text style={styles.recent}>Recent Searches</Text>
        <Text style={styles.clear}>Clear all</Text>
      </View>
      <View style={styles.section3}>
        <View style={styles.itemsContainer}>
          <Ionicons name="timer-outline" size={24} color="#1B1B1D"/>
          <Text style={styles.itemsText}>Truffle Pizza</Text>
        </View>
        <View style={styles.itemsContainer}>
          <Ionicons name="timer-outline" size={24} color="#1B1B1D"/>
          <Text style={styles.itemsText}>Poke Bowls</Text>
        </View>
        {/* <View style={styles.itemsContainer}>
          <Ionicons name="timer-outline" size={24} color="#1B1B1D"/>
          <Text style={styles.itemsText}>Smoothies</Text>
        </View> */}
      </View>
      <Text style={styles.popular}>Popular Categories</Text>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  textContainer: {
    backgroundColor: "#E4E2E4",

    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    borderRadius: 10,
    paddingVertical: 4,
  },
  section2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
  },
  clear: {
    fontSize: 16,
    color:"#D04A14",
    fontWeight:"500"
  },
  recent: {
    fontSize: 16,
  },
  section3: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20,
    paddingHorizontal:10
  },

  itemsContainer:{
    backgroundColor:"#E4E2E4",
    borderRadius:40,
    flexDirection:"row",
paddingHorizontal:18,
paddingVertical:10,
alignItems:"center",
justifyContent:"center",
gap:6
  },
  itemsText:{
    fontSize:14
  },
  popular:{
    marginTop:40,
    fontSize:18
  }
});
