class imp_Home{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    GET_ALL_DEVICES(){
        SSAPI.SUBMIT({
            uri:"/Device/getAll",
            onsuccess:"ListDevicesHomeReceive"
        })
    }    GET_STAT_ORDER(){
        SSAPI.SUBMIT({
            uri:"/Cart/getStatOrders",
            onsuccess:"ListStateOrderReceive"
        })
    }
    GET_STAT_RESERVATION(){
        SSAPI.SUBMIT({
            uri:"/Cart/getStatreservations",
            onsuccess:"ListStateReservationReceive"
        })
    }
    GET_ORDER_BY_MONTH(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        var day = parseInt(dd)+1;

        today = yyyy + '-' + mm + '-' +day;
        SSAPI.SUBMIT({
            uri:"/Cart/getOrdersByMonth",
            data:{
                begin_date:"2020-01-01" ,
                end_date:today
            },
            onsuccess:"ListOrdersByMonthReceive"
        })
    }
    GET_RESERVATION_BY_MONTH(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        var day = parseInt(dd)+1;

        today = yyyy + '-' + mm + '-' + day;
        SSAPI.SUBMIT({
            uri:"/Cart/getReservationsByMonth",
            data:{
                begin_date:"2020-01-01" ,
                end_date:today
            },
            onsuccess:"ListReservationsByMonthReceive"
        })
    }
    EVENTS_UI(){
        document.addEventListener("SSAPI_READY", function(e){
            iHome.GET_ALL_DEVICES();
            iHome.GET_STAT_ORDER();
            iHome.GET_STAT_RESERVATION();
            iHome.GET_ORDER_BY_MONTH();
            iHome.GET_RESERVATION_BY_MONTH();
        }, false);

    }


    EVENTS_SSAPI(){
        document.addEventListener("ListDevicesHomeReceive", function(e){
            homee_ui.DATALIST(e.detail);
        }, false);

        document.addEventListener("ListStateOrderReceive", function(e){
            homee_ui.DATASTATEORDER(e.detail);
            chart_ui.UI_EVENT();
        }, false);

        document.addEventListener("ListStateReservationReceive", function(e){
            homee_ui.DATASTATERESERVATION(e.detail);
            chart_ui.UI_EVENT();
        }, false);

        document.addEventListener("ListOrdersByMonthReceive", function(e){
            homee_ui.DATAORDERBYMONTHS(e.detail);
            chart_ui.UI_EVENT();
        }, false);

        document.addEventListener("ListReservationsByMonthReceive", function(e){
            homee_ui.DATARESERVATIONBYMONTHS(e.detail);
            chart_ui.UI_EVENT();
        }, false);

    }
}

let iHome = new imp_Home();