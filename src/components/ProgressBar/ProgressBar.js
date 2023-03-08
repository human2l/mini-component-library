/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
const SIZE = {
  small: {
    "border-radius": "4px",
    inner100BorderRadius: "4px",
    innerBorderRadius: "4px 0 0 4px",
    height: "8px",
    padding: "0px",
  },
  medium: {
    "border-radius": "4px",
    inner100BorderRadius: "4px",
    innerBorderRadius: "4px 0 0 4px",
    height: "12px",
    padding: "0px",
  },
  large: {
    "border-radius": "8px",
    inner100BorderRadius: "4px",
    innerBorderRadius: "4px 0 0 4px",
    height: "24px",
    padding: "4px",
  },
};

const Wrapper = styled.progress`
  color: ${COLORS.primary};
  width: 370px;
  height: ${(p) => SIZE[p.size].height};
  background: ${COLORS.transparentGray15};

  &::-webkit-progress-value {
    border-radius: ${(p) =>
      p.value === 100
        ? SIZE[p.size].inner100BorderRadius
        : SIZE[p.size].innerBorderRadius};

    background: ${COLORS.primary};
  }

  &::-webkit-progress-bar {
    border-radius: ${(p) => SIZE[p.size].inner100BorderRadius};
    background: rgba(0, 0, 0, 0);
  }
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${(p) => SIZE[p.size]["border-radius"]};
  padding: ${(p) => SIZE[p.size].padding};
`;

const ProgressBar = ({ value, size }) => {
  console.log(SIZE[size]["border-radius"]);
  return <Wrapper value={value} max="100" size={size} />;
};

export default ProgressBar;
