import React from "react";
import {Line} from "react-chartjs-2";
import './Chart.scss'
import {data, options} from "./ChartConfig";

const Chart = () => {

    return (
        <div className={'chart__container'}>
            <Line id={'canvas'} options={options} data={data(10000)}/>
        </div>
    );
};

export default Chart;