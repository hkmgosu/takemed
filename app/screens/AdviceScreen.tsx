import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Animated,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { OpenAI } from "openai";
import Header from "../components/Header";
import { useFocusEffect } from "@react-navigation/native";
import AdviceList from "../components/AdviceList";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const AdviceScreen = () => {
  const [advice, setAdvice] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fetchAdvice = async () => {
    setAdvice(null);
    setLoading(true);
    setError(null);
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Eres un asistente que da consejos médicos o deportivos.",
          },
          {
            role: "user",
            content:
              "Dame consejos médicos o deportivos para comenzar el día (minimo 6), enumerados y sin encabezado (###), y sin 'claro aqui tienes la respuesta' con subtitulo de cada consejo",
          },
        ],
        max_tokens: 500,
      });

      const advices = completion.choices[0].message.content;
      setAdvice(
        //@ts-ignore
        advices &&
          advices
            .split(/\d+\.\s/)
            .map((section) => section.trim())
            .filter((section) => section !== "")
      );
    } catch (err) {
      console.error(err);
      // @ts-ignore
      setError("Error al obtener el consejo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  // Ejecutar cada vez que la pantalla tenga foco
  useFocusEffect(
    useCallback(() => {
      fetchAdvice();
    }, [])
  );

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-red-500 text-lg">{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Consejos de salud" />
      <Animated.View
        style={{
          opacity: fadeAnim,
          flex: 1,
        }}
      >
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator
              size="large"
              color="rgb(37 99 235 / var(--tw-bg-opacity, 1))"
            />
            <Text className="mt-4 text-gray-700">
              Cargando consejos desde la IA...
            </Text>
          </View>
        ) : (
          <ScrollView
            className="p-4 bg-gray-100"
            contentContainerStyle={{ paddingBottom: 20 }}
            style={{ flex: 1 }}
          >
            <Text className="text-xl font-semibold mb-2 text-center">
              ¡Aquí tienes unos consejos para comenzar el día!
            </Text>
            <AdviceList advice={advice} />
          </ScrollView>
        )}
      </Animated.View>
    </SafeAreaView>
  );
};

export default AdviceScreen;
