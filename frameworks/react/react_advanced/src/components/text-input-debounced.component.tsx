import React from "react";
import { TextField } from "@mui/material";
import { useDebounce } from "use-debounce";

interface Props {
  initialValue: string;
  label: string;
  onChange: (value: string) => void;
  id?: string;
}

export const AppGenericInputDebounced: React.FC<Props> = (props) => {
  const { initialValue, label, onChange } = props;
  const [value, setValue] = React.useState<string>(initialValue);
  const [debouncedFilter] = useDebounce(value, 1000);

  const onChangeEmitter = (event: React.BaseSyntheticEvent) => {
    setValue((event.target as HTMLInputElement).value);
  };

  React.useEffect(() => onChange(value), [debouncedFilter]);

  return (
    <TextField
      id={props.id || "filled-search-debounced"}
      label={label}
      type="search"
      variant="filled"
      value={value}
      onChange={onChangeEmitter}
    />
  );
};
