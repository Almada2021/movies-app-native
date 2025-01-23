import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedAction } from "@/core/actions/movies/top-rated.action";
import { upcomingAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const oneDayMS = 1000 * 60 * 60 * 24; //!24 HOURS
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: oneDayMS,
  });
  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: oneDayMS,
  });
  const topRatedQuery = useInfiniteQuery({
    queryKey: ["movies", "topRated"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      return topRatedAction({ page: pageParam, limit: 10 });
    },
    staleTime: oneDayMS,
    getNextPageParam: (_, pages) => pages.length + 1,
  });
  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomingAction,
    staleTime: oneDayMS,
  });
  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
