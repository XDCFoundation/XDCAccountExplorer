import { Button, Col, Row } from 'reactstrap';

interface AccountFiltersFooterProps {
  onCancel: VoidFunction;
  onClear: VoidFunction;
  onSubmit: VoidFunction;
  submitDisabled: boolean;
}

function AccountFiltersFooter({
  onCancel,
  onClear,
  onSubmit,
  submitDisabled,
}: AccountFiltersFooterProps) {
  return (
    <Row className="g-3 flex-grow-1 flex-shrink-1">
      <Col xs={12} sm={4}>
        <Button onClick={onCancel} className="btn-transparent" block>
          Cancel
        </Button>
      </Col>
      <Col xs={12} sm={4}>
        <Button onClick={onClear} className="btn-transparent btn-outline-light" block>
          Clear
        </Button>
      </Col>
      <Col xs={12} sm={4}>
        <Button onClick={onSubmit} disabled={submitDisabled} color="primary" block>
          Apply
        </Button>
      </Col>
    </Row>
  );
}

export default AccountFiltersFooter;
