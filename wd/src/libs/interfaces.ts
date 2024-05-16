import { IconType } from 'react-icons';
import { PropType } from './types/propety';

export interface HTMLDialogElementWithModal extends HTMLDialogElement {
  openModal: () => void;
}

export interface PropertyTabInfoType {
  tabicon: IconType;
  tabText: PropType;
  isActive: boolean;
}
