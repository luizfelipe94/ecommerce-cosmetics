"use client";

import Image from "next/image";
import { BannerContent, BannerWrapper } from "./styles";

export type BannerProps = {
  image: string;
  children: React.ReactNode;
};

const Banner = ({ children, image }: BannerProps) => {
  return (
    <BannerWrapper>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        src={image}
        alt=""
      />
      <BannerContent>
        {children}
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;