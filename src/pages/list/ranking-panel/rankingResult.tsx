import Trend from 'ui/ranking/trend/trend';
import Placement from 'ui/ranking/placement/placement';
import { AccountRanking, AmountRanking } from 'domains/ranking/types';
import RankingAccountResult from './ranking-account-result/rankingAccountResult';
import RankingAmountResult from './ranking-amount-result/rankingAmountResult';

interface RankingResultsProps {
  ranking: AccountRanking | AmountRanking;
}

function RankingResult({ ranking }: RankingResultsProps) {
  const percent = (ranking.accountsRicher + ranking.accountsPoorer)
    ? (ranking.accountsRicher / (ranking.accountsRicher + ranking.accountsPoorer)) * 100
    : 0;

  return (
    <div>
      <b>Results</b>
      {
        ranking.type === 'account'
        && (
          <RankingAccountResult
            account={ranking.account || ''}
            transactions={ranking.transactions}
            balance={ranking.balance}
          />
        )
      }
      {
        ranking.type === 'amount'
        && (
          <RankingAmountResult balance={ranking.balance} />
        )
      }

      <div className="mb-2">
        <Trend value={ranking.accountsRicher} description="Accounts have more XDC than you" />
      </div>
      <div className="mb-2">
        <Placement percent={percent} />
      </div>
      <div>
        <Trend value={ranking.accountsPoorer} description="Accounts have less XDC than you" negative />
      </div>
      {/*
      <div className="text-center mt-4 mb-4">
        TODO big fish badge?
      </div>
      */}
    </div>
  );
}

export default RankingResult;
