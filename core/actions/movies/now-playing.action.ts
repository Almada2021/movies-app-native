import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import {
  MovieDBMoviesResponses,
  Result,
} from "@/infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponses>("/now_playing");
    return data.results.map(MovieMapper.fromMovieDBToMovie);
  } catch (error) {
    console.log(error);
    throw "cannot load now playing movies";
    1;
  }
};
