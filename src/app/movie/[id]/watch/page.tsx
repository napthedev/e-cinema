import { getWatchMovieContent } from "@/utils/api";
import { notFound } from "next/navigation";
import { Detail } from "@/utils/types";

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

    // This would typically render your video player component
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">
            {movie.title || movie.name}
          </h1>
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
            <p className="text-white text-xl">Video Player Would Go Here</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-300">{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
