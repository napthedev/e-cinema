import { getWatchMovieContent } from "@/utils/api";
import { notFound } from "next/navigation";
import { Detail } from "@/utils/types";
import VideoPlayer from "@/components/shared/video-player";
import { imageOriginal } from "@/utils/constants";
import StarRating from "@/components/display/star-rating";

interface WatchMovieProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: WatchMovieProps) {
  try {
    const response = await getWatchMovieContent(params.id);
    const movie = response.data as Detail;

    return {
      title: `Watch ${movie.title || movie.name} - e-cinema`,
      description: movie.overview,
      openGraph: {
        images: [imageOriginal(movie.backdrop_path)],
      },
    };
  } catch (error) {
    return {
      title: "Movie not found - e-cinema",
    };
  }
}

export default async function WatchMoviePage({ params }: WatchMovieProps) {
  try {
    const response = await getWatchMovieContent(params.id);
    const movie = response.data as Detail;

    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">
              {movie.title || movie.name}
            </h1>
            <div className="flex items-center gap-4 text-gray-400">
              <span>{new Date(movie.release_date).getFullYear()}</span>
              <StarRating
                stars={Math.round(movie.vote_average)}
                maximum={10}
                extraText={` (${movie.vote_count} votes)`}
              />
            </div>
          </div>

          <VideoPlayer
            tmdbId={movie.id}
            type="movie"
            title={movie.title || movie.name}
          />

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold">Release Date:</span>
                <span className="ml-2 text-gray-300">{movie.release_date}</span>
              </div>
              {(movie as any).runtime && (
                <div>
                  <span className="font-semibold">Runtime:</span>
                  <span className="ml-2 text-gray-300">
                    {(movie as any).runtime} minutes
                  </span>
                </div>
              )}
              <div>
                <span className="font-semibold">Genres:</span>
                <span className="ml-2 text-gray-300">
                  {movie.genres?.map((genre: any) => genre.name).join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
