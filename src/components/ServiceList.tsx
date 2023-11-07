import React from "react";
import useFetch from "../hooks/useFetch";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import ListItemAvatar from "@mui/material/ListItemAvatar";

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
        <ListItem key={index} alignItems="flex-start">
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
      ))}
    </List>
  );
};

export default ServiceList;
