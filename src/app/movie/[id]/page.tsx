import { Detail } from "@/utils/types";
import ItemView from "@/components/Layout/item-view";
import { getMovieDetails } from "@/utils/api";
import { notFound } from "next/navigation";

interface MovieProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: MovieProps) {
  try {
    const response = await getMovieDetails(params.id);
    const movie = response.data as Detail;

    return {
      title: `${movie.title || movie.name} - e-cinema`,
      description: movie.overview,
    };
  } catch (error) {
    return {
      title: "Movie not found - e-cinema",
    };
  }
}

export default async function MoviePage({ params }: MovieProps) {
  try {
    const response = await getMovieDetails(params.id);

    return (
      <ItemView
        data={response.data}
        casts={response.casts}
        similar={response.similar}
        videos={response.videos}
        media_type="movie"
      />
    );
  } catch (error) {
    notFound();
  }
}
