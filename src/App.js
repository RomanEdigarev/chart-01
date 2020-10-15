import React, {useEffect} from 'react';
import './App.css';
import Chart from "./components/ChartComponent/Chart";

function App() {
    return (
        <div className="App" style={{position: 'relative', width: 600, height: 550}}>
            <Chart/>
        </div>
    );
}

export default App;
