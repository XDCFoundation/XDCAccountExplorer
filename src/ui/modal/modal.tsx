import classNames from 'classnames';
import {
  MouseEventHandler, PropsWithChildren, ReactNode, useEffect, useRef, useState,
} from 'react';
import Portal from 'ui/portal/portal';
import ModalBody from './modal-body/modalBody';
import ModalFooter from './modal-footer/modalFooter';
import ModalHeader from './modal-header/modalHeader';
import styles from './modal.module.scss';

type ModalPosition = 'center' | 'right';

type ModalProps = PropsWithChildren<{
  className?: string;
  onCancel: VoidFunction;
  open: boolean;
  position?: ModalPosition;
  renderHeader?: () => ReactNode;
  renderFooter?: () => ReactNode;
}>;

function Modal({
  children,
  className,
  onCancel,
  open,
  position = 'center',
  renderHeader,
  renderFooter,
}: ModalProps) {
  const [visible, setVisible] = useState(false);
  const backdropRef = useRef<HTMLDivElement | null>(null);

  const closeModal: MouseEventHandler = (event) => {
    if (event.target === backdropRef.current) {
      onCancel();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(open), 1);

    return () => {
      clearTimeout(Number(timeout));
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(
          styles.container,
          styles[position],
          {
            [styles.visible]: visible,
          },
        )}
        ref={backdropRef}
        onClick={closeModal}
        role="presentation"
      >
        <div className={classNames(styles.modal, className)}>
          {!!renderHeader && (
          <ModalHeader onCancel={onCancel}>
            {renderHeader()}
          </ModalHeader>
          )}
          <div className={classNames(styles.content, styles[position])}>
            <ModalBody>
              {children}
            </ModalBody>
            {!!renderFooter && (
            <ModalFooter>
              {renderFooter()}
            </ModalFooter>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
