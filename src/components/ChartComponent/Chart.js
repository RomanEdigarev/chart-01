import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import './Chart.scss'
import {getData, getOptions} from "./ChartConfig";

const Chart = ({subs}) => {

    const [dataSubs, setDataSubs] = useState([null, 0, 20, 40, 60, 80, 100])
    let value = subs / 100
    useEffect(() => {

        const newDataSubs = [null, 0,]
        for(let i = 0; i < 6; i++ ) {
            value +=  (subs / 5 + (subs / Math.random() * 0.0020)) / 1.6
            newDataSubs.push(value)
        }
        setDataSubs(newDataSubs)

    }, [subs])



    return (
        <div className={'chart'}>
            <div className={'chart__container'}>
                <Line id={'canvas'} options={getOptions(subs)} data={getData(dataSubs)}/>
            </div>
        </div>

    );
};

export default Chart;