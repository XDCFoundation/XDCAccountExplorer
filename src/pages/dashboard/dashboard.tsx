import AccountsPanel from './accountsPanel';
import BurntVsMintedPanel from './burntVsMintedPanel';
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
          <BurntVsMintedPanel />
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
