import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery } = useMovie(+id);
  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className=" flex flex-1 w-full items-center justify-center ">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" />
      </View>
    );
  }
  return (
    <ScrollView>
      <MovieHeader
        title={movieQuery.data.title}
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
      />
      {/* <Text>{movieQuery.data.title ?? "No tiene"}</Text> */}
    </ScrollView>
  );
};

export default MovieScreen;
