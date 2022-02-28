import AccountsPanel from './accountsPanel';
import SupplyPanel from './supplyPanel';
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
          <SupplyPanel />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
