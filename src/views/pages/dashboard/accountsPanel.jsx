import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import faker from 'faker';
import Chart, {Colors} from '../../../components/chart/chart';
import Filters from '../../../components/chart/filters';

const AccountsPanel = () => {
    const [data, setData] = React.useState(null);
    const [filters, setFilters] = React.useState([
        { name: '7D', value: 7 },
        { name: '1M', value: 30 },
        { name: '3M', value: 90 },
        { name: '1Y', value: 365 },
        { name: 'MAX', value: null },
    ]);
    const [timeFilter, setTimeFilter] = React.useState(7);
    const handleFilterClick = (value) => {
        setTimeFilter(value);
        setData(loadData());
    };
    const loadData = function () {
        const randomData = (sets) => {
            const data = [];
            for (let i=0; i<sets; i++) {
                data.push(faker.datatype.number({min: -1000, max: 1000}))
            }
            return data;
        }

        const sets = 30;
        return {
            labels: [ ...Array(sets).keys() ].map( i => "dataset " + (i+1)),
            datasets: [
                {
                    type: 'line',
                    label: 'Total',
                    color: Colors.orange,
                    yAxisID: 'left',
                    data: randomData(sets),
                },
                {
                    type: 'bar',
                    label: 'Contracts',
                    color: Colors.green,
                    yAxisID: 'right',
                    data: randomData(sets),
                },
                {
                    type: 'bar',
                    label: 'Token',
                    color: Colors.blue,
                    yAxisID: 'right',
                    data: randomData(sets),
                },
            ],
        }
    }

    // on mount
    React.useEffect(() => { setData(loadData()) }, []);

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <div className="float-left">
                        <span>Accounts</span>
                        <span className="small ml-2">todo some date here</span>
                    </div>
                    <div className="float-right">
                        <span><i className="fa fa-filter text-primary"/> todo filters</span>
                    </div>
                </CardTitle>
                <CardBody>
                    <Chart data={data} height={100} scales={{left: "Total", right: "Value"}}/>
                    <Filters
                        title="Time"
                        items={filters}
                        value={timeFilter}
                        onSelect={handleFilterClick}
                    />
                </CardBody>
            </Card>
        </div>
    );
}

export default AccountsPanel;
