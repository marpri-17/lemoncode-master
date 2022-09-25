import { MemberApimodel } from "./github.apimodel";

/**
 * Get user list by organization name from github
 * @returns members list
 */
export const getOrganizationMembersList = (
  organizationName: string
): Promise<MemberApimodel[]> => {
  return fetch(`https://api.github.com/orgs/${organizationName}/members`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
    } /* else {
        throw new Error("Organization doesn't obtain results");
        
      } */
  );
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
