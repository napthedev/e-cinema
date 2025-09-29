"use client";

import { useState, useEffect } from "react";
import SourceSelector from "@/components/shared/source-selector";
import { STREAMING_SOURCES } from "@/utils/constants";

interface VideoPlayerProps {
  tmdbId: number;
  type: "movie" | "tv";
  season?: number;
  episode?: number;
  title: string;
}

export default function VideoPlayer({
  tmdbId,
  type,
  season,
  episode,
  title,
}: VideoPlayerProps) {
  const [currentSource, setCurrentSource] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [useSandbox, setUseSandbox] = useState(false);

  // Initialize with default source (2embed)
  useEffect(() => {
    const sourceKey = "2embed";

    // Sandbox disabled for all sources
    setUseSandbox(false);

    const defaultSource =
      STREAMING_SOURCES[sourceKey as keyof typeof STREAMING_SOURCES];
    let url: string;

    if (type === "movie") {
      url = defaultSource.movie(tmdbId);
    } else {
      if (!season || !episode) {
        setHasError(true);
        setIsLoading(false);
        return;
      }
      url = defaultSource.tv(tmdbId, season, episode);
    }

    setCurrentSource(url);
    setIsLoading(false);
  }, [tmdbId, type, season, episode]);

  const handleSourceChange = (url: string, sourceKey?: string) => {
    setIsLoading(true);
    setHasError(false);

    // Sandbox disabled for all sources
    setUseSandbox(false);

    setCurrentSource(url);
    // Remove loading state after a short delay
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleIframeError = () => {
    // Sandbox is always disabled, so show error directly
    console.log("Iframe failed to load");
    setHasError(true);
  };

  // Sandbox is disabled for all sources - no timeout needed

  return (
    <div className="w-full">
      <SourceSelector
        tmdbId={tmdbId}
        type={type}
        season={season}
        episode={episode}
        onSourceChange={(url, sourceKey) => handleSourceChange(url, sourceKey)}
      />

      <div
        className="relative w-full bg-black rounded-lg overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p>Loading {currentSource ? "new source" : "player"}...</p>
            </div>
          </div>
        )}

        {hasError ? (
          <div className="flex items-center justify-center h-full text-white text-center">
            <div>
              <p className="text-xl mb-2">⚠️ Unable to load video</p>
              <p className="text-gray-400 mb-2">
                Please try selecting a different source above.
              </p>
              <p className="text-yellow-400 text-sm">
                💡 If none of the sources work, try disabling your ad blocker
                and refresh the page.
              </p>
            </div>
          </div>
        ) : (
          <iframe
            key={`${currentSource}-${useSandbox}`} // Force re-render when sandbox changes
            src={currentSource}
            title={`Watch ${title}`}
            className="w-full h-full border-0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            {...(useSandbox && {
              sandbox:
                "allow-same-origin allow-scripts allow-popups allow-forms allow-presentation allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation allow-modals",
            })}
            onError={handleIframeError}
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>

      <div className="mt-2 text-sm text-gray-400">
        <p>
          <strong>Note:</strong> If the current source doesn&apos;t work, try
          switching to another source above. The player automatically adjusts
          security settings to ensure compatibility. Some sources may show
          popups - this is normal for free streaming services.
        </p>
        <p className="text-yellow-400 mt-2">
          💡 <strong>Tip:</strong> If videos won&apos;t load, try disabling your
          ad blocker and refresh the page.
        </p>
      </div>
    </div>
  );
}
