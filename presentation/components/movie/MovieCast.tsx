import { View, Text, FlatList } from "react-native";
import React from "react";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { ActorCard } from "./ActorCast";
interface Props {
  cast: Cast[];
}
const MovieCast = ({ cast }: Props) => {
  return (
    <FlatList
      data={cast}
      horizontal
      renderItem={({ item }) => {
        return <ActorCard actor={item} />;
      }}
    />
  );
};

export default MovieCast;
