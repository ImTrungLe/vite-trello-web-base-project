import theme from "@/theme";
import Box from "@mui/material/Box";

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        width: "100%",
        height: `calc(100vh - ${parseInt(theme.trello.appBarHeight) + parseInt(theme.trello.boardBarHeight)}px)`,
        display: "flex",
        alignItems: "center",
      }}
    >
      Board content
    </Box>
  );
};

export default BoardContent;
