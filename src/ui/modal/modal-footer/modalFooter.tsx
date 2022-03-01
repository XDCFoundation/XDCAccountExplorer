import { PropsWithChildren } from 'react';
import styles from './modalFooter.module.scss';

type ModalFooterProps = PropsWithChildren<unknown>;

function ModalFooter({
  children,
}: ModalFooterProps) {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  );
}

export default ModalFooter;
