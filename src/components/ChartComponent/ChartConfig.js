const createGradient = () => {
    const ctx = document.getElementById('canvas').getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, document.getElementById('canvas').width)
    gradient.addColorStop(0.2, 'rgba(142, 86, 233, 0.31)')
    gradient.addColorStop(0.45, 'rgba(142, 86, 233, 0)')
    return gradient
}

export const getData = (data) => () => {

    return {
        labels: ['','1 день', "2 день", "3 день", "4 день", "5 день", "6 день", "7 день"],
        datasets: [{
            backgroundColor: createGradient(),
            data: data,
            borderColor: '#7045C4',
            pointBackgroundColor: 'white',
            pointBorderColor: '#7045C4',
            pointBorderWidth: 2,
            pointHoverBackgroundColor: '#7045C4',
        }],
    }
}

export const getOptions = (subs) => {
    return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {display: false},
        tooltips: {enabled: false},
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: subs,
                        stepSize: Math.floor(subs / 5),
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true,
                        padding: 20,
                        fontFamily: 'PT Sans',
                    },
                    gridLines: {
                        tickMarkLength: 10,
                        display: true,
                        lineWidth: 0,
                        zeroLineColor: '#E2E5EE',
                        zeroLineWidth: 2,
                        drawTicks: false,
                        offsetGridLines: false,

                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true,
                        padding: 15,
                        fontFamily: 'PT Sans',
                    },
                    gridLines: {
                        offsetGridLines: false,
                        borderDash: [2, 2],
                        zeroLineColor: '#E2E5EE',
                        zeroLineWidth: 2,
                        drawTicks: false,

                    }

                }
            ]
        }
    }
}

// export const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     legend: {display: false},
//     tooltips: {enabled: false},
//     scales: {
//         yAxes: [
//             {
//                 ticks: {
//                     min: 0,
//                     max: 300,
//                     stepSize:60,
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true,
//                     padding: 20,
//                     fontFamily: 'PT Sans',
//                 },
//                 gridLines: {
//                     tickMarkLength: 10,
//                     display: true,
//                     lineWidth: 0,
//                     zeroLineColor: '#E2E5EE',
//                     zeroLineWidth: 2,
//                     drawTicks: false,
//                     offsetGridLines: false,
//
//                 }
//             }
//         ],
//         xAxes: [
//             {
//                 ticks: {
//                     autoSkip: true,
//                     maxTicksLimit: 10,
//                     beginAtZero: true,
//                     padding: 15,
//                     fontFamily: 'PT Sans',
//                 },
//                 gridLines: {
//                     offsetGridLines: false,
//                     borderDash: [2, 2],
//                     zeroLineColor: '#E2E5EE',
//                     zeroLineWidth: 2,
//                     drawTicks: false,
//
//                 }
//
//             }
//         ]
//     }
// }