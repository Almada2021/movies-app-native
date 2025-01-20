import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import {
  MovieDBMoviesResponses,
  Result,
} from "@/infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const popularMoviesAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponses>("/popular");
    return data.results.map(MovieMapper.fromMovieDBToMovie);
  } catch (error) {
    console.log(error);
    throw "cannot load now playing movies";
    1;
  }
};
