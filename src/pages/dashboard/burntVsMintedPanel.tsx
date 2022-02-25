import { Card, CardBody, CardTitle } from 'reactstrap';
import { subDays } from 'date-fns';
import { useState, useMemo } from 'react';
import Filters, { FilterValue } from 'ui/filters/filters';
import Chart from 'ui/chart/chart';
import { ChartSeries, Colors } from 'ui/chart/chart.types';
import DateInfo from 'ui/date-info/dateInfo';
import { DEFAULT_TIME_FILTERS, TimeFilters } from 'domains/time-filters/timeFilters';
import useBurntMintedTotalSupply from 'domains/burntVsMintedvsTotalSupply/useBurntMintedTotalSupply';
import { BurntMintedTotalSupplyStatsDto } from 'domains/burntVsMintedvsTotalSupply/burntMintedTotalSupply.types';

const placeholderData: ChartSeries = ({ datasets: [], labels: [] });

function BurntVsMintedPanel() {
  const [timeFilter, setTimeFilter] = useState<FilterValue>(7);

  const getFilters = useMemo(() => {
    const filtersObj: TimeFilters = { date_lte: new Date() };
    if (timeFilter) {
      filtersObj.date_gte = subDays(Date.now(), timeFilter as number);
    }
    return filtersObj;
  }, [timeFilter]);

  const transposeToChartFormat = (dataObj: BurntMintedTotalSupplyStatsDto[]) => {
    const output: ChartSeries = {
      datasets: [
        {
          type: 'bar',
          label: 'Burnt',
          color: Colors.blue,
          yAxis: 'right',
          data: [] as number[],
        },
        {
          type: 'bar',
          label: 'Minted',
          color: Colors.green,
          yAxis: 'right',
          data: [] as number[],
        },
        {
          type: 'line',
          label: 'Total supply',
          color: Colors.orange,
          yAxis: 'left',
          data: [] as number[],
        },
      ],
      labels: [],
    };
    dataObj.forEach((row) => {
      output.labels.push(row.date);
      output.datasets[0].data.push(row.burnt);
      output.datasets[1].data.push(row.minted);
      output.datasets[2].data.push(row.totalSupply);
    });

    return output;
  };

  const { data } = useBurntMintedTotalSupply(getFilters);

  const chartData = useMemo(() => transposeToChartFormat(data ?? []), [data]);

  return (
    <div>
      <Card>
        <CardTitle>
          <div className="float-left">
            <span className="font-bold">Burnt vs Minted XDC vs Total supply</span>
            <DateInfo date={new Date()} />
          </div>
        </CardTitle>
        <CardBody>
          <Chart
            series={chartData ?? placeholderData}
            height={300}
            scales={{ rightEnabled: true }}
          />
          <Filters
            items={DEFAULT_TIME_FILTERS}
            value={timeFilter}
            onSelect={setTimeFilter}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default BurntVsMintedPanel;
