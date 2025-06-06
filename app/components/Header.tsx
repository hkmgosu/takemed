import React from "react";
import { View, Text } from "react-native";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View className="bg-blue-600 p-4">
      <Text className="text-white text-xl font-bold">{title}</Text>
    </View>
  );
};

export default Header;
