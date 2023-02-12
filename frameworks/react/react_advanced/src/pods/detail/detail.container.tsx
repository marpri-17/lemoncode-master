import { getMemberDetail } from "@core/apis/github.service";
import {
  MemberViewModel,
  mapMemberApimodelToMemberViewmodel,
} from "@pods/filtered-list";
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
    if (login) {
      getMemberDetail(login)
        .then((memberApimodel) =>
          mapMemberApimodelToMemberViewmodel(memberApimodel)
        )
        .then((member) => setDetailState({ ...detailState, ...{ member } }));
    }
  }, [login]);

  return <>{member ? <DetailComponent member={member} /> : "Loading..."};</>;
};
