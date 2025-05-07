import { useContext } from 'react';

import { ItemCountContext } from './ItemCountContext';

export const useItemCountContext = () => useContext(ItemCountContext);
