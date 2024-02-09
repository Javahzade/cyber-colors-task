import { FC, useEffect, useMemo, useState } from "react";
import { ListItemModel } from "../../../models/ListModel";
import "../../../layouts/style.css";

interface Props extends ListItemModel {
  selectedAll: boolean;
  handleSelect: (item: ListItemModel) => void;
}

export const ListItem: FC<Props> = ({
  name,
  color,
  selectedAll,
  handleSelect,
}) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selectedAll !== null) {
      setSelected(selectedAll);
    }
  }, [selectedAll]);

  const onSelect = (): void => {
    handleSelect({ name, color });
    setSelected(!selected);
  };

  return (
    <li
      className={`List__item List__item--${color} ${
        selected && "List_item--selected"
      }`}
      onClick={onSelect}
    >
      {name}
    </li>
  );
};
