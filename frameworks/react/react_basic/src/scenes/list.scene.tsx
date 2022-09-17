import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { ListContainer } from "@pods/filtered-list/list";
import { OrganizationFilter } from "@pods/filtered-list/organizationFilter/organizationFilter";

export const ListScene: React.FC = () => {
  return (
    <AppLayout>
      <OrganizationFilter />
      <ListContainer />
    </AppLayout>
  );
};
