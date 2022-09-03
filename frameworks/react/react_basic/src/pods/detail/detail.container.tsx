import { getMemberDetail } from "@core/apis/github.service";
import { mapMemberApimodelToMemberViewmodel } from "@pods/list/list.mapper";
import { MemberViewModel } from "@pods/list/list.viewmodel";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailComponent } from "./detail.component";

interface DetailState {
  id: string;
  member: MemberViewModel;
}

export const DetailContainer: React.FC = () => {
  const [detailState, setDetailState] = React.useState({
    member: null,
  });
  const { member } = detailState;
  const { id } = useParams();

  React.useEffect(() => {
    getMemberDetail(id)
      .then((memberApimodel) =>
        mapMemberApimodelToMemberViewmodel(memberApimodel)
      )
      .then((member) => setDetailState({ ...detailState, ...{ member } }));
  });

  return <>{member ? <DetailComponent member={member} /> : "Loading..."};</>;
};
