import "dotenv/config";

export default () => {
  return {
    expo: {
      name: "TakeMed",
      slug: "takemed",
      extra: {
        apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
      },
    },
  };
};
