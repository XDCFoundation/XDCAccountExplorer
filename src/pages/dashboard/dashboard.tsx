import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import DateInfo from 'ui/date-info/dateInfo';
import AccountsPanel from './accountsPanel';
import MasternodesPanel from './masternodesPanel';

function DashboardPage() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <AccountsPanel />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <MasternodesPanel />
        </div>
        <div className="col-6">
          <Card>
            <CardTitle>
              <span className="font-bold">Burnt vs Minted</span>
              <DateInfo date={new Date()} />
            </CardTitle>
            <CardBody>
              todo: content here
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
