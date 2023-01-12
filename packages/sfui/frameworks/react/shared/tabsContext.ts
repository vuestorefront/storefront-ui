import { createContext } from 'react';
import type { VsfTabsProps } from '../components/VsfTabs/types';

const props: VsfTabsProps = {};
const TabsContext = createContext(props);
export default TabsContext;
