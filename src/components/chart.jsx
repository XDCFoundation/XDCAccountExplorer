import React, { useEffect, useRef } from 'react';

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart as ReactChart } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

function prepareOptions(options) {
    return options || {
        scales: {
            left: {
                display: true,
                type: 'linear',
                position: 'left',
                align: 'center',
                title: {
                    align: 'end',
                    display: true,
                    text: 'Your Title <I> '
                },
            },
            right: {
                display: true,
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Your Title'
                },
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };
}



const Chart = (props) => {
    const chartRef = useRef(null);
    const [ legend, setLegend ] = React.useState({});

    const prepareData = (data) => {
        data.datasets.map(ds => {
            let color = ds.color || ds.backgroundColor || ds.borderColor;
            delete ds.color;
            ds.backgroundColor = color;
            ds.borderColor = color;

            if (ds.type === 'line') {
                ds.pointRadius = ds.pointRadius || 1;
                ds.pointRadius = ds.pointRadius || 6;

                ds.tension = ds.tension || 0.1;
            }

            return ds;
        })
        return data;
    }

    // useEffect(() => {
    //     const chart = chartRef.current;
    //
    //     if (chart) {
    //         console.log('CanvasRenderingContext2D', chart.ctx);
    //         console.log('HTMLCanvasElement', chart.canvas);
    //     }
    // }, []);

    if (props.data) {
        const options = prepareOptions(props.options); // @todo
        let data = prepareData(props.data);

        // setLegend({chartRef.current.legend.legendItems})

        return (
            <>
            <ul className="mt-8">
                {legend.length && legend.map(item => {
                    return (
                        <li key={item.text}>
                            <div
                                style={{
                                    marginRight: "8px",
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: item.fillStyle
                                }}
                            />
                            {item.text}
                        </li>
                    );
                })}
            </ul>
            <ReactChart ref={chartRef} options={options} data={data} type="bar" height={100}/>
            </>
        );
    }
    return <></>
}

export default Chart;
