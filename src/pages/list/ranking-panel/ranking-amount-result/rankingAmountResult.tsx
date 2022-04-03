import formatNumber from 'util/number/formatNumber';

interface RankingAmountResultProps {
  balance: number;
}

function RankingAmountResult({ balance }: RankingAmountResultProps) {
  return (
    <div className="text-center mt-2 mb-3">
      <h4>
        With account balance of
        <br />
        {formatNumber(balance)}
        {' '}
        XDC
      </h4>
      <div>
        Your stats would be:
      </div>
    </div>
  );
}

export default RankingAmountResult;
