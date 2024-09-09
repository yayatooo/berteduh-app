import { Text, View, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Button from "@/components/Button";


const Welcome = () => {
  return (
    <View className="bg-dark flex-1 justify-center items-center">
      <Text
        className="text-5xl text-white font-semibold text-center leading-relaxed"
        style={{ fontFamily: "SoraSemiBold" }}
      >
        Fall in Love with Coffee in Blissful Delight!
      </Text>
      <Text
        className="text-center text-xl leading-relaxed py-8 px-4 text-ash"
        style={{ fontFamily: "SoraLight" }}
      >
        Welcome to our cozy coffee corner, where every cup is a delightful for
        you.
      </Text>
      <Button href="/(tabs)">Get Started</Button>
    </View>
  );
};

export default Welcome;
