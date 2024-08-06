"use client";

import styled from "styled-components";

export const BannerWrapper = styled.div`
  position: relative;
  max-width: 100%;
  height: 500px;
  background-color: #f0f0f0;
  overflow: hidden;
`;

// export const BannerContent = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 13%;
//   transform: translate(-30%, -50%);
//   z-index: 2;
//   color: #fff;
//   padding: 20px;
//   max-width: 80%;
//   box-sizing: border-box;
// `;

export const BannerContent = styled.div`
  position: absolute;
  z-index: 1;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 48px;
`;