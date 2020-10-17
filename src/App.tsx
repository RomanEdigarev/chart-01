import React, {useState} from 'react';
import './App.scss';
import Chart from "./components/ChartComponent/Chart";
import MoneyComponent from "./components/MoneyComponent";
import ViewsComponent from "./components/ViewsComponent";
import SubtitleComponent from "./components/SubtitleComponent";
import TitleComponent from "./components/TitleComponent";
import FooterComponent from "./components/FooterComponent";


function App() {

    console.log(window.innerWidth)

    const [views, setViews] = useState<number>(9000)
    const [subs, setSubs] = useState<number>(100)


    return (
        <div className="app">
            {/*<Container>*/}
            <TitleComponent/>
            <div className="app__container">
                <SubtitleComponent/>
                <MoneyComponent setSubs={setSubs} setViews={setViews} />
                <ViewsComponent subs={subs} views={views}/>
                {/*</Container>*/}
                {/*<Container>*/}
                <Chart subs={subs}/>
                {/*</Container>*/}
                <FooterComponent/>
            </div>


        </div>
    );
}

export default App;
