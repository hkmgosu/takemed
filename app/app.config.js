import "dotenv/config";

export default () => {
  return {
    expo: {
      name: "TakeMed",
      slug: "takemed",
      extra: {
        apiKey: process.env.OPENAI_API_KEY,
      },
    },
  };
};
