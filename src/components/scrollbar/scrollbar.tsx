import PropTypes from "prop-types";
import { memo, forwardRef, ReactNode, Ref } from "react";

import Box, { BoxProps } from "@mui/material/Box";

import { StyledScrollbar, StyledRootScrollbar } from "./styles";

// ----------------------------------------------------------------------

type ScrollbarProps = {
  children: ReactNode;
  sx?: BoxProps["sx"];
};

const Scrollbar = forwardRef(function Scrollbar(
  { children, sx, ...other }: ScrollbarProps,
  ref: Ref<HTMLDivElement>
) {
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent;

  const mobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );

  if (mobile) {
    return (
      <Box ref={ref} sx={{ overflow: "auto", ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar
        scrollableNodeProps={{
          ref,
        }}
        clickOnTrack={false}
        sx={sx}
        {...other}
      >
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
});

Scrollbar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default memo(Scrollbar);
