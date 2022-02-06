import { useState } from 'react';
import { uniqueId } from 'lodash';
import type { Placement } from '@popperjs/core';
import {
  Popover,
  PopoverBody,
  PopoverHeader,
} from 'reactstrap';

interface PopoverHoverProps {
  header: string | null,
  content: string,
  placement: Placement
  element: React.ReactNode,
}

function PopoverHover(props: PopoverHoverProps) {
  const [popoverId] = useState(() => uniqueId('popover-'));
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);
  const {
    header,
    content,
    placement,
    element,
  } = props;

  return (
    <span>
      <span role="presentation" id={popoverId} onMouseEnter={toggle} onMouseLeave={toggle}>
        {element}
      </span>
      <Popover
        placement={placement}
        isOpen={popoverOpen}
        target={popoverId}
        toggle={toggle}
      >
        { header !== null && <PopoverHeader>{header}</PopoverHeader> }
        <PopoverBody>{content}</PopoverBody>
      </Popover>
    </span>
  );
}

export default PopoverHover;
