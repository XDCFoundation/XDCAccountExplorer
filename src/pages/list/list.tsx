import { useState } from 'react';
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';

type Item = {
  placement: 'top' | 'right' | 'bottom' | 'left';
  text: string;
};

type PopoverItemProps = {
  id: string;
  item: Item;
};

function PopoverItem({
  id,
  item,
}: PopoverItemProps) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <span>
      <Button className="mr-1" color="secondary" id={`Popover-${id}`} onClick={toggle}>
        {item.text}
      </Button>
      <Popover
        placement={item.placement}
        isOpen={popoverOpen}
        target={`Popover-${id}`}
        toggle={toggle}
      >
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
    </span>
  );
}

function ListPage() {
  const popovers: Item[] = [
    {
      placement: 'top',
      text: 'Top',
    },
    {
      placement: 'bottom',
      text: 'Bottom',
    },
    {
      placement: 'left',
      text: 'Left',
    },
    {
      placement: 'right',
      text: 'Right',
    },
  ];

  return (
    <div>
      <Row>
        <Col xs="12" md="12">
          <Card>
            <CardTitle>
              <span className="font-bold">Popovers</span>
            </CardTitle>
            <CardBody>
              {popovers.map((popover, i) => {
                const id = String(i);
                return (
                  <PopoverItem key={id} item={popover} id={id} />
                );
              })}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ListPage;
