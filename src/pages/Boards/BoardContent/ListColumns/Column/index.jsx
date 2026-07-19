import theme from "@/theme";

import Box from "@mui/material/Box";
import ListCards from "./ListCards";
import ColumnHeader from "./ColumnHeader";
import ColumnFooter from "./ColumnFooter";

const Column = () => {
  return (
    <Box
      sx={{
        width: "300px",
        flexShrink: 0,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
        ml: 2,
        borderRadius: "6px",
        height: "fit-content",
        maxHeight: `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
      }}
    >
      <ColumnHeader />

      <ListCards />

      <ColumnFooter />
    </Box>
  );
};

export default Column;
