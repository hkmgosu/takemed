import React from "react";
import { View, Text } from "react-native";

export default function UserInfo() {
  const nombre = "Juan Pérez";
  const pasos = 7850;

  return (
    <View className="mb-8 w-full max-w-md p-4 rounded-lg bg-gray-100 shadow">
      <Text className="text-xl font-semibold mb-4">Juan Pérez</Text>
      <Text className="text-lg">7850 pasos</Text>
    </View>
  );
}
