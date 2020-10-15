import React from "react";
import {Line} from "react-chartjs-2";
import './Chart.scss'
import {data, getOptions} from "./ChartConfig";

const Chart = ({subs}) => {

    return (
        <div className={'chart__container'}>
            <Line id={'canvas'} options={getOptions(subs)} data={data(10000)}/>
        </div>
    );
};

export default Chart;