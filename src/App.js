import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Grid } from "@mui/material";
import { createTheme } from "@mui/material";

import { ThemeProvider } from "@mui/styles";

function App() {
  const theme = createTheme();
  return (
    <div>
      <ThemeProvider theme={theme}>
        
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
