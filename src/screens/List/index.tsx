import { useListVM } from "./vm";
import { ListView } from "./view";
import { ListItemModel } from "../../models/ListModel";
import { Suspense } from "react";

interface Props {
  list: ListItemModel[];
}

export const List: React.FC<Props> = ({ list }) => {
  const vm = useListVM({ list });
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <ListView {...vm} />
    </Suspense>
  );
};

// index.tsx - Means Connector - Where connect VM (Logic and State) with View (UI representation).
// We can connect to index file Providers and HOC's which we need only for this module.
// ====
// vm.ts - Means View Model - Where we keep our logic and states.
// memoized handlers for control all module logic with the help hook.
// ====
// view.tsx - Means View - Where we build our ui elements.
// Memoized by React.memo and clean to read ui.
