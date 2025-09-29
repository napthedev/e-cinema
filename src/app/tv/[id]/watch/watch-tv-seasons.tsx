"use client";

import { Fragment, useState } from "react";
import { imageResize } from "@/utils/constants";
import Image from "@/components/shared/image";
import Link from "next/link";
import { Detail, Season } from "@/utils/types";

interface WatchTVSeasonsProps {
  seasons: Season[];
  data: Detail;
}

export default function WatchTVSeasons({ seasons, data }: WatchTVSeasonsProps) {
  const [opened, setOpened] = useState<number | undefined>();

  return (
    <>
      <h1 className="text-2xl mb-8 mt-12">Seasons</h1>
      {seasons.map((item) => (
        <Fragment key={item.season_number}>
          <div
            className="flex gap-4 mt-4 bg-dark-lighten rounded-2xl overflow-hidden cursor-pointer hover:brightness-90 transition duration-300"
            onClick={() =>
              opened === item.season_number
                ? setOpened(undefined)
                : setOpened(item.season_number)
            }
          >
            <div className="w-[154px] h-[231px] flex-shrink-0">
              <Image
                className="w-full h-full"
                src={imageResize(item.poster_path, "w154")}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1
                className={`text-3xl transition ${
                  opened === item.season_number ? "text-orange" : ""
                }`}
              >
                {item.name}
              </h1>
              <p className="text-xl text-gray-400">
                {item.episodes.length} Episode
                {item.episodes.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>

          {opened === item.season_number && (
            <div className="flex flex-col gap-4 overflow-hidden mt-4">
              {item.episodes.map((child, index) => (
                <Link
                  key={child.episode_number}
                  href={`/tv/${data.id}/episode?season=${item.season_number}&episode=${child.episode_number}`}
                >
                  <div
                    key={child.episode_number}
                    className="flex items-center py-2 bg-dark-darken w-full rounded-lg overflow-hidden cursor-pointer hover:brightness-[80%] transition duration-300"
                  >
                    <div className="w-10 hidden md:flex flex-shrink-0 justify-center items-center">
                      <h1 className="text-center">{index + 1}</h1>
                    </div>
                    <Image
                      className="w-[154px] h-[87px] flex-shrink-0 mr-4 object-cover rounded-md"
                      src={imageResize(child.still_path, "w154")}
                      alt=""
                    />
                    <div className="flex-grow">
                      <h1>{child.name}</h1>
                      <p className="text-gray-400">{child.air_date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </>
  );
}
