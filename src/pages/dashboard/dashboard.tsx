import { Col, Row } from 'reactstrap';
import AccountsPanel from './accountsPanel';
import SupplyPanel from './supplyPanel';
import MasternodesPanel from './masternodesPanel';

function DashboardPage() {
  return (
    <>
      <Row>
        <Col lg="12" xl="12">
          <AccountsPanel />
        </Col>
      </Row>
      <Row>
        <Col lg="12" xl="6">
          <MasternodesPanel />
        </Col>
        <Col lg="12" xl="6">
          <SupplyPanel />
        </Col>
      </Row>
    </>
  );
}

export default DashboardPage;
