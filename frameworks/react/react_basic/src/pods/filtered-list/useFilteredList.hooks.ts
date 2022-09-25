import React from "react";
import { MemberApimodel } from "@core/apis/github.apimodel";
import { getOrganizationMembersList } from "@core/apis/github.service";

export const useFilteredList = () => {
  const [organizationName, setOrganizationName] = React.useState<string>("");
  const [members, setMembers] = React.useState<MemberApimodel[]>([]);

  React.useEffect(() => {
    console.log(organizationName);
    if (organizationName !== "") {
      getOrganizationMembersList(organizationName).then((membersList) => {
        console.log(membersList);
        if (membersList) {
          // Control de error ??
          setMembers(membersList);
        }
      });
    }
  }, [organizationName]);

  return { setOrganizationName, members };
};
