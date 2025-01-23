import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import MovieCast from "@/presentation/components/movie/MovieCast";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, castQuery } = useMovie(+id);
  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className=" flex flex-1 w-full items-center justify-center ">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" />
      </View>
    );
  }
  return (
    <ScrollView className="">
      <MovieHeader
        title={movieQuery.data.title}
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
      />
      <MovieDescription movie={movieQuery.data} />
      <MovieCast cast={castQuery.data ?? []} />
      {/* <Text>{movieQuery.data.title ?? "No tiene"}</Text> */}
    </ScrollView>
  );
};

export default MovieScreen;
