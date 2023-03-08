import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon/Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div``;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const CustomSelect = styled.div`
  position: relative;
  height: 43px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray700};
  padding: 12px 16px;
  width: max-content;
  white-space: nowrap;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <CustomSelect>
        <NativeSelect value={value} onChange={onChange}>
          {children}
        </NativeSelect>
        {value}
        <Icon id="chevron-down" size="24" />
      </CustomSelect>
    </Wrapper>
  );
};

export default Select;
