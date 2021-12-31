import React, {useEffect, useRef} from 'react';

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
import {Chart as ReactChart} from 'react-chartjs-2';
// import chartScaleIconPlugin from './chartScaleIconPlugin';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const Colors = {
    blue: '#5e80ab',
    green: '#aedfd2',
    orange: '#f7b68f',
}

const Chart = (props) => {
    const chartRef = useRef(null);
    const [legend, setLegend] = React.useState([]);
    const [options] = React.useState({
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                mode: 'index',
                position: 'nearest',
            }
        },
        scales: {
            left: {
                display: true,
                type: 'linear',
                position: 'left',
                align: 'center',
                title: {
                    display: true,
                    text: '',
                },
            },
            right: {
                display: true,
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: '',
                },
                grid: {
                    drawOnChartArea: false,
                },
            },
            x: {
                display: false,
            },
        },
    });
    const transposeDataObject = (data) => {
        const obj = data?.datasets
            ? JSON.parse(JSON.stringify(data))
            : {datasets: []}

        obj.datasets.map(ds => {
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
        });

        return obj;
    }
    const handleLegendClick = (legendItem) => {
        let axisId = chartRef.current.data.datasets[legendItem.datasetIndex].yAxisID;
        let displayAxis = false;
        chartRef.current.data.datasets.forEach(function (dataset) {
            if (dataset.label === legendItem.text) {
                dataset.hidden = !dataset.hidden;
            }
            if (dataset.yAxisID === axisId) {
                displayAxis = displayAxis || !dataset.hidden;
            }
        });

        options.scales[axisId].display = displayAxis;
        chartRef.current.update();
        setLegend(chartRef.current.legend.legendItems);
    }

    // on chart mount
    useEffect(() => {
        const chart = chartRef?.current;
        if (chart) {
            setLegend(chartRef.current.legend.legendItems);
            if (props.scales) {
                options.scales.left.title.text = props.scales.left || '';
                options.scales.right.title.text = props.scales.right || '';
                chart.update();
            }
        }
    }, [chartRef.current]);

    const data = transposeDataObject(props.data);
    const plugins = [/*chartScaleIconPlugin*/];
    const chartProps = {
        ref: chartRef,
        options,
        data,
        plugins,
    }
    if (props.height) {
        chartProps.height = props.height;
    }

    return (
        <>
            <div className="chart-legend">
                {legend.length && legend.map(item => {
                    return (
                        <div key={item.text} onClick={() => handleLegendClick(item)} className={`item ${item.hidden ? 'inactive' : ''}`}>
                            <div className="color">
                                <div style={{ backgroundColor: item.fillStyle }} />
                            </div>
                            <div className="label">{item.text}</div>
                            <div className="amount">123 456</div>
                            <div className={`change ${item.datasetIndex % 2 ? 'down' : 'up'}`}>+23</div>
                        </div>
                    );
                })}
            </div>
            <ReactChart {...chartProps} />
        </>
    );
}

export default Chart;

export { Colors };