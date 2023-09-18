let Ui_chart = class {

    constructor() {

    }



    UI_EVENT(){

        var ctx = document.getElementById('waitingChart').getContext('2d');
        var waitingChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Waiting', 'Total'],
                datasets: [{
                    label: '# of Votes',
                    data: [ homee_ui.PourcentageWait, homee_ui.RestPourcentWithoutWaiting],
                    backgroundColor: [
                        '#FDCDA3',
                        '#111F35',

                    ],
                    borderColor: [
                        '#FDCDA3',
                        '#111F35',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                legend: {
                    display: false
                },
                cutoutPercentage: 80
            }

        });

        var ctx = document.getElementById('delivredChart').getContext('2d');
        var delivredChart = new Chart(ctx, {

            type: 'doughnut',
            data: {
                labels: ['Delivred', 'Total'],
                datasets: [{
                    label: '# of Votes',
                    data: [ homee_ui.pourcentInProgress, homee_ui.RestPourcentWithoutProgress],
                    backgroundColor: [
                        'rgb(134, 199, 204)',
                        '#111F35',

                    ],
                    borderColor: [
                        'rgb(134, 199, 204)',
                        '#111F35',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                legend: {
                    display: false
                },
                cutoutPercentage: 80

            }

        });

        var ctx = document.getElementById('rejectedChart').getContext('2d');
        var rejectedChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Waiting', 'Total'],
                datasets: [{
                    label: '# of Votes',
                    data: [ homee_ui.pourcentFinished, homee_ui.RestPourcentWithoutFinished],
                    backgroundColor: [
                        'rgb(207, 110, 110)',
                        '#111F35',

                    ],
                    borderColor: [
                        'rgb(207, 110, 110)',
                        '#111F35',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                legend: {
                    display: false
                },
                cutoutPercentage: 80
            }

        });

        var ctx = document.getElementById('waitingChartReservation').getContext('2d');
        var waitingChartReservation = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Waiting', 'Total'],
                datasets: [{
                    label: '# of Votes',
                    data: [ homee_ui.PourcentageWaitReser, homee_ui.RestPourcentWithoutWaitingReser],
                    backgroundColor: [
                        '#FDCDA3',
                        '#111F35',

                    ],
                    borderColor: [
                        '#FDCDA3',
                        '#111F35',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                legend: {
                    display: false
                },
                cutoutPercentage: 80
            }

        });

        var ctx = document.getElementById('delivredChartReservation').getContext('2d');
        var delivredChartReservation = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Delivred', 'Total'],
                datasets: [{
                    label: '# of Votes',
                    data: [ homee_ui.PourcentageDeliveredReser, homee_ui.RestPourcentWithoutDeliveredReser],
                    backgroundColor: [
                        'rgb(134, 199, 204)',
                        '#111F35',

                    ],
                    borderColor: [
                        'rgb(134, 199, 204)',
                        '#111F35',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                legend: {
                    display: false
                },
                cutoutPercentage: 80
            }

        });


        var ctx = document.getElementById('rejectedChartReservation').getContext('2d');
        var rejectedChartReservation = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Rejected', 'Total'],
                datasets: [{
                    label: '# of Votes',
                    data:[ homee_ui.PourcentageRejectedReser, homee_ui.RestPourcentWithoutRejectedReser],
                    backgroundColor: [
                        'rgb(207, 110, 110)',
                        '#111F35',

                    ],
                    borderColor: [
                        'rgb(207, 110, 110)',
                        '#111F35',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                legend: {
                    display: false
                },
                cutoutPercentage: 80
            }

        });




        var ctx = document.getElementById("OrdersByMonth").getContext('2d');
        var OrdersByMonth = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: 'Orders by Month  ', // Name the series
                   data: [homee_ui.OrderInJanuary, homee_ui.OrderInFebruary, homee_ui.OrderInMarch, homee_ui.OrderInApril, homee_ui.OrderInMay, homee_ui.OrderInJune, homee_ui.OrderInJuly, homee_ui.OrderInAugust, homee_ui.OrderInSeptember, homee_ui.OrderInOctober, homee_ui.OrderInNovember, homee_ui.OrderInDecember], // Specify the data values array
                /*    data: [0,0, 0,0,0, 0, 5, 5,7, 0, 0,0], */// Specify the data values array*/
                    fill: false,
                  /*  fillColor : '#1D2F4C',*/
                    borderColor: ' #E0CD08', // Add custom color border (Line)
                    pointColor :' #E0CD08',
                    pointStrokeColor : ' #E0CD08',
                    backgroundColor: ' #1D2F4C', // Add custom color background (Points and Fill)
                    borderWidth: 3 // Specify bar border width
                }]
            },
            options: {
                responsive: true, // Instruct chart js to respond nicely.

            }
        });




        var ctx = document.getElementById("ReservationsByMonth").getContext('2d');
        var ReservationsByMonth = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: 'Reservations by Month  ', // Name the series
                   data: [homee_ui.ReservationInJanuary, homee_ui.ReservationInFebruary, homee_ui.ReservationInMarch, homee_ui.ReservationInApril, homee_ui.ReservationInMay, homee_ui.ReservationInJune, homee_ui.ReservationInJuly, homee_ui.ReservationInAugust, homee_ui.ReservationInSeptember, homee_ui.ReservationInOctober, homee_ui.ReservationInNovember, homee_ui.ReservationInDecember], // Specify the data values array

                    fill: false,
                    /*  fillColor : '#1D2F4C',*/
                    borderColor: ' #1D2F4C', // Add custom color border (Line)
                    pointColor :' #1D2F4C',
                    pointStrokeColor : ' #1D2F4C',
                    backgroundColor: ' #E0CD08', // Add custom color background (Points and Fill)
                    borderWidth: 3 // Specify bar border width
                }]
            },
            options: {
                responsive: true, // Instruct chart js to respond nicely.

            }
        });
    }

};

let chart_ui = new Ui_chart();