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
import { useMemo, useState } from 'react';
import { ReactComponent as IconMagnifier } from 'assets/images/icons/icon_maginifier.svg';
import { AccountRanking } from 'domains/ranking/ranking.types';
import { isEmpty } from 'lodash';
import classNames from 'classnames';
import styles from './rankingPanel.module.scss';
import RankingResult from './rankingResult';

const isAccountNumber = (accountNumber: string) => /^(xdc)?[0-9a-f]{40}$/i.test(accountNumber);
const isNumericString = (string: string) => string.replace(/ /g, '').match(/^[0-9]+$/) !== null;

function RankingPanel() {
  const [searchValue, setSearchValue] = useState<string>('');
  const searchChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  const searchInputValid = useMemo(() => {
    if (isEmpty(searchValue)) {
      return true;
    }
    if (isAccountNumber(searchValue)) {
      return true;
    }
    if (isNumericString(searchValue)) {
      return true;
    }

    return false;
  }, [searchValue]);

  // @todo: fetch mocked data
  const ranking = {
    type: 'account',
    balance: 123546,
    transactions: 534,
    account: 'xdc12315q8b3aw57865s52qw31as5d78v98bvas6490',
    accountsRicher: 1234,
    accountsPoorer: 4568,
  } as AccountRanking;

  return (
    <Card>
      <CardTitle>
        <div className="float-left">
          <span className="font-bold">Ranking</span>
        </div>
      </CardTitle>
      <CardBody>
        {/* filters section */}
        <InputGroup className={styles.rankingSearch}>
          <Input
            type="text"
            placeholder="Account Number or XDC amount"
            value={searchValue}
            onChange={searchChange}
            className={classNames({
              [styles.invalid]: !searchInputValid,
            })}
          />
          <Button
            type="button"
            color="primary"
            className="primary ml-3"
            disabled={!searchInputValid}
          >
            <IconMagnifier />
          </Button>
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
        <RankingResult ranking={ranking} />
      </CardBody>
    </Card>
  );
}

export default RankingPanel;
