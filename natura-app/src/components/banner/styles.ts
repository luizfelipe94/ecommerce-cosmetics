"use client";

import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  background-color: #f0f0f0;
  overflow: hidden;
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 13%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: #fff;
  padding: 20px;
`;