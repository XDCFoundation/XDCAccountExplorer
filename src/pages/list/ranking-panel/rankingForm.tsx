import {
  Button,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from 'reactstrap';
import classNames from 'classnames';
import { ReactComponent as IconMagnifier } from 'assets/images/icons/icon_maginifier.svg';
import { useMemo, useState } from 'react';
import { RankingFilters } from 'domains/ranking/ranking.types';
import featureEnabled from 'util/feature-enabled';
import { isEmpty } from 'lodash';
import styles from './rankingForm.module.scss';

const isAccountNumber = (accountNumber: string) => /^(xdc)?[0-9a-f]{40}$/i.test(accountNumber);
const isNumericString = (string: string) => string.replace(/ /g, '').match(/^[0-9]+$/) !== null;

interface RankingFormProps {
  onSearch: (formFilters: RankingFilters) => void;
}

const rankingAmountEnabled = featureEnabled('RANKING_AMOUNT');

function RankingForm({ onSearch }: RankingFormProps) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [includeFoundation, setIncludeFoundation] = useState<boolean>(true);
  const [includeZeroBalance, setIncludeZeroBalance] = useState<boolean>(false);
  const searchChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  const searchInputValid = useMemo(() => {
    if (isEmpty(searchValue)) {
      return false;
    }
    if (isAccountNumber(searchValue)) {
      return true;
    }
    if (rankingAmountEnabled && isNumericString(searchValue)) {
      return true;
    }

    return false;
  }, [searchValue]);
  const rankingPlaceholder = rankingAmountEnabled ? 'Account Number or XDC amount' : 'Account Number';

  return (
    <div>
      <InputGroup className={styles.rankingSearch}>
        <Input
          type="text"
          placeholder={rankingPlaceholder}
          value={searchValue}
          onChange={searchChange}
          className={classNames({
            [styles.invalid]: !searchInputValid && !isEmpty(searchValue),
          })}
        />
        <Button
          type="button"
          color="primary"
          className="primary ms-3"
          disabled={!searchInputValid}
          onClick={() => onSearch({
            type: isAccountNumber(searchValue) ? 'account' : 'amount',
            input: searchValue,
            includeFoundationAccounts: includeFoundation,
            includeZeroBalanceAccounts: includeZeroBalance,
          })}
        >
          <IconMagnifier />
        </Button>
      </InputGroup>
      <FormGroup check className="m-2">
        <Input
          type="checkbox"
          color="primary"
          id="cb-foundation"
          checked={includeFoundation}
          onChange={(event) => { setIncludeFoundation(event.currentTarget.checked); }}
        />
        {' '}
        <Label check for="cb-foundation" className="mb-0">
          Include XDC Foundation Accounts
        </Label>
      </FormGroup>
      <FormGroup check className="m-2">
        <Input
          type="checkbox"
          color="primary"
          id="cb-zero"
          checked={includeZeroBalance}
          onChange={(event) => { setIncludeZeroBalance(event.currentTarget.checked); }}
        />
        {' '}
        <Label check for="cb-zero" className="mb-0">
          Include Zero Balance Accounts
        </Label>
      </FormGroup>
    </div>
  );
}

export default RankingForm;
