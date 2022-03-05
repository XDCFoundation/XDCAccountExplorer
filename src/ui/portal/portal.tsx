import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ROOT_PORTAL = 'root-portal';

export function PortalContainer() {
  return <div id={ROOT_PORTAL} />;
}

function Portal({ children }: PropsWithChildren<unknown>) {
  const [containerElement, setContainerElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.createElement('div');
    const rootElement = document.getElementById(ROOT_PORTAL);

    if (rootElement) {
      rootElement.appendChild(element);
      setContainerElement(element);
    }

    return () => {
      rootElement?.removeChild(element);
    };
  }, []);

  if (!containerElement) {
    return null;
  }

  return createPortal(children, containerElement);
}

export default Portal;
