import { get } from 'helpers/api';
import { ChartData } from 'ui/chart/types';
import { Colors } from 'ui/chart/chart';

interface AccountsStatsDataObject {
  date: string,
  contract: number,
  token: number,
  total: number,
}

const transposeToChartFormat = (dataObj: AccountsStatsDataObject[]): ChartData => {
  const labels: string[] = [];
  const output: ChartData = {
    datasets: [
      {
        type: 'line',
        label: 'Total',
        color: Colors.orange,
        yAxisID: 'left',
        data: [] as number[],
      },
      {
        type: 'bar',
        label: 'Contracts',
        color: Colors.green,
        yAxisID: 'right',
        data: [] as number[],
      },
      {
        type: 'bar',
        label: 'Token',
        color: Colors.blue,
        yAxisID: 'right',
        data: [] as number[],
      },
    ],
  };
  dataObj.forEach((row) => {
    labels.push(row.date);
    output.datasets[0].data.push(row.total);
    output.datasets[1].data.push(row.contract);
    output.datasets[2].data.push(row.token);
  });
  output.labels = labels;

  return output;
};

const getAccountsChartData = async (filters: { [key: string]: string; }): Promise<ChartData> => get<AccountsStatsDataObject[]>('accountStats', filters)
  .then((response) => transposeToChartFormat(response));

export default {};
export { getAccountsChartData };
