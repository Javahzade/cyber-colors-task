import { useCallback, useState } from "react";
import { ListItemModel } from "../../models/ListModel";
import debounce from "lodash/debounce";

interface ListVMProps {
  list: ListItemModel[];
}
export interface ListVM {
  list: ListItemModel[];
  selectedItems: ListItemModel[];
  selectedAll: boolean;
  handleSelectAll: () => void;
  handleDeSelectAll: () => void;
  handleSelect: (newItem: ListItemModel) => void;
}

export const useListVM = ({ list }: ListVMProps): ListVM => {
  const [selectedItems, setSelectedItems] = useState<ListItemModel[]>([]);
  const [selectedAll, setSelectedAll] = useState<boolean | null>(null);

  const handleSelectAll = useCallback(
    debounce((): void => {
      setSelectedItems(list);
      setSelectedAll(true);
    }, 500),
    []
  );

  const handleDeSelectAll = useCallback(
    debounce((): void => {
      setSelectedItems([]);
      setSelectedAll(false);
    }, 500),
    []
  );

  const handleSelect = useCallback(
    debounce((newItem: ListItemModel): void => {
      setSelectedAll(null);
      setSelectedItems((prev) => {
        if (
          prev.find(
            (prevItem) =>
              prevItem.name === newItem.name && prevItem.color === newItem.color
          )
        ) {
          return prev.filter(
            (prevItem) =>
              prevItem.name !== newItem.name && prevItem.color !== newItem.color
          );
        }
        return [...prev, newItem];
      });
    }, 500),
    []
  );

  return {
    list,
    selectedItems,
    selectedAll,
    handleSelectAll,
    handleDeSelectAll,
    handleSelect,
  };
};
