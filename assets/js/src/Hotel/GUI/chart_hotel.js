let Ui_chart_hotel = class {

    constructor() {

    }



    UI_EVENT(){

        var chart    = document.getElementById('chart_hotel').getContext('2d'),
            gradient = chart.createLinearGradient(0, 0, 0, 450);

        gradient.addColorStop(0, '#24478D');
        gradient.addColorStop(0.3, 'rgba(36,71,141,0.35)');
        gradient.addColorStop(1, 'rgba(36,71,141,0)');


        var data  = {
            labels: [ 'January', 'February', 'March', 'April', 'May', 'June','July','Augest','September','October','November','December'],
            datasets: [{
                label: 'Custom Label Name',
                backgroundColor: gradient,
                pointBackgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#1f376f',
                fill:undefined,
                data: [50, 150, 180, 120, 100, 125,200,250,157,280,100,60]
            }]
        };


        var options = {
            responsive: true,
            maintainAspectRatio: false,

            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(122,122,122,0.05)',
                        lineWidth: 1
                    },
                    scaleFontSize: 1,
                    ticks: {
                        fontSize: 10
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: 'rgba(122,122,122,0.05)',
                        lineWidth: 1
                    }
                }],
            },
            elements: {
                line: {
                    tension: 0.00001
                }
            },
            legend: {
                display: false,
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                titleFontFamily: 'Open Sans',
                backgroundColor: 'rgba(0,0,0,0.3)',
                titleFontColor: 'red',
                caretSize: 5,
                cornerRadius: 2,
                xPadding: 10,
                yPadding: 10
            }
        };


        var chartInstance = new Chart(chart, {
            type: 'line',
            data: data,
            options: options
        });
        //**************************************************************************
        var ctx = document.getElementById('graph_hotel').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',
            // The data for our dataset
            data: {
                labels: ["Iværksætter", "Forandringsagent", "Beslutningstager", "Brugerorienteret leder"],
                datasets: [{
                    label: "Din ledelsesstil",
                    backgroundColor: [
                        "#00ACFF", "#DBECF8", "#76DDFB", "#73A6C9"
                    ],
                    data: [54, 12, 9, 23],
                }]
            },

            // Configuration options go here
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: true,
                    mode: 'index',
                    callbacks: {
                        label: function (tooltipItems, data) {
                            var i, label = [], l = data.datasets.length;
                            for (i = 0; i < l; i += 1) {
                                label[i] = data.datasets[i].label + ': ' + data.datasets[i].data[tooltipItems.index] + '%';
                            }
                            return label;
                        }
                    }
                }
            }
        });
    }

};

let chart_hotel_ui = new Ui_chart_hotel();