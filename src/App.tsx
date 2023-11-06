import React from "react";
import "./App.css";
import ServiceList from "./components/ServiceList";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Huddo Boards Services
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          background:
            "url(public/background.png) no-repeat center center fixed",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container component="main" maxWidth="sm">
          <Box my={4}>
            <ServiceList />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default App;
