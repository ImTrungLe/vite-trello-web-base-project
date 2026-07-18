import theme from "@/theme";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const CHIP_STYLE = {
  color: "white",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
  paddingX: "5px",
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    backgroundColor: "primary.50",
  },
};

const BoardBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        "&::-webkit-scrollbar-track": { m: 2 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={CHIP_STYLE}
          icon={<DashboardIcon />}
          label="Board's Antony"
          clickable
        />
        <Chip
          sx={CHIP_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={CHIP_STYLE}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={CHIP_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={CHIP_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            width: "100%",
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "white" },
          }}
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
              "&:first-of-type": { backgroundColor: "a4b0be" },
            },
          }}
        >
          {[...Array(10)].map((_, index) => (
            <Tooltip key={index} title={`User ${index + 1}`}>
              <Avatar
                alt={`User ${index + 1}`}
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
              />
            </Tooltip>
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
