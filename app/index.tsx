import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "./styles/global.css";

import HomeScreen from "./screens/HomeScreen";
import TipsScreen from "./screens/TipsScreen";
import Header from "./components/Header";
import AdviceScreen from "./screens/AdviceScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Consejos" component={AdviceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
