import { MemberApimodel } from "@core/apis/github.apimodel";
import { MemberViewModel } from "./list.viewmodel";

export const mapMemberApimodelToMemberViewmodel = (
  member: MemberApimodel
): MemberViewModel => {
  return {
    id: member.id.toString(),
    login: member.login,
    avatarUrl: member.avatar_url,
  };
};

export const mapMembersApimodelToMembersViewModel = (
  members: MemberApimodel[]
): MemberViewModel[] => members.map(mapMemberApimodelToMemberViewmodel);
