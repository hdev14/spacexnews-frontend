import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Container, ModalContainer } from './styles';

// Não consegui acha uma forma de fazer esse componente funcionar com TS.
const Modal = ({ confirm, confirm_text, children }, ref) => {
  const [open, setOpen] = useState(false);

  function toggleModal() {
    setOpen(!open);
  }

  useImperativeHandle(ref, () => ({
    toggleModal,
  }));

  if (open) {
    return (
      <Container>
        <ModalContainer>
          <div>
            {children}
          </div>
          <div className="buttons">
            <button type="button" onClick={toggleModal}>cancelar</button>
            <button type="button" onClick={confirm}>{confirm_text}</button>
          </div>
        </ModalContainer>
      </Container>
    );
  }
};

export default forwardRef(Modal);
