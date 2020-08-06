import React from "react";
import PropTypes from "prop-types";
import StyledIcon from "./style.js";

export default function Icon(icon, width = 24, height = 24, color, capacity) {
  return (
    <StyledIcon color={color} capacity={capacity}>
      {<Icon height = {height} width = {width}/>}
    </StyledIcon>
  );
}

Icon.propTypes = {
  children: PropTypes.any,
};
