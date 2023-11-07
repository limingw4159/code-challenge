import React from "react";
import useFetch from "../hooks/useFetch";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Paper from "@mui/material/Paper";

const ServiceList: React.FC = () => {
  const { data, isLoading, error } = useFetch<Service[]>("");

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert sx={{ width: "100%" }} severity="error">
        Error fetching services: {error}
      </Alert>
    );
  }

  return (
    <List sx={{ width: "100%" }}>
      {data?.map((service, index) => (
        <Paper
          key={index}
          elevation={1}
          sx={{ my: 1, mx: 2, "&:hover": { boxShadow: 6 } }}
        >
          <ListItem
            alignItems="flex-start"
            sx={{ "&:hover": { bgcolor: "action.hover" }, marginBottom: 3 }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[500] }}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="h6" component="div">
                  {service.name}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {service.version}
                </Typography>
              }
            />
          </ListItem>
        </Paper>
      ))}
    </List>
  );
};

export default ServiceList;
