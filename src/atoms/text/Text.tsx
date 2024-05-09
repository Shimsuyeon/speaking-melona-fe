import React from "react";
import styled, { css } from "styled-components";

import Font from "../../styles/font";

export interface TextProps {
  color?: React.CSSProperties["color"];
  font?: Font;
  size?: React.CSSProperties["fontSize"];
  textAlign?: React.CSSProperties["textAlign"];
  decoration?: React.CSSProperties["textDecoration"];
}

// 폰트별 letter-spacing 도 추가해야할 수도

const Text = styled.p<TextProps>`
  margin: 0;
  font-weight: inherit;
  ${({ font }) => {
    switch (font) {
      case Font.Bold:
        return css`
          font-family: "Pretendard", sans-serif;
          font-weight: 700;
        `;
      case Font.SemiBold:
        return css`
          font-family: "Pretendard", sans-serif;
          font-weight: 600;
        `;
      case Font.Medium:
        return css`
          font-family: "Pretendard", sans-serif;
          font-weight: 500;
        `;
      case Font.Regular:
        return css`
          font-family: "Pretendard", sans-serif;
          font-weight: 400;
        `;
      case Font.GmarketSans:
        return css`
          font-family: "GmarketSansBold";
        `;
    }
  }}
  font-size: ${({ size }) => size ?? undefined};
  line-height: 1.2;
  text-align: ${({ textAlign }) => textAlign ?? "inherit"};
  color: ${({ color }) => color ?? "inherit"};
  text-decoration: ${({ decoration }) => decoration ?? "inherit"};
`;

export default Text;
