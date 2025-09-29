"use client";

import { FC, useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";

interface CustomImageProps extends Omit<NextImageProps, "onLoad"> {
  opacity?: number;
}

const Image: FC<CustomImageProps> = ({
  style,
  opacity = 1,
  width = 500,
  height = 750,
  ...others
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <NextImage
      style={{
        ...style,
        transition: "0.3s",
        opacity: loaded ? opacity : 0,
      }}
      width={typeof width === "string" ? parseInt(width) || 500 : width}
      height={typeof height === "string" ? parseInt(height) || 750 : height}
      onLoad={handleLoad}
      {...others}
    />
  );
};

export default Image;
