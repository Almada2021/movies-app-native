import { Cast } from "../interfaces/cast.interface";
import { MovieDBCast } from "../interfaces/credits.response";

export class MovieCastMapper {
  static fromMovieDBToCast = (actor: MovieDBCast): Cast => {
    return {
      character: actor.character ?? "Not Character",
      name: actor.name,
      id: actor.id,
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png",
    };
  };
}
