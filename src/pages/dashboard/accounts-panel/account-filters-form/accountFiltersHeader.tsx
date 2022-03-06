import { ReactComponent as FilterIcon } from 'assets/images/icons/icon_filter.svg';

const fontColor = '#252525';

function AccountFiltersHeader() {
  return (
    <div className="d-flex align-items-center">
      <FilterIcon stroke={fontColor} />
      <h5 className="mx-2 my-0">
        Accounts
      </h5>
    </div>
  );
}

export default AccountFiltersHeader;
