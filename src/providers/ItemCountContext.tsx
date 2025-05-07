import { createContext } from 'react';

interface ItemCountContextType {
  itemCount: number;
  setItemCount: (itemCount: number) => void;
}

const DEFAULT_ITEM_COUNT_CONTEXT: ItemCountContextType = {
  itemCount: 0,
  setItemCount: () => {},
};

export const ItemCountContext = createContext<ItemCountContextType>(
  DEFAULT_ITEM_COUNT_CONTEXT
);
