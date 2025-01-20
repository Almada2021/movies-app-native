import { movieApi } from "@/core/api/movie-api";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MovieDBMoviesResponses } from "@/infrastructure/interfaces/moviedb-responses";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({
  page = 1,
  limit = 10,
}: Options): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponses>("/top_rated", {
      params: {
        page: page,
        limit: limit,
      },
    });
    return data.results.map(MovieMapper.fromMovieDBToMovie);
  } catch (error) {
    console.log(error);
    throw "cannot load now playing movies";
    1;
  }
};
