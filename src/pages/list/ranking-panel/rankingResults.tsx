import RankingTrend from 'ui/ranking/ranking-trend/rankingTrend';
import RankingTop from 'ui/ranking/ranking-top/rankingTop';
import RankingAccountResult from 'ui/ranking/ranking-account-result/rankingAccountResult';
import RankingAmountResult from 'ui/ranking/ranking-amount-result/rankingAmountResult';
import { ResultAccount, ResultAmount } from 'domains/ranking/types';

interface RankingResultsProps {
  result: ResultAccount | ResultAmount;
}

function RankingResults({ result }: RankingResultsProps) {
  const percent = (result.accountsRicher / (result.accountsRicher + result.accountsPoorer)) * 100;

  return (
    <div>
      <b>Results</b>
      {
        result.type === 'account'
        && (
          <RankingAccountResult
            account={(result as ResultAccount).account || ''}
            transactions={(result as ResultAccount).transactions}
            balance={result.balance}
          />
        )
      }
      {
        result.type === 'amount'
        && (
          <RankingAmountResult balance={result.balance} />
        )
      }

      <div className="mb-2">
        <RankingTrend value={result.accountsRicher} description="Accounts have more XDC than you" />
      </div>
      <div className="mb-2">
        <RankingTop percent={percent} />
      </div>
      <div>
        <RankingTrend value={result.accountsPoorer} description="Accounts have more XDC than you" negative />
      </div>
      <div className="text-center mt-4 mb-4">
        TODO big fish badge?
      </div>
    </div>
  );
}

export default RankingResults;
