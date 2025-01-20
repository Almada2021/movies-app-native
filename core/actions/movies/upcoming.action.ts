import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMoviesResponses } from "@/infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomingAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponses>("/upcoming");
    return data.results.map(MovieMapper.fromMovieDBToMovie);
  } catch (error) {
    console.log(error);
    throw "Cannot load upcoming movies";
  }
};
