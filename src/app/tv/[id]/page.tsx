import ItemView from "@/components/Layout/item-view";
import { getTVDetails } from "@/utils/api";
import { notFound } from "next/navigation";
import { Detail } from "@/utils/types";

interface TVProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: TVProps) {
  try {
    const response = await getTVDetails(params.id);
    const tv = response.data as Detail;

    return {
      title: `${tv.title || tv.name} - e-cinema`,
      description: tv.overview,
    };
  } catch (error) {
    return {
      title: "TV Show not found - e-cinema",
    };
  }
}

export default async function TVPage({ params }: TVProps) {
  try {
    const response = await getTVDetails(params.id);

    return (
      <ItemView
        data={response.data}
        casts={response.casts}
        similar={response.similar}
        videos={response.videos}
        media_type="tv"
      />
    );
  } catch (error) {
    notFound();
  }
}
