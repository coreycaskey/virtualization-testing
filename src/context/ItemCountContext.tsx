import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

interface ItemCountContextType {
  itemCount: number;
  setItemCount: (itemCount: number) => void;
}

const DEFAULT_ITEM_COUNT_CONTEXT: ItemCountContextType = {
  itemCount: 0,
  setItemCount: () => {},
};

const ItemCountContext = createContext<ItemCountContextType>(
  DEFAULT_ITEM_COUNT_CONTEXT,
);

export const ItemCountProvider = ({ children }: PropsWithChildren) => {
  const [itemCount, setItemCount] = useState(0);

  const value = useMemo(
    () => ({ itemCount, setItemCount }),
    [itemCount, setItemCount],
  );

  return (
    <ItemCountContext.Provider value={value}>
      {children}
    </ItemCountContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useItemCountContext = () => useContext(ItemCountContext);
