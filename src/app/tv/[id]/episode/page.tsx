import { Fragment } from "react";
import { embedEpisode, imageOriginal, imageResize } from "@/utils/constants";
import Image from "@/components/shared/image";
import Link from "next/link";
import StarRating from "@/components/display/star-rating";
import { getTVSeasons } from "@/utils/api";
import { notFound } from "next/navigation";
import { Detail, Episode, Season } from "@/utils/types";
import TVSeasonSelector from "./tv-season-selector";

interface TVEpisodeProps {
  params: {
    id: string;
  };
  searchParams: {
    season?: string;
    episode?: string;
  };
}

export async function generateMetadata({
  params,
  searchParams,
}: TVEpisodeProps) {
  try {
    const seasonId = searchParams.season;
    const episodeId = searchParams.episode;

    if (!seasonId || !episodeId) return { title: "Episode not found" };

    const response = await getTVSeasons(params.id);
    const episode = response.seasons
      .find((item: Season) => item.season_number === Number(seasonId))
      ?.episodes.find(
        (item: Episode) => item.episode_number === Number(episodeId)
      );

    if (!episode) return { title: "Episode not found" };

    return {
      title: `${response.data.name} - Episode ${episodeId} - Season ${seasonId} - e-cinema`,
      description: "Watch TV Episode",
      openGraph: {
        images: [imageOriginal(episode.still_path)],
      },
    };
  } catch (error) {
    return { title: "Episode not found" };
  }
}

export default async function TVEpisodePage({
  params,
  searchParams,
}: TVEpisodeProps) {
  const seasonId = searchParams.season;
  const episodeId = searchParams.episode;

  if (!seasonId || !episodeId) {
    notFound();
  }

  try {
    const response = await getTVSeasons(params.id);
    const episode = response.seasons
      .find((item: Season) => item.season_number === Number(seasonId))
      ?.episodes.find(
        (item: Episode) => item.episode_number === Number(episodeId)
      );

    if (!episode) {
      notFound();
    }

    return (
      <TVEpisodeContent
        seasons={response.seasons}
        data={response.data}
        seasonId={Number(seasonId)}
        episodeId={Number(episodeId)}
        episode={episode}
      />
    );
  } catch (error) {
    notFound();
  }
}

function TVEpisodeContent({
  seasons,
  data,
  seasonId,
  episodeId,
  episode,
}: {
  seasons: Season[];
  data: Detail;
  seasonId: number;
  episodeId: number;
  episode: Episode;
}) {
  return (
    <div className="mt-28 flex flex-col lg:flex-row px-5 lg:px-20 gap-8">
      <div className="flex-grow">
        <div
          className="relative h-0 w-full"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedEpisode(data.id, seasonId, episodeId)}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="my-10 flex flex-col items-start gap-2">
          <Link
            href={`/tv/${data.id}`}
            className="text-2xl hover:text-orange transition"
          >
            {data.name}
          </Link>
          <h1 className="text-xl">{episode.name}</h1>
          <p>{episode.overview}</p>
          <p>Release Date: {episode.air_date}</p>
          <StarRating
            maximum={10}
            stars={Math.round(episode.vote_average)}
            extraText={` (${episode.vote_count} votes)`}
          />
        </div>
      </div>
      <TVSeasonSelector
        seasons={seasons}
        data={data}
        currentSeasonId={seasonId}
        currentEpisodeId={episodeId}
      />
    </div>
  );
}
