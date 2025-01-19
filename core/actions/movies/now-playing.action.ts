import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponses } from "@/infrastructure/interfaces/moviedb-responses";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponses>("/now_playing");
    console.log(data);
    return [];
  } catch (error) {
    console.log(error);
    throw "cannot load now playing movies";
    1;
  }
};
