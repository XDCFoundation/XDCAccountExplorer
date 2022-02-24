import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';
import AccountsByTrancheTable from './accounts-by-tranche-table/accountsByTrancheTable';
import RankingPanel from './ranking-panel/rankingPanel';

function ListPage() {
  return (
    <Row>
      <Col xs="12" md="9">
        <Card>
          <CardTitle>
            <span className="font-bold">List</span>
          </CardTitle>
          <CardBody>
            <AccountsByTrancheTable />
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" md="3">
        <RankingPanel />
      </Col>
    </Row>
  );
}

export default ListPage;
