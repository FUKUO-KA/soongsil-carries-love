import ReactDOM from 'react-dom';
import { StyledModal, StyledModalBackground } from './Modal.style';
import { StyledTitlePin, StyledTitlePinContainer } from '@/pages/LoginRegister/LoginRegister.style';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal') as HTMLElement;

  return ReactDOM.createPortal(
    <StyledModalBackground onClick={onClose}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <StyledTitlePinContainer>
          <StyledTitlePin $width="LONG" />
          <StyledTitlePin $width="SHORT" />
        </StyledTitlePinContainer>
        {children}
      </StyledModal>
    </StyledModalBackground>,
    modalRoot
  );
};
