import {
  ChangeEvent,
  FC,
  Fragment,
  Suspense,
  useCallback,
  useDeferredValue,
  useMemo,
  useState,
} from "react";
import { List } from "./screens/List";
import { ListItemModel } from "./models/ListModel";
import { Header } from "./ components/Header";

interface Props {
  items: ListItemModel[];
}

export const App: FC<Props> = ({ items }) => {
  const [searchValue, setSearchValue] = useState("");
  const deferredSearchValue = useDeferredValue(searchValue);

  const onChangeSearchValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(event.target.value);
    },
    []
  );

  const onClearSearchValue = useCallback((): void => {
    setSearchValue("");
  }, []);

  const list = useMemo((): ListItemModel[] => {
    return items.filter((item) => item.name.includes(deferredSearchValue));
  }, [deferredSearchValue]);

  return (
    <Fragment>
      <Header
        value={searchValue}
        onChange={onChangeSearchValue}
        onClear={onClearSearchValue}
      />
      <List list={list} />
    </Fragment>
  );
};
