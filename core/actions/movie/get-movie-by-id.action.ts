import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBByIDResponse } from "@/infrastructure/interfaces/moviedb-by-id-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data: movie } = await movieApi.get<MovieDBByIDResponse>(`${id}`);
    return await MovieMapper.fromMovieDBToCompleteMovie(movie);
  } catch (error) {
    throw "doesn't find movie";
  }
};
