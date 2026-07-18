import Box from "@mui/material/Box";
import theme from "@/theme";
import ModeThemeSelector from "@/components/ModeThemeSelector";

function index() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      <ModeThemeSelector />
    </Box>
  );
}

export default index;
