import { useEffect } from "react";
import styled, { CSSProperties } from "styled-components";

interface ModalProps {
  onClose?: () => void;
  children: React.ReactNode;
  canClose?: boolean; // can close modal by clicking background or x button
  wrapperStyle?: CSSProperties;
  leftSidekick?: React.ReactNode;
  rightSidekick?: React.ReactNode;
}

const ModalWrapper = styled.div`
  padding: 32px;
  border-radius: 16px;
  background-color: white;
`;

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Modal = ({
  onClose,
  children,
  canClose,
  wrapperStyle,
  leftSidekick,
  rightSidekick,
}: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && canClose) {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canClose, onClose]);

  return (
    <ModalBackground onClick={canClose ? onClose : () => null}>
      <div onClick={(e) => e.stopPropagation()}>{leftSidekick}</div>

      <ModalWrapper style={wrapperStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalWrapper>
      <div onClick={(e) => e.stopPropagation()}>{rightSidekick}</div>
    </ModalBackground>
  );
};

export default Modal;
