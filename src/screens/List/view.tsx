import { Fragment, memo, useMemo } from "react";
import { ListVM } from "./vm";
import { ListItem } from "./components/ListItem";
import "../../layouts/style.css";
import { SelectedItems } from "./components/SelectedItems";

const List: React.FC<ListVM> = ({
  list,
  selectedAll,
  selectedItems,
  handleSelect,
  handleSelectAll,
  handleDeSelectAll,
}) => {
  const renderList = useMemo(() => {
    return (
      <ul className="List">
        {list.map((item) => (
          <ListItem
            key={item.name + item.color}
            {...item}
            selectedAll={selectedAll}
            handleSelect={handleSelect}
          />
        ))}
      </ul>
    );
  }, [list, selectedAll]);

  return (
    <Fragment>
      <SelectedItems
        items={selectedItems}
        onSelectAll={handleSelectAll}
        onDeSelectAll={handleDeSelectAll}
      />
      {renderList}
    </Fragment>
  );
};

export const ListView = memo(List);
