import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';
import AccountsByTrancheTable from './accounts-by-tranche-table/accountsByTrancheTable';

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
        <Card>
          <CardTitle>
            <span className="font-bold">Ranking</span>
          </CardTitle>
          <CardBody>
            todo ranking
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default ListPage;
