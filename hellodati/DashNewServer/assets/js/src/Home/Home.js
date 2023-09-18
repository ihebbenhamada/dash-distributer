let Ui_homee = class {

    constructor() {

        this.devicesHome=null;
        this.stateOrder=null;
        this.PourcentageWait=null;
        this.RestPourcentWithoutWaiting=null;
        this.PourcentageDelivered = null;
        this.RestPourcentWithoutDelivered = null;
        this.PourcentageRejected = null;
        this.RestPourcentWithoutRejected = null;
        this.stateOrederByMonth=null;
        this.OrderInJanuary=null;
        this.OrderInFebruary=null;
        this.OrderInMarch=null;
        this.OrderInSeptember=null;
        this.OrderInApril=null;
        this.OrderInMay=null;
        this.OrderInJune=null;
        this.OrderInJuly=null;
        this.OrderInAugust=null;
        this.OrderInSeptember=null;
        this.OrderInOctober=null;
        this.OrderInNovember=null;
        this.OrderInDecember=null;

        this.ReservationInJanuary=null;
        this.ReservationInFebruary=null;
        this.ReservationInMarch=null;
        this.ReservationInSeptember=null;
        this.ReservationInApril=null;
        this.ReservationInMay=null;
        this.ReservationInJune=null;
        this.ReservationInJuly=null;
        this.ReservationInAugust=null;
        this.ReservationInSeptember=null;
        this.ReservationInOctober=null;
        this.ReservationInNovember=null;
        this.ReservationInDecember=null;
    }

    DATALIST(data){
        this.devicesHome = data.res;
        this.ACTIVE_DEVICE();
        this.INACTIVE_DEVICE();
        this.TOTAL_DEVICES();
    }


    ACTIVE_DEVICE(){
        var activeD =this.devicesHome.filter(device => device.linked == 1);
        $("[DATI-PAGE=Dashboard]").find("[DATI-ID=nb_device_active]").html(activeD.length);
    }
    INACTIVE_DEVICE(){
        var inactiveD =this.devicesHome.filter(device => device.linked == 0);
        $("[DATI-PAGE=Dashboard]").find("[DATI-ID=nb_device_inactive]").html(inactiveD.length);
    }

    TOTAL_DEVICES(){
        var total =this.devicesHome;
        $("[DATI-PAGE=Dashboard]").find("[DATI-ID=nb_devices]").html(total.length);
    }
    DATASTATEORDER(data){
        this.stateOrder = data.res[0];
        this.STATE_ORDER();
    }

    STATE_ORDER(){
        var total =  this.stateOrder.total ;
        var inProgress = this.stateOrder.inProgress ;
        var finished = this.stateOrder.finished ;
        var Wait = this.stateOrder.waiting ;


        var pourcentWait = (Wait*100)/total;
        pourcentWait = Math.round(pourcentWait);
        this.PourcentageWait = pourcentWait;
        this.RestPourcentWithoutWaiting = 100 - pourcentWait;


        var pourcentInProgress = (inProgress*100)/total;
        pourcentInProgress = Math.round(pourcentInProgress);
        this.pourcentInProgress = pourcentInProgress;
        this.RestPourcentWithoutProgress = 100 - pourcentInProgress;



        var pourcentFinished = (finished*100)/total;
        pourcentFinished = Math.round(pourcentFinished);
        this.pourcentFinished = pourcentFinished;
        this.RestPourcentWithoutFinished = 100 - pourcentFinished;


        if(total == null || total==undefined || total==""){
            $("[DATI-PAGE=Dashboard]").find("[dati-total-orders]").html("0");
            $("[DATI-PAGE=Dashboard]").find("[dati-waiting-taux]").html("0%");
            $("[DATI-PAGE=Dashboard]").find("[dati-delivred-taux]").html("0%");
            $("[DATI-PAGE=Dashboard]").find("[dati-rejected-taux]").html("0%");
        }else{
            $("[DATI-PAGE=Dashboard]").find("[dati-total-orders]").html(total);
            $("[DATI-PAGE=Dashboard]").find("[dati-waiting-taux]").html(pourcentWait+"%");
            $("[DATI-PAGE=Dashboard]").find("[dati-delivred-taux]").html(pourcentInProgress+"%");
            $("[DATI-PAGE=Dashboard]").find("[dati-rejected-taux]").html(pourcentFinished+"%");
        }


    }

    DATASTATERESERVATION(data){
        this.stateReservation = data.res[0];
        this.STATE_RESERVATION();
    }
    DATAORDERBYMONTHS(data){
        this.stateOrederByMonth = data.res;
        this.STATE_ORDERS_MONTHS();
    }
    STATE_ORDERS_MONTHS(){
        for(var i =0 ; i< this.stateOrederByMonth.length ; i++){
           var month = this.stateOrederByMonth[i].date_month;
           var year = this.stateOrederByMonth[i].date_year;
           var nbreReservation = this.stateOrederByMonth[i].nbr;
           /*var currentYear = new Date().getFullYear();*/


            if(month == 1 ){
                this.OrderInJanuary = nbreReservation;

            }
            if(month == 2 ){
                this.OrderInFebruary = nbreReservation;

            }
            if(month == 3 ){
                this.OrderInMarch = nbreReservation;

            }
            if(month == 4 ){
                this.OrderInApril = nbreReservation;

            }
            if(month == 5 ){
                this.OrderInMay = nbreReservation;

            }
            if(month == 6 ){
                this.OrderInJune = nbreReservation;

            }
            if(month == 7 ){
                this.OrderInJuly = nbreReservation;

            }
            if(month == 8 ){
                this.OrderInAugust = nbreReservation;

            }
            if(month == 9){
                this.OrderInSeptember = nbreReservation;

            }
            if(month == 10 ){
                this.OrderInOctober = nbreReservation;

            }
            if(month == 11 ){
                this.OrderInNovember = nbreReservation;

            }
            if(month == 12){
                this.OrderInDecember = nbreReservation;

            }
        }
    }

    DATARESERVATIONBYMONTHS(data){
        this.stateReservationByMonth = data.res;

        this.STATE_RESERVATIONS_MONTHS();
    }
    STATE_RESERVATIONS_MONTHS(){
        for(var i =0 ; i< this.stateReservationByMonth.length ; i++){
            var month = this.stateReservationByMonth[i].date_month;
            var year = this.stateReservationByMonth[i].date_year;
            var nbreReservation = this.stateReservationByMonth[i].nbr;
            var currentYear = new Date().getFullYear();


            if(month == 1 && year==currentYear){
                this.ReservationInJanuary = nbreReservation;

            }
            if(month == 2 && year==currentYear){
                this.ReservationInFebruary = nbreReservation;

            }
            if(month == 3 && year==currentYear){
                this.ReservationInMarch = nbreReservation;

            }
            if(month == 4 && year==currentYear){
                this.ReservationInApril = nbreReservation;

            }
            if(month == 5 && year==currentYear){
                this.ReservationInMay = nbreReservation;

            }
            if(month == 6 && year==currentYear){
                this.ReservationInJune = nbreReservation;

            }
            if(month == 7 && year==currentYear){
                this.ReservationInJuly = nbreReservation;

            }
            if(month == 8 && year==currentYear){
                this.ReservationInAugust = nbreReservation;

            }
            if(month == 9 && year==currentYear){
                this.ReservationInSeptember = nbreReservation;

            }
            if(month == 10 && year==currentYear){
                this.ReservationInOctober = nbreReservation;

            }
            if(month == 11 && year==currentYear){
                this.ReservationInNovember = nbreReservation;

            }
            if(month == 12 && year==currentYear){
                this.ReservationInDecember = nbreReservation;

            }
        }
    }

    STATE_RESERVATION(){
        var totalReser =  this.stateReservation.total ;
        var WaitReser = this.stateReservation.waiting ;
        var deliveredReser= this.stateReservation.inProgress ;
        var rejectedReser = this.stateReservation.finished ;


        var pourcentWaitReser = (WaitReser*100)/totalReser;
        pourcentWaitReser = Math.round(pourcentWaitReser);
        this.PourcentageWaitReser = pourcentWaitReser;
        this.RestPourcentWithoutWaitingReser = 100 - pourcentWaitReser;


        var pourcentDeliveredReser = (deliveredReser*100)/totalReser;
        pourcentDeliveredReser = Math.round(pourcentDeliveredReser);
        this.PourcentageDeliveredReser = pourcentDeliveredReser;
        this.RestPourcentWithoutDeliveredReser= 100 - pourcentDeliveredReser;



        var pourcentRejectedReser = (rejectedReser*100)/totalReser;
        pourcentRejectedReser = Math.round(pourcentRejectedReser);
        this.PourcentageRejectedReser = pourcentRejectedReser;
        this.RestPourcentWithoutRejectedReser = 100 - pourcentRejectedReser;



        if(totalReser == null || totalReser==undefined || totalReser==""){
            $("[DATI-PAGE=Dashboard]").find("[dati-total-reservation]").html("0");
            $("[DATI-PAGE=Dashboard]").find("[dati-waiting-taux-reservation]").html("0%");
            $("[DATI-PAGE=Dashboard]").find("[dati-delivred-taux-reservation]").html("0%");
            $("[DATI-PAGE=Dashboard]").find("[dati-rejected-taux-reservation]").html("0%");
        }else{
            $("[DATI-PAGE=Dashboard]").find("[dati-total-reservation]").html(totalReser);
            $("[DATI-PAGE=Dashboard]").find("[dati-waiting-taux-reservation]").html(pourcentWaitReser+"%");
            $("[DATI-PAGE=Dashboard]").find("[dati-delivred-taux-reservation]").html(pourcentDeliveredReser+"%");
            $("[DATI-PAGE=Dashboard]").find("[dati-rejected-taux-reservation]").html(pourcentRejectedReser+"%");
        }


    }

};

let homee_ui = new Ui_homee();