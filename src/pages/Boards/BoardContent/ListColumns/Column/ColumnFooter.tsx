import theme from "@/theme";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import AddCardIcon from "@mui/icons-material/AddCard";
import DragHandleIcon from "@mui/icons-material/DragHandle";

const ColumnFooter = () => {
  return (
    <Box
      sx={{
        height: theme.trello.columnFooterHeight,
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button startIcon={<AddCardIcon />}>Add new card</Button>
      <Tooltip title="Drag to move">
        <DragHandleIcon sx={{ cursor: "pointer" }} />
      </Tooltip>
    </Box>
  );
};

export default ColumnFooter;
