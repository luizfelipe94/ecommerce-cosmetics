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
        src={image}
        alt="banner"
        layout="responsive"
        width={800}
        height={600}
        style={{ objectFit: "cover" }} // Ajusta a imagem ao contêiner
      />
      <BannerContent>
        {children}
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;