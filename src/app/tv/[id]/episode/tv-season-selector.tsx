"use client";

import { Fragment, useState } from "react";
import { imageResize } from "@/utils/constants";
import Image from "@/components/Shared/image";
import Link from "next/link";
import { Detail, Episode, Season } from "@/utils/types";

interface TVSeasonSelectorProps {
  seasons: Season[];
  data: Detail;
  currentSeasonId: number;
  currentEpisodeId: number;
}

export default function TVSeasonSelector({
  seasons,
  data,
  currentSeasonId,
  currentEpisodeId,
}: TVSeasonSelectorProps) {
  const [opened, setOpened] = useState<number | undefined>(currentSeasonId);

  return (
    <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-2">
      <h1 className="text-xl">Other episodes</h1>
      {seasons.map((item) => (
        <Fragment key={item.season_number}>
          <div
            className="flex gap-2 mt-1 bg-dark-lighten rounded overflow-hidden cursor-pointer hover:brightness-90 transition duration-300"
            onClick={() =>
              opened === item.season_number
                ? setOpened(undefined)
                : setOpened(item.season_number)
            }
          >
            <div className="w-[45px] h-[68px] flex-shrink-0">
              <Image
                className="w-full h-full"
                src={imageResize(item.poster_path, "w45")}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1
                className={`text-lg transition ${
                  opened === item.season_number ? "text-orange" : ""
                }`}
              >
                {item.name}
              </h1>
            </div>
          </div>

          {opened === item.season_number && (
            <div className="flex flex-col gap-2">
              {item.episodes.map((child) => (
                <Link
                  key={child.episode_number}
                  href={`/tv/${data.id}/episode?season=${item.season_number}&episode=${child.episode_number}`}
                >
                  <div className="flex items-center bg-dark-darken w-full rounded-lg overflow-hidden cursor-pointer hover:brightness-[80%] transition duration-300">
                    <Image
                      className="w-[154px] h-[87px] flex-shrink-0 mr-4 object-cover rounded-md"
                      src={imageResize(child.still_path, "w154")}
                      alt=""
                    />
                    <div className="flex-grow">
                      <p
                        className={`${
                          child.episode_number === currentEpisodeId
                            ? "text-orange"
                            : ""
                        }`}
                      >
                        Episode {child.episode_number}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
