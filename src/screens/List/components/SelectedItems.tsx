import { FC, Fragment, memo } from "react";
import { ListItemModel } from "../../../models/ListModel";
import "../../../layouts/style.css";

interface Props {
  items: ListItemModel[];
  onSelectAll: () => void;
  onDeSelectAll: () => void;
}

export const SelectedItems: FC<Props> = memo(
  ({ items, onSelectAll, onDeSelectAll }) => {
    return (
      <Fragment>
        <div className="Button_Options">
          <button className="Button" onClick={onSelectAll}>
            Select all
          </button>
          <button className="Button" onClick={onDeSelectAll}>
            Deselect all
          </button>
        </div>
        <h3>Selected items</h3>
        <ul className="Selected_List">
          {items.map((item) => (
            <li key={item.name + item.color}>{item.name}</li>
          ))}
        </ul>
      </Fragment>
    );
  }
);
