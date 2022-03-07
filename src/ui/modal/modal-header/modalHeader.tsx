import { PropsWithChildren } from 'react';
import { Button } from 'reactstrap';
import styles from './modalHeader.module.scss';

type ModalHeaderProps = PropsWithChildren<{
  onCancel: VoidFunction;
}>;

function ModalHeader({ children, onCancel }: ModalHeaderProps) {
  return (
    <header className={styles.container}>
      {children}
      <Button onClick={onCancel} close />
    </header>
  );
}

export default ModalHeader;
