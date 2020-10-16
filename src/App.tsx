import React, {useState} from 'react';
import './App.scss';
import {Container} from "./components/Elements/Container";
import Chart from "./components/ChartComponent/Chart";
import MoneyComponent from "./components/MoneyComponent";
import ViewsComponent from "./components/ViewsComponent";
import SubtitleComponent from "./components/SubtitleComponent";
import TitleComponent from "./components/TitleComponent";


function App() {

    console.log(window.innerWidth)

    const [views, setViews] = useState<number>(9000)
    const [subs, setSubs] = useState<number>(100)


    return (
        <div className="app">
            <TitleComponent/>
            {/*<Container>*/}
            <div className="app__container">
                <SubtitleComponent/>
                <MoneyComponent setSubs={setSubs} setViews={setViews} />
                <ViewsComponent subs={subs} views={views}/>
                {/*</Container>*/}
                {/*<Container>*/}
                <Chart subs={subs}/>
                {/*</Container>*/}
            </div>


        </div>
    );
}

export default App;
