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
      <BannerContent>
        {children}
      </BannerContent>
      <Image
        src={image}
        alt="banner"
        fill
        style={{ objectFit: "cover" }}
      />
    </BannerWrapper>
  );
};

export default Banner;