import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text } from "react-native";
import { Formatter } from "@/config/helpers/formatter";
interface Props {
  movie: CompleteMovie;
}
const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5 ">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text className="">~{movie.genres.join(", ")}</Text>
      </View>
      <Text className="font-bold mt-5">Historia</Text>
      <Text className="mt-2 font-normal">{movie.description}</Text>
      <Text className="mt-2 font-bold">{Formatter.currency(movie.budget)}</Text>
    </View>
  );
};

export default MovieDescription;
