import { FC, PropsWithChildren, useMemo, useState } from 'react';

import { ItemCountContext } from './ItemCountContext';

interface ItemCountProviderProps extends PropsWithChildren {}

export const ItemCountProvider: FC<ItemCountProviderProps> = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);

  const value = useMemo(
    () => ({ itemCount, setItemCount }),
    [itemCount, setItemCount]
  );

  return (
    <ItemCountContext.Provider value={value}>
      {children}
    </ItemCountContext.Provider>
  );
};
