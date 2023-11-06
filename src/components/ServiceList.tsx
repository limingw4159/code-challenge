import React from "react";
import useFetch from "../hooks/useFetch";

const ServiceList: React.FC = () => {
  const { data, isLoading, error } = useFetch<Service[]>("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Fetch Service Failed</div>;

  return (
    <ul>
      {data?.map((service, index) => (
        <li key={index}>{service.name}</li>
      ))}
    </ul>
  );
};

export default ServiceList;
