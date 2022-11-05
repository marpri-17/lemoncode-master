import Axios, { AxiosResponse } from "axios";
import { MemberApimodel } from "./github.apimodel";
/**
 * Get user list by organization name from github
 * @returns members list
 */
export const getOrganizationMembersList = (
  organizationName: string,
  pageSize: number | string,
  currentPage: number | string
): Promise<AxiosResponse<MemberApimodel[]>> => {
  const url = `https://api.github.com/orgs/${organizationName}/members?per_page=${pageSize}&page=${currentPage}`;
  return Axios.get(url);

  /*  return fetch(
    `https://api.github.com/orgs/${organizationName}/members?per_page=10&page=2`
  ).then(
    (response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    } else {
        throw new Error("Organization doesn't obtain results");
        
      }
  ); */
};

/**
 * Get user detail from github
 * @returns member requested
 */
export const getMemberDetail = (login: string): Promise<MemberApimodel> => {
  return fetch(`https://api.github.com/users/${login}`).then((response) =>
    response.json()
  );
};
