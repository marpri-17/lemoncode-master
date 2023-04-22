import React from "react";
import { AppLayout } from "@layouts/app.layout";
import { FilteredListMembers } from "@pods/filtered-list";

export const ListScene: React.FC = () => {
  return (
    <AppLayout>
      <FilteredListMembers />
    </AppLayout>
  );
};
