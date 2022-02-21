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
import { ResultAccount } from 'domains/ranking/types';
import classNames from 'classnames';
import styles from './rankingPanel.module.scss';
import RankingResults from './rankingResults';

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

  // @todo: fetch mocked data
  const results = {
    type: 'account',
    balance: 123546,
    transactions: 534,
    account: 'xdc12315q8b3aw57865s52qw31as5d78v98bvas6490',
    accountsRicher: 1234,
    accountsPoorer: 4568,
  } as ResultAccount;

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
              [styles.invalid]: !searchValid,
            })}
          />
          <Button
            type="button"
            color="primary"
            className="primary ml-3"
            disabled={!searchValid}
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
        <RankingResults result={results} />
      </CardBody>
    </Card>
  );
}

export default RankingPanel;
