import React from "react";
import { MemberApimodel } from "@core/apis/github.apimodel";
import { getOrganizationMembersList } from "@core/apis/github.service";

interface Pagination {
  pageSize: number;
  currentPage: number;
  lastPage: number;
}

export const useFilteredList = () => {
  const [pagination, setPagination] = React.useState<Pagination>({
    pageSize: 5,
    currentPage: 6,
    lastPage: null,
  });
  const [organizationName, setOrganizationName] = React.useState<string>("");
  const [members, setMembers] = React.useState<MemberApimodel[]>([]);

  React.useEffect(() => {
    console.log(organizationName);
    if (organizationName !== "") {
      getOrganizationMembersList(
        organizationName,
        pagination.pageSize,
        pagination.currentPage
      ).then((membersList) => {
        console.log(membersList);
        if (membersList.data) {
          const linkHeaders = membersList.headers.link || null;
          if (linkHeaders) {
            const lastPageLinkHeader = linkHeaders
              .split(",")
              .find((header) => header.includes("last"));
            const pageNumberString = lastPageLinkHeader.split("&page");
            console.log(pageNumberString);
            // const pageNumber = pageNumberString.substring;
          }
          setMembers(membersList.data);
        } else {
          setMembers([]);
        }
      });
    }
  }, [organizationName]);

  return { setOrganizationName, members };
};
