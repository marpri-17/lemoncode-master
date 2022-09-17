import { getMemberDetail } from "@core/apis/github.service";
import { mapMemberApimodelToMemberViewmodel } from "@pods/filtered-list/list/list.mapper";
import { MemberViewModel } from "@pods/filtered-list/list/list.viewmodel";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailComponent } from "./detail.component";

interface DetailState {
  member: MemberViewModel;
}

export const DetailContainer: React.FC = () => {
  const [detailState, setDetailState] = React.useState<DetailState>({
    member: null,
  });
  const { member } = detailState;
  const { login } = useParams();

  React.useEffect(() => {
    getMemberDetail(login)
      .then((memberApimodel) =>
        mapMemberApimodelToMemberViewmodel(memberApimodel)
      )
      .then((member) => setDetailState({ ...detailState, ...{ member } }));
  });

  return <>{member ? <DetailComponent member={member} /> : "Loading..."};</>;
};
