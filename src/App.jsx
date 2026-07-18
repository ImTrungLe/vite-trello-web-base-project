// Libraries
import { useColorScheme } from "@mui/material/styles";

// UI Components
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

// Icons
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

const ModeThemeSelector = () => {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-mode-theme-label">Mode</InputLabel>
      <Select
        labelId="select-mode-theme-label"
        id="select-mode-theme"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");

  console.log("🚀 ~ ModeToggle ~ prefersDarkMode:", prefersDarkMode);
  console.log("🚀 ~ ModeToggle ~ prefersLightMode:", prefersLightMode);

  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? (
        <DarkModeOutlinedIcon fontSize="small" />
      ) : (
        <LightModeIcon fontSize="small" />
      )}
    </Button>
  );
};

const App = () => {
  return (
    <>
      <ModeThemeSelector />
      <hr />
      <ModeToggle />
    </>
  );
};

export default App;
