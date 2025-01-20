import { Result } from "@/infrastructure/interfaces/moviedb-responses";
import {
  CompleteMovie,
  Movie,
} from "@/infrastructure/interfaces/movie.interface";
import { MovieDBByIDResponse } from "../interfaces/moviedb-by-id-response";

export class MovieMapper {
  static fromMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };

  static fromMovieDBToCompleteMovie = (
    movie: MovieDBByIDResponse
  ): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      budget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map((m) => m.name),
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map((c) => c.name),
    };
  };
}
