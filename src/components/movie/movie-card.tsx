import Image from "../shared/image";
import { Item } from "@/utils/types";
import Link from "next/link";
import type { NextPage } from "next";
import { imageResize } from "@/utils/constants";

interface MovieCardProps {
  item: Item;
  height: number | string;
  width: number | string;
}

const MovieCard: NextPage<MovieCardProps> = ({ item, height, width }) => {
  const numericWidth =
    typeof width === "string" && width.includes("%")
      ? 200
      : typeof width === "string"
      ? parseInt(width)
      : width;
  const numericHeight = typeof height === "string" ? parseInt(height) : height;

  return (
    <Link
      href={item.media_type === "tv" ? `/tv/${item.id}` : `/movie/${item.id}`}
      className="rounded-lg overflow-hidden cursor-pointer group flex flex-col items-center"
    >
      <Image
        style={{ height, width }}
        className="group-hover:brightness-75 object-cover"
        src={imageResize(item.poster_path)}
        alt={item.title || item.name || "Movie poster"}
        width={numericWidth}
        height={numericHeight}
      />
      <p className="p-2 h-[60px] w-full overflow-hidden bg-dark-darken text-text-secondary group-hover:text-orange transition duration-300 text-sm">
        {item.title || item.name}
      </p>
    </Link>
  );
};

export default MovieCard;
