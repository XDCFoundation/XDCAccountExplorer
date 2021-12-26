import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import faker from 'faker';
import Chart from '../../components/chart';

const DashboardPage = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const [ data, setData ] = React.useState(false);
    React.useEffect(() => {
        setData({
            labels,
            datasets: [
                {
                    type: 'line',
                    label: 'Dataset 1',
                    color: 'rgb(255, 99, 132)',
                    yAxisID: 'left',
                    data: [
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                    ],
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    color: 'rgb(75, 192, 192)',
                    yAxisID: 'right',
                    data: [
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                    ],
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    color: 'rgb(53, 162, 235)',
                    yAxisID: 'right',
                    data: [
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                        faker.datatype.number({ min: -1000, max: 1000 }),
                    ],
                },
            ],
        });
    }, [])

    return (
        <div>
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    Masternodes
                </CardTitle>
                <CardBody>
                    <Chart data={data} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DashboardPage;
