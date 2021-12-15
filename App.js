import React, { useState } from "react";
import { Platform, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import authStorage from "./app/auth/storage";
import AuthNavigator from "./app/navigation/AuthNavigator";
import TabNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (!user) Promise.all([]);
    setUser(user);
    return Promise.all([]);
  };

  if (isReady === false) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setReady(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  console.log(user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
