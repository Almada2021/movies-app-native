import { router } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";
interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
}
const MoviePoster = ({ poster, id, smallPoster = false }: Props) => {
  return (
    <Pressable
      onPress={() => router.push(`/movie/${id}`)}
      className="active:opacity-90 px-2"
    >
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-full h-full"
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
