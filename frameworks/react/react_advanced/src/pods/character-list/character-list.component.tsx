import React from "react";
import { SearchDebounced } from "./search-debounced/search-debounced.component";
interface CharacterViewModel {
  // TODO
  name: string;
}

interface Props {
  listItems: CharacterViewModel[];
}

export const CharactersListComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { listItems } = props;

  const onChangeFilter = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <SearchDebounced
        onChangeFilterValue={onChangeFilter}
        wrapperSx={{ justifyContent: "flex-start" }}
      />
      {
        /* TODO: LIST item with material*/
        listItems.length ? (
          <>
            <div className="list-user-list-container">
              <span className="list-header">Avatar</span>
              <span className="list-header">Id</span>
              <span className="list-header">Name</span>
              {listItems.map((item, index) => (
                <React.Fragment key={index}>{item.name}</React.Fragment>
              ))}
            </div>
          </>
        ) : (
          <> No results found </>
        )
      }
    </>
  );
};
