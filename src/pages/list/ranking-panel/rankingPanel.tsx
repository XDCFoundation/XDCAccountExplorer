import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { useState } from 'react';
import { RankingFilters } from 'domains/ranking/types';
import getRanking from 'domains/ranking/getRanking';
import RankingResult from './rankingResult';
import RankingForm from './rankingForm';

function RankingPanel() {
  const [formFilters, setFormFilters] = useState<RankingFilters>({} as RankingFilters);
  const { data } = getRanking(formFilters);

  return (
    <Card>
      <CardTitle>
        <div className="float-left">
          <span className="font-bold">Ranking</span>
        </div>
      </CardTitle>
      <CardBody>
        <RankingForm onSearch={(filters) => { setFormFilters(filters); }} />
        {data !== undefined && <RankingResult ranking={data} />}
      </CardBody>
    </Card>
  );
}

export default RankingPanel;
