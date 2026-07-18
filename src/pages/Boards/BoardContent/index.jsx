import theme from "@/theme";
import Box from "@mui/material/Box";

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
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
