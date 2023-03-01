import React from "react";
import { MemberApimodel } from "@core/apis/github.apimodel";
import { getOrganizationMembersList } from "@core/apis/github.service";
import { AxiosError } from "axios";

const isMemberApimodel = (
  data: MemberApimodel[] | AxiosError
): data is MemberApimodel[] => {
  return Array.isArray(data);
};

export const useFilteredList = (organizationName: string) => {
  const [members, setMembers] = React.useState<MemberApimodel[]>([]);

  React.useEffect(() => {
    if (organizationName !== "") {
      getOrganizationMembersList(organizationName).then((membersList) => {
        console.log(membersList);
        if (isMemberApimodel(membersList)) {
          setMembers(membersList);
        } else {
          // error
          console.log(membersList.message);
          setMembers([]);
        }
      });
    }
  }, [organizationName]);

  return { members };
};
