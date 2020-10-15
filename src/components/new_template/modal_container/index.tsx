import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from './styles';
export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}
const TemplateModalContainer: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <div></div>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default TemplateModalContainer;