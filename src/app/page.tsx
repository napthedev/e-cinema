import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import { imageOriginal, imageResize } from "../utils/constants";
import { Fragment } from "react";
import Image from "../components/Shared/image";
import { Item } from "../utils/types";
import Link from "next/link";
import MovieSlider from "../components/Movie/movie-slider";
import { getHomeData } from "../utils/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "e-cinema - Popular movies in one place",
  description: "Watch your favorite movies and TV shows in our website.",
  openGraph: {
    images: ["/preview.png"],
  },
};

async function getHomeContent() {
  try {
    const data = await getHomeData();
    const trending = data["Trending Movies"];
    const main = trending[new Date().getDate() % trending.length];

    return {
      data,
      main,
    };
  } catch (error) {
    throw new Error("Failed to fetch home data");
  }
}

export default async function Home() {
  const { data, main } = await getHomeContent();

  return (
    <>
      <div className="relative w-screen h-screen hidden md:flex justify-between items-center gap-6 md:px-20 px-10">
        <Image
          src={imageOriginal(main.backdrop_path)}
          opacity={0.5}
          className="w-screen h-screen absolute top-0 left-0 hidden md:block object-cover"
          alt=""
        />

        <div className="z-10 w-auto flex-1 flex justify-center items-center">
          <div className="flex flex-col items-start gap-4">
            <p className="md:text-5xl text-4xl text-gray-100 max-w-xl">
              {main.title || main.name}
            </p>
            <p className="md:text-xl text-lg max-w-xl text-gray-100 text-justify multiline-ellipsis">
              {main.overview}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href={`/movie/${main.id}/watch`}
                className="bg-dark-lighten hover:bg-dark-darken text-white transition duration-300 py-3 px-6 rounded-md outline-none flex items-center gap-2 whitespace-nowrap"
              >
                <FaPlayCircle />
                <span>Watch Now</span>
              </Link>
              <Link
                href={`/movie/${main.id}`}
                className="bg-dark-lighten hover:bg-dark-darken text-white transition duration-300 py-3 px-6 rounded-md outline-none flex items-center gap-2 whitespace-nowrap"
              >
                <FaInfoCircle />
                <span>View Info</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-center items-center hidden md:flex min-w-[300px]">
          <Image
            className="z-10 w-[300px] rounded-xl"
            src={imageResize(main.poster_path, "w300")}
            alt=""
          />
        </div>
      </div>
      {Object.keys(data).map((item, index) => (
        <Fragment key={item}>
          <h1
            className={`text-2xl mb-3 md:ml-16 ml-4 ${
              index === 0 ? "mt-16 md:mt-8" : "mt-8"
            }`}
          >
            {item}
          </h1>
          <MovieSlider data={data[item]} />
        </Fragment>
      ))}
    </>
  );
}
