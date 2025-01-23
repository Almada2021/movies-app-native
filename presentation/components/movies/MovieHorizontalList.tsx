import { Movie } from "@/infrastructure/interfaces/movie.interface";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";
import { useEffect, useRef } from "react";

interface Props {
  title?: string;
  movies: Movie[];

  loadNextPage?: () => void;
}
const MovieHorizontalList = ({ movies, title, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;
    // Prevent multiple request
    isLoading.current = true;
    // TODO: cargar siguientes Pelis
    // console.log("Cargando siguientes peliculas");
    loadNextPage && loadNextPage();
    isLoading.current = false;
  };
  return (
    <View className={!title ? "mt-2" : ""}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        // Evento muy ruidoso hay que tener cuidado
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
