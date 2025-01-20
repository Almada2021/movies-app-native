import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentation/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }
  return (
    <View className="mt-2" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold px-4 mb-2 ">HomeScreen</Text>
      {/* Carrusel de imagenes */}
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />
      {/* Peliculas Populares */}
      <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />
      <MovieHorizontalList
        title="Mejor calificadas"
        movies={topRatedQuery.data?.pages.flat() ?? []}
        loadNextPage={topRatedQuery.fetchNextPage}
      />
      <MovieHorizontalList
        title="Proximamente"
        movies={upcomingQuery.data ?? []}
      />
    </View>
  );
};

export default HomeScreen;
