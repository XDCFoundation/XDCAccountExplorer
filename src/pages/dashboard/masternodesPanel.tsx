import { Card, CardTitle, CardBody } from 'reactstrap';
import DateInfo from 'ui/date-info/dateInfo';
import PopoverHover from 'ui/popover-hover/popoverHover';
import { ReactComponent as IconQuestion } from 'assets/images/icons/icon_question.svg';
import Filters, { FilterValue } from 'ui/filters/filters';
import { subDays } from 'date-fns';
import { useState, useMemo } from 'react';
import { ChartSeries, Colors } from 'ui/chart/chart.types';
import Chart from 'ui/chart/chart';
import useMasternodes from 'domains/masternodes/useMasternodes';
import { DEFAULT_TIME_FILTERS, TimeFilters } from 'domains/time-filters/timeFilters';
import styles from './masternodesPanel.module.scss';

function MasternodesPanel() {
  const [timeFilter, setTimeFilter] = useState<FilterValue>(7);

  const getFilters = useMemo(() => {
    const filtersObj: TimeFilters = { date_lte: new Date() };
    if (timeFilter) {
      filtersObj.date_gte = subDays(Date.now(), timeFilter as number);
    }
    return filtersObj;
  }, [timeFilter]);

  const transposeToChartFormat = (dataObj: MasternodesDataObject[]) => {
    const output: ChartSeries = {
      datasets: [
        {
          type: 'line',
          label: 'Total',
          color: Colors.blue,
          yAxis: 'right',
          data: [] as number[],
        },
        {
          type: 'line',
          label: 'Validators',
          color: Colors.green,
          yAxis: 'right',
          data: [] as number[],
        },
      ],
      labels: [],
    };
    dataObj.forEach((row) => {
      output.labels.push(row.date);
      output.datasets[0].data.push(row.total);
      output.datasets[1].data.push(row.validators);
    });

    return output;
  };

  const { data } = useMasternodes.useMasternodes(getFilters);

  const chartData = useMemo(() => transposeToChartFormat(data ?? []), [data]);
  return (
    <Card>
      <CardTitle>
        <span className="font-bold">Masternodes</span>
        <PopoverHover
          placement="top"
          header="Masternodes"
          content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
          ultricies nec, pellentesque eu, pretium."
          element={<IconQuestion className={styles.iconQuestion} />}
        />
        <DateInfo date={new Date()} />
      </CardTitle>
      <CardBody>
        <Chart
          series={chartData}
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
  );
}

export default MasternodesPanel;
