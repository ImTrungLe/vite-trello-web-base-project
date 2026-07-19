import Box from "@mui/material/Box";

import Column from "./Column";
import Button from "@mui/material/Button";

import NoteAddIcon from "@mui/icons-material/NoteAdd";

const ListColumns = () => {
  return (
    <Box
      sx={{
        backgroundColor: "inherit",
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": { m: 2 },
      }}
    >
      <Column />
      <Box
        sx={{
          width: "200px",
          flexShrink: 0,
          mx: 2,
          height: "fit-content",
          borderRadius: "6px",
          backgroundColor: "#ffffff3d",
        }}
      >
        <Button
          startIcon={<NoteAddIcon />}
          sx={{ color: "white", width: "100%" }}
        >
          Add new Column
        </Button>
      </Box>
    </Box>
  );
};

export default ListColumns;
