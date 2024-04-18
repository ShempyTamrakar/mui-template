import { forwardRef, Ref } from 'react';
import { Icon } from '@iconify/react';
import Box, { BoxProps } from '@mui/material/Box';

interface IconifyProps extends BoxProps {
  icon: string; 
  width?: number; 
}
const Iconify = forwardRef(function Iconify(
  { icon, width = 20, sx, ...other }: IconifyProps,
  ref: Ref<HTMLDivElement> 
) {
  return (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  );
});

export default Iconify;
