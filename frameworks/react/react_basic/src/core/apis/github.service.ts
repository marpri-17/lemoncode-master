import Axios, { AxiosError, AxiosResponse } from "axios";
import { MemberApimodel } from "./github.apimodel";
/**
 * Get user list by organization name from github
 * @returns members list
 */
export const getOrganizationMembersList = (
  organizationName: string
): Promise<MemberApimodel[] | AxiosError> => {
  const url = `https://api.github.com/orgs/${organizationName}/members?`;
  return Axios.get(url)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch(() => new AxiosError("No organization found"));
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
