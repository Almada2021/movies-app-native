import { movieApi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastructure/interfaces/credits.response";
import { MovieCastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (id: string) => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`${id}/credits`);
    return data.cast.map(MovieCastMapper.fromMovieDBToCast);
  } catch (error) {
    console.log(error);
  }
};
