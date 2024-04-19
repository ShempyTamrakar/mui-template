import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { bgBlur } from "../../theme/css";
import { NAV, HEADER } from "./config-layout";
// import AccountPopover from "./common/account-popover";
// import LanguagePopover from "./common/language-popover";
// import NotificationsPopover from "./common/notifications-popover";
import { useResponsive } from "../../hooks/use-responsive";
import Iconify from "../iconify";
import Searchbar from "./searchbar";
import { AppBar } from "@mui/material";

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }: any) {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Searchbar />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        {/* <LanguagePopover />
        <NotificationsPopover />
        <AccountPopover /> */}
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={
        {
          boxShadow: "none",
          height: HEADER.H_MOBILE,
          zIndex: theme.zIndex.appBar + 1,
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          transition: theme.transitions.create(["height"], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(lgUp && {
            width: `calc(100% - ${NAV.WIDTH + 1}px)`,
            height: HEADER.H_DESKTOP,
          }),
        } as any
      }
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
