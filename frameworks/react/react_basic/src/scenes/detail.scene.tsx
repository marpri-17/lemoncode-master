import { AppLayout } from "@layouts/app.kayout";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailScene: React.FC = () => {
  const { id } = useParams();

  return (
    <AppLayout>
      <h3>User Id: {id}</h3>
      <Link to="/list">Back to list page</Link>
    </AppLayout>
  );
};
