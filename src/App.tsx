import React, {useState} from 'react';
import './App.scss';
import {Container} from "./components/Elements/Container";
import Chart from "./components/ChartComponent/Chart";
import MoneyComponent from "./components/MoneyComponent";
import ViewsComponent from "./components/ViewsComponent";
import SubtitleComponent from "./components/SubtitleComponent";
import TitleComponent from "./components/TitleComponent";


function App() {

    const [views, setViews] = useState<number>(9000)
    const [subs, setSubs] = useState<number>(100)


    return (
        <div className="app__container">
            <TitleComponent/>
            <Container>
                <SubtitleComponent/>
                <ViewsComponent subs={subs} views={views}/>
            </Container>
            <Container>
                <MoneyComponent setSubs={setSubs} setViews={setViews} />
                <Chart subs={subs}/>
            </Container>
        </div>
    );
}

export default App;
