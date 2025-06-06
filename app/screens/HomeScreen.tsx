import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Animated } from "react-native";

import Header from "../components/Header";
import SyncButton from "../components/SyncButton";
import UserInfo from "../components/UserInfo";

const HomeScreen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        flex: 1,
      }}
    >
      <Header title="Bienvenido" />
      <ScrollView
        className="bg-gray-100 p-4"
        contentContainerClassName="flex-1 items-center justify-center"
      >
        <UserInfo />
        <SyncButton />
      </ScrollView>
    </Animated.View>
  );
};

export default HomeScreen;
