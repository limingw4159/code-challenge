import React from "react";
import "./App.css";
import ServiceList from "./components/ServiceList";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import backgroundImage from "./assets/background.png";

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
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          height: "100vh",
          margin: 0,
          padding: 0,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
