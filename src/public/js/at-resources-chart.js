/* chart.js chart examples */

// chart colors
var colors = ["#007bff", "#28a745", "#333333", "#c3e6cb", "#dc3545", "#6c757d"];

/* large line chart */
var chLine = document.getElementById("chLine");
var chartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
            data: [589, 445, 483, 503, 689, 692, 634],
            backgroundColor: "transparent",
            borderColor: colors[0],
            borderWidth: 4,
            pointBackgroundColor: colors[0],
        },
        {
            data: [639, 465, 493, 478, 589, 632, 674],
            backgroundColor: colors[3],
            borderColor: colors[1],
            borderWidth: 4,
            pointBackgroundColor: colors[1],
        },
    ],
};

if (chLine) {
    new Chart(chLine, {
        type: "line",
        data: chartData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                    },
                }, ],
            },
            legend: {
                display: false,
            },
        },
    });
}

/* 3 donut charts */
var donutOptions = {
    cutoutPercentage: 90,
    legend: {
        position: "bottom",
        padding: 5,
        labels: { pointStyle: "circle", usePointStyle: true },
    },
};

// donut 1
var chDonutData1 = {
    labels: ["Sprint 1", "Sprint 2", "Sprint 3"],
    datasets: [{
        backgroundColor: colors.slice(0, 3),
        borderWidth: 0,
        data: [74, 11, 40],
    }, ],
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
    new Chart(chDonut1, {
        type: "pie",
        data: chDonutData1,
        options: donutOptions,
    });
}

// donut 2
var chDonutData2 = {
    labels: ["Sprint 1", "Sprint 2", "Sprint 3"],
    datasets: [{
        backgroundColor: colors.slice(0, 3),
        borderWidth: 0,
        data: [40, 45, 30],
    }, ],
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
    new Chart(chDonut2, {
        type: "pie",
        data: chDonutData2,
        options: donutOptions,
    });
}

// donut 3
var chDonutData3 = {
    labels: ["Sprint 1", "Sprint 2", "Sprint 3"],
    datasets: [{
        backgroundColor: colors.slice(0, 3),
        borderWidth: 0,
        data: [21, 45, 55, 33],
    }, ],
};
var chDonut3 = document.getElementById("chDonut3");
if (chDonut3) {
    new Chart(chDonut3, {
        type: "pie",
        data: chDonutData3,
        options: donutOptions,
    });
}