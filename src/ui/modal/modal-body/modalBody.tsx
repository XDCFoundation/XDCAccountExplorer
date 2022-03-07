import { PropsWithChildren } from 'react';
import styles from './modalBody.module.scss';

type ModalBodyProps = PropsWithChildren<unknown>;

function ModalBody({
  children,
}: ModalBodyProps) {
  return (
    <main className={styles.body}>
      {children}
    </main>

  );
}

export default ModalBody;
