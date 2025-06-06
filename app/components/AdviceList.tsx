import React from "react";
import { View, Text } from "react-native";

const AdviceList = ({ advice }: { advice: string[] | null }) => (
  <View className="p-4">
    {
      // @ts-ignore
      advice.map((item, index) => (
        <View key={index} className="bg-white p-4 mb-4 rounded shadow">
          <Text className="text-gray-800">{item}</Text>
        </View>
      ))
    }
  </View>
);

export default AdviceList;
