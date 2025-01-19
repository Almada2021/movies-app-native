import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Stack } from "expo-router";
const client = new QueryClient();
const RootLayout = () => {
  return (
    <QueryClientProvider client={client}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  );
};

export default RootLayout;
