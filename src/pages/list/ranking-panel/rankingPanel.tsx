import {
  Card,
  CardBody,
  CardTitle,
  Spinner,
} from 'reactstrap';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { RankingFilters } from 'domains/ranking/ranking.types';
import useRanking from 'domains/ranking/useRanking';
import DisplayableError from 'util/displayable-error';
import RankingResult from './rankingResult';
import RankingForm from './rankingForm';

function RankingPanel() {
  const [formFilters, setFormFilters] = useState<RankingFilters | null>(null);
  const { data, error, isLoading } = useRanking(formFilters);

  useEffect(() => {
    if (error) {
      toast.error(error instanceof DisplayableError ? error.message : 'Unexpected error');
    }
  }, [error]);

  return (
    <Card>
      <CardTitle>
        <div className="float-left">
          <span className="font-bold">Ranking</span>
        </div>
      </CardTitle>
      <CardBody>
        <RankingForm onSearch={(filters) => { setFormFilters(filters); }} />
        {isLoading && <div className="text-center"><Spinner color="secondary" type="border" className="text-center">{' '}</Spinner></div>}
        {!!data && <RankingResult ranking={data} />}
      </CardBody>
    </Card>
  );
}

export default RankingPanel;
