import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState } from "react";
export const AuthContext = createContext<any>(null);
const AuthProvider = ({children}:any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); 
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const styles = StyleSheet.create({});
