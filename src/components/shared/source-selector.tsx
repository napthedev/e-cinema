"use client";

import { STREAMING_SOURCES } from "@/utils/constants";
import { useState, useEffect, useCallback } from "react";

interface SourceSelectorProps {
  tmdbId: number;
  type: "movie" | "tv";
  season?: number;
  episode?: number;
  onSourceChange: (url: string, sourceKey: string) => void;
}

export default function SourceSelector({
  tmdbId,
  type,
  season,
  episode,
  onSourceChange,
}: SourceSelectorProps) {
  const [selectedSource, setSelectedSource] = useState<string>("2embed");

  const handleSourceChange = useCallback(
    (sourceKey: string) => {
      setSelectedSource(sourceKey);

      const source =
        STREAMING_SOURCES[sourceKey as keyof typeof STREAMING_SOURCES];

      let url: string;
      if (type === "movie") {
        url = source.movie(tmdbId);
      } else {
        if (!season || !episode) {
          console.error("Season and episode are required for TV shows");
          return;
        }
        url = source.tv(tmdbId, season, episode);
      }

      onSourceChange(url, sourceKey);
    },
    [tmdbId, type, season, episode, onSourceChange]
  );

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-3 text-white">Choose Source:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2">
        {Object.entries(STREAMING_SOURCES).map(([key, source], index) => (
          <button
            key={key}
            onClick={() => handleSourceChange(key)}
            className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base relative ${
              selectedSource === key
                ? "text-white shadow-lg transform scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-102"
            }`}
            style={{
              backgroundColor:
                selectedSource === key ? source.color : undefined,
            }}
          >
            {source.name}
          </button>
        ))}
      </div>
      <div className="text-xs text-gray-500 mt-2 space-y-1">
        <p>
          💡 Tip: If one source doesn&apos;t work, try another. Each source may
          have different availability.
        </p>
      </div>
    </div>
  );
}
