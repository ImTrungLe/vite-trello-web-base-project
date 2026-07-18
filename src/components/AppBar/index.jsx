import { useState } from "react";

import theme from "@/theme";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import ModeThemeSelector from "@/components/ModeThemeSelector";
import Workspaces from "@/components/AppBar/Menus/Workspaces";
import Recent from "@/components/AppBar/Menus/Recent";
import Starred from "@/components/AppBar/Menus/Starred";
import Templates from "@/components/AppBar/Menus/Templates";
import Profiles from "@/components/AppBar/Menus/Profiles";

// @ts-ignore
import { ReactComponent as TrelloIcon } from "@/assets/trello.svg";
import SvgIcon from "@mui/material/SvgIcon";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const AppBar = () => {
  const isMatchWidthFeaturesMenu = useMediaQuery("(min-width:1100px)");
  const isMatchWidthSettingsMenu = useMediaQuery("(min-width:650px)");

  // Drawer state
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Drawer content
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 1,
          p: 2,
        }}
      >
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button
          variant="outlined"
          color="primary"
          size="small"
          sx={{ width: "100%" }}
        >
          Create
        </Button>
      </Box>
      {!isMatchWidthSettingsMenu && <Divider />}
      {!isMatchWidthSettingsMenu && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 1,
            p: 2,
          }}
        >
          <TextField
            id="outlined-search"
            label="Search ..."
            type="search"
            size="small"
            sx={{ width: "100%", mb: 1 }}
          />
          <Box sx={{ width: "100%" }}>
            <ModeThemeSelector sx={{ width: "100%" }} />
          </Box>
        </Box>
      )}
    </Box>
  );

  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          onClick={toggleDrawer(!isMatchWidthFeaturesMenu)}
          sx={{ p: 0, minWidth: "auto" }}
        >
          <AppsIcon sx={{ color: "primary.main" }} fontSize="small" />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <SvgIcon
            sx={{ color: "primary.main" }}
            component={TrelloIcon}
            inheritViewBox
            fontSize="small"
          />
          <Typography
            variant="body1"
            component="span"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box
          sx={{
            display: isMatchWidthFeaturesMenu ? "flex" : "none",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined" color="primary" size="small">
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            display: isMatchWidthSettingsMenu ? "flex" : "none",
            alignItems: "center",
            gap: 1,
          }}
        >
          <TextField
            id="outlined-search"
            label="Search ..."
            type="search"
            size="small"
            sx={{ minWidth: "120px" }}
          />
          <ModeThemeSelector />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot">
              <NotificationsNoneIcon
                sx={{ color: "primary.main", cursor: "pointer" }}
              />
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <HelpOutlineIcon
              sx={{ color: "primary.main", cursor: "pointer" }}
            />
          </Tooltip>

          <Profiles />
        </Box>
      </Box>
    </Box>
  );
};

export default AppBar;
