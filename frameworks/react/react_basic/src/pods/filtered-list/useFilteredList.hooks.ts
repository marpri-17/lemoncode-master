import React from "react";
import { MemberApimodel } from "@core/apis/github.apimodel";
import { getOrganizationMembersList } from "@core/apis/github.service";

export const useFilteredList = () => {
  const [organizationName, setOrganizationName] =
    React.useState<string>("lemoncode");
  const [members, setMembers] = React.useState<MemberApimodel[]>([]);

  React.useEffect(() => {
    getOrganizationMembersList(organizationName).then((membersList) => {
      console.log(membersList);
      setMembers(membersList);
    });
  }, [organizationName]);

  return { organizationName, setOrganizationName, members };
};
