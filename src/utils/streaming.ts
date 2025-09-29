// Utility functions for video streaming sources

export const validateTMDBId = (id: number): boolean => {
  return typeof id === "number" && id > 0 && !isNaN(id);
};

export const validateEpisodeParams = (
  season?: number,
  episode?: number
): boolean => {
  if (season === undefined || episode === undefined) return false;
  return (
    typeof season === "number" &&
    typeof episode === "number" &&
    season > 0 &&
    episode > 0
  );
};

export const generateSourceUrl = (
  sourceKey: string,
  type: "movie" | "tv",
  tmdbId: number,
  season?: number,
  episode?: number
): string | null => {
  // Import here to avoid circular dependency
  const { STREAMING_SOURCES } = require("./constants");

  if (!validateTMDBId(tmdbId)) {
    console.error("Invalid TMDB ID:", tmdbId);
    return null;
  }

  const source = STREAMING_SOURCES[sourceKey];
  if (!source) {
    console.error("Unknown source:", sourceKey);
    return null;
  }

  try {
    if (type === "movie") {
      return source.movie(tmdbId);
    } else {
      if (!validateEpisodeParams(season, episode)) {
        console.error("Invalid episode parameters:", { season, episode });
        return null;
      }
      return source.tv(tmdbId, season!, episode!);
    }
  } catch (error) {
    console.error("Error generating source URL:", error);
    return null;
  }
};

export const getSourceDisplayName = (sourceKey: string): string => {
  const { STREAMING_SOURCES } = require("./constants");
  return STREAMING_SOURCES[sourceKey]?.name || "Unknown Source";
};

export const getAllSourceKeys = (): string[] => {
  const { STREAMING_SOURCES } = require("./constants");
  return Object.keys(STREAMING_SOURCES);
};
