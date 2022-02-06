import { Card, CardBody, CardTitle } from 'reactstrap';

import DateInfo from 'ui/common/dateInfo';
import AccountsPanel from './accountsPanel';

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
          <Card>
            <CardTitle>
              <span className="font-bold">Masternodes</span>
              <i className="icon icon-question ml-2" />
              <DateInfo date={new Date()} />
            </CardTitle>
            <CardBody>
              todo: content here
            </CardBody>
          </Card>
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
