import { useState } from 'react';
import { uniqueId } from 'lodash';
import type { Placement } from '@popperjs/core';
import {
  Popover,
  PopoverBody,
  PopoverHeader,
} from 'reactstrap';

interface PopoverHoverProps {
  header?: string,
  content: string,
  placement: Placement
  element: React.ReactNode,
}

function PopoverHover({
  header,
  content,
  placement,
  element,
}: PopoverHoverProps) {
  const [popoverId] = useState(() => uniqueId('popover-'));
  const [popoverOpen, setPopoverOpen] = useState(false);
  const show = () => setPopoverOpen(true);
  const hide = () => setPopoverOpen(false);

  return (
    <span>
      <span role="presentation" id={popoverId} onMouseEnter={show} onMouseLeave={hide}>
        {element}
      </span>
      <Popover
        placement={placement}
        isOpen={popoverOpen}
        target={popoverId}
      >
        { !!header && <PopoverHeader>{header}</PopoverHeader> }
        <PopoverBody>{content}</PopoverBody>
      </Popover>
    </span>
  );
}

export default PopoverHover;
