import React from "react";
import useFetch from "../hooks/useFetch";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const ServiceList: React.FC = () => {
  const { data, isLoading, error } = useFetch<Service[]>("");

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Error fetching services: {error}</Alert>;
  }

  return (
    <List>
      {data?.map((service, index) => (
        <ListItem key={index}>
          <ListItemText primary={service.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default ServiceList;
