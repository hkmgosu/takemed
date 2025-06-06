import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert,
  Pressable,
  View,
} from "react-native";

const SyncButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const handleSync = () => {
    setLoading(true);
    setMessage("");
    setTimeout(() => {
      setLoading(false);
      setMessage("Sincronización exitosa con el dispositivo BLE");
    }, 2000);
  };

  return (
    <View className="mb-4 w-72">
      <Pressable
        className="bg-blue-500 px-4 py-2 rounded"
        onPress={handleSync}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-semibold text-center">
            Sincronizar dispositivo
          </Text>
        )}
      </Pressable>
      {message ? <Text className="mt-2 text-green-600">{message}</Text> : null}
    </View>
  );
};

export default SyncButton;
