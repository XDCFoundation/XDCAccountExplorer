import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import DateInfo from 'ui/common/dateInfo';
import PopoverHover from 'ui/common/popoverHover';
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
              <PopoverHover
                placement="top"
                header="Masternodes"
                content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                  et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium."
                element={<i className="icon icon-question ml-2" />}
              />
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
