import {
  Button,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from 'reactstrap';
import RankingTrend from 'ui/ranking/ranking-trend/rankingTrend';
import RankingTop from 'ui/ranking/ranking-top/rankingTop';
import RankingAccountResult from 'ui/ranking/ranking-account-result/rankingAccountResult';
import RankingAmountResult from 'ui/ranking/ranking-amount-result/rankingAmountResult';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import styles from './rankingPanel.module.scss';

const SEARCH_TYPE_ACCOUNT = 'account';
const SEARCH_TYPE_AMOUNT = 'amount';

const isAddress = (address: string) => /^(xdc)?[0-9a-f]{40}$/i.test(address);

function RankingPanel() {
  const [searchValue, setSearchValue] = useState<string>('');
  const searchChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  const searchValid = useMemo(() => {
    if (!searchValue.length) {
      return true;
    }
    if (isAddress(searchValue)) {
      return true;
    }
    if (searchValue.replace(/ /g, '').match(/^[0-9]+$/) !== null) {
      return true;
    }

    return false;
  }, [searchValue]);
  const searchType = useMemo(() => {
    if (searchValid) {
      return isAddress(searchValue) ? SEARCH_TYPE_ACCOUNT : SEARCH_TYPE_AMOUNT;
    }

    return null;
  }, [searchValid]);

  return (
    <Card>
      <CardTitle>
        <div className="float-left">
          <span className="font-bold">Ranking</span>
        </div>
      </CardTitle>
      <CardBody>
        {/* filters section */}
        <InputGroup>
          <Input
            type="text"
            placeholder="Account Number or XDC amount"
            value={searchValue}
            onChange={searchChange}
            className={classNames({
              [styles.invalid]: !searchValid,
            })}
          />
          <Button type="button" color="primary" className="ml-3 primary">TD</Button>
        </InputGroup>
        <FormGroup check className="m-2">
          <Input type="checkbox" color="primary" id="cb-foundation" />
          {' '}
          <Label check for="cb-foundation">
            Include XDC Foundation Accounts
          </Label>
        </FormGroup>
        <FormGroup check className="m-2">
          <Input type="checkbox" color="primary" id="cb-zero" />
          {' '}
          <Label check for="cb-zero">
            Include Zero Balance Accounts
          </Label>
        </FormGroup>
        <hr />

        {/* results section */}
        <b>Results</b>
        {
          searchType === SEARCH_TYPE_ACCOUNT
          && <RankingAccountResult account={searchValue} transactions={231} xdc={12345123} />
        }
        {searchType !== SEARCH_TYPE_ACCOUNT && <RankingAmountResult xdc={12345123} />}

        <div className="mb-2">
          <RankingTrend value={245} description="Accounts have more XDC than you" />
        </div>
        <div className="mb-2">
          <RankingTop percent={55.6} />
        </div>
        <div>
          <RankingTrend value={2343010} description="Accounts have more XDC than you" negative />
        </div>
        <div className="text-center mt-4 mb-4">
          TODO big fish badge?
        </div>
      </CardBody>
    </Card>
  );
}

export default RankingPanel;
