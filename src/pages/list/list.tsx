import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';
import RankingPanel from './rankingPanel';

function ListPage() {
  return (
    <div>
      <Row>
        <Col xs="12" md="9">
          <Card>
            <CardTitle>
              <span className="font-bold">List</span>
            </CardTitle>
            <CardBody>
              todo list
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="3">
          <RankingPanel />
        </Col>
      </Row>
    </div>
  );
}

export default ListPage;
