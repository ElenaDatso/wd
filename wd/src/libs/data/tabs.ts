import { PiOfficeChairFill } from 'react-icons/pi';
import { FaHome } from 'react-icons/fa';

import { PropertyTabInfoType } from '../../libs/interfaces';
export const tabs: PropertyTabInfoType[] = [
  {
    tabText: 'Office',
    tabicon: PiOfficeChairFill,
    isActive: true,
  },
  {
    tabText: 'House',
    tabicon: FaHome,
    isActive: false,
  },
];
