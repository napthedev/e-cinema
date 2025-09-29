export const TMDB_IMAGE = "https://image.tmdb.org/t/p/";

export const imageResize = (src: string, dimension: string = "w200") =>
  `${TMDB_IMAGE}${dimension}${src}`;
export const imageOriginal = (src: string) => `${TMDB_IMAGE}original${src}`;

// Legacy embed functions (keeping for backward compatibility)
export const embedMovie = (id: number) => `https://www.2embed.cc/embed/${id}`;
export const embedEpisode = (id: number, season: number, episode: number) =>
  `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}`;

// Streaming source configurations
export const STREAMING_SOURCES = {
  "2embed": {
    name: "2Embed",
    movie: (tmdbId: number) => `https://www.2embed.cc/embed/${tmdbId}`,
    tv: (tmdbId: number, season: number, episode: number) =>
      `https://www.2embed.cc/embedtv/${tmdbId}&s=${season}&e=${episode}`,
    color: "#3b82f6",
  },
  vidsrc: {
    name: "VidSrc",
    movie: (tmdbId: number) => `https://vidsrc.xyz/embed/movie?tmdb=${tmdbId}`,
    tv: (tmdbId: number, season: number, episode: number) =>
      `https://vidsrc.xyz/embed/tv?tmdb=${tmdbId}&season=${season}&episode=${episode}`,
    color: "#10b981",
  },
  superembed: {
    name: "SuperEmbed",
    movie: (tmdbId: number) =>
      `https://multiembed.mov/?video_id=${tmdbId}&tmdb=1`,
    tv: (tmdbId: number, season: number, episode: number) =>
      `https://multiembed.mov/?video_id=${tmdbId}&tmdb=1&s=${season}&e=${episode}`,
    color: "#f59e0b",
  },
  superembedvip: {
    name: "SuperEmbed VIP",
    movie: (tmdbId: number) =>
      `https://multiembed.mov/directstream.php?video_id=${tmdbId}&tmdb=1`,
    tv: (tmdbId: number, season: number, episode: number) =>
      `https://multiembed.mov/directstream.php?video_id=${tmdbId}&tmdb=1&s=${season}&e=${episode}`,
    color: "#8b5cf6",
  },
  moviesapi: {
    name: "MoviesAPI",
    movie: (tmdbId: number) => `https://moviesapi.club/movie/${tmdbId}`,
    tv: (tmdbId: number, season: number, episode: number) =>
      `https://moviesapi.club/tv/${tmdbId}/${season}/${episode}`,
    color: "#ef4444",
  },
};
