import { Fragment } from "react";
import { imageOriginal, imageResize } from "@/utils/constants";
import Image from "@/components/shared/image";
import Link from "next/link";
import StarRating from "@/components/display/star-rating";
import { getTVSeasons } from "@/utils/api";
import { notFound } from "next/navigation";
import { Detail, Season } from "@/utils/types";
import WatchTVSeasons from "./watch-tv-seasons";

interface WatchTVProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: WatchTVProps) {
  try {
    const response = await getTVSeasons(params.id);
    const tv = response.data as Detail;

    return {
      title: `${tv.name} - Seasons - e-cinema`,
      description: "View Seasons",
      openGraph: {
        images: [imageOriginal(tv.backdrop_path)],
      },
    };
  } catch (error) {
    return {
      title: "TV Show not found - e-cinema",
    };
  }
}

export default async function WatchTVPage({ params }: WatchTVProps) {
  try {
    const response = await getTVSeasons(params.id);

    return <WatchTVContent seasons={response.seasons} data={response.data} />;
  } catch (error) {
    notFound();
  }
}

function WatchTVContent({
  seasons,
  data,
}: {
  seasons: Season[];
  data: Detail;
}) {
  return (
    <div className="flex justify-center">
      <div className="mt-24 md:mx-20 w-full max-w-4xl mx-6">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="md:w-[200px] w-full h-full flex justify-center items-center flex-shrink-0">
            <Image src={imageResize(data.poster_path)} alt="" />
          </div>
          <div className="flex flex-col items-start gap-3 flex-grow">
            <Link
              href={`/tv/${data.id}`}
              className="text-2xl hover:text-orange transition cursor-pointer"
            >
              {data.name}
            </Link>
            <p className="text-justify">{data.overview}</p>
            <p className="text-gray-400">{data.last_air_date}</p>
            <StarRating
              stars={Math.round(data.vote_average)}
              maximum={10}
              extraText={` (${data.vote_count} votes)`}
            />
          </div>
        </div>
        <WatchTVSeasons seasons={seasons} data={data} />
      </div>
    </div>
  );
}
