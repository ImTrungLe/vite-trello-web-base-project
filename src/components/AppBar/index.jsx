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
import InputAdornment from "@mui/material/InputAdornment";

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
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const AppBar = () => {
  const isMatchWidthFeaturesMenu = useMediaQuery("(min-width:1100px)");
  const isMatchWidthSettingsMenu = useMediaQuery("(min-width:650px)");

  // state
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
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
          startIcon={<LibraryAddIcon />}
          sx={{
            width: "100%",
            color: "white",
            border: "none",
            "&:hover": { border: "none" },
          }}
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
            type="text"
            value={searchValue}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              endAdornment: searchValue && (
                <CloseIcon
                  sx={{ color: "white", cursor: "pointer" }}
                  fontSize="small"
                  onClick={() => setSearchValue("")}
                />
              ),
            }}
            sx={{
              minWidth: "120px",
              "& label": { color: "white" },
              "& input": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
            onChange={(e) => setSearchValue(e.target.value)}
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
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          onClick={toggleDrawer(!isMatchWidthFeaturesMenu)}
          sx={{ p: 0, minWidth: "auto" }}
        >
          <AppsIcon sx={{ color: "white" }} fontSize="small" />
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
            sx={{ color: "white" }}
            component={TrelloIcon}
            inheritViewBox
            fontSize="small"
          />
          <Typography
            variant="body1"
            component="span"
            sx={{
              color: "white",
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
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              color: "white",
              border: "none",
              "&:hover": { border: "none" },
            }}
            startIcon={<LibraryAddIcon />}
          >
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
            type="text"
            size="small"
            value={searchValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
              endAdornment: searchValue && (
                <CloseIcon
                  sx={{ color: "white", cursor: "pointer" }}
                  fontSize="small"
                  onClick={() => setSearchValue("")}
                />
              ),
            }}
            sx={{
              minWidth: "120px",
              maxWidth: "170px",
              "& label": { color: "white" },
              "& input": { color: "white" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
            }}
            onChange={(e) => setSearchValue(e.target.value)}
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
            <Badge color="warning" variant="dot">
              <NotificationsNoneIcon
                sx={{ color: "white", cursor: "pointer" }}
              />
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ color: "white", cursor: "pointer" }} />
          </Tooltip>

          <Profiles />
        </Box>
      </Box>
    </Box>
  );
};

export default AppBar;
