class i_TopOrders{
    constructor() {
        document.addEventListener("SSAPI_READY", function(e) {
            iTopOrders.EVENTS_UI();
            iTopOrders.EVENTS_SSAPI();
        });
    }



    EVENTS_UI(){
            SSAPI.SUBMIT({
                uri:"/Cart/getTopOrders",
                data:{
                    top: 5
                },
                onsuccess:"TopOrdersReceive"
            })




    }


    EVENTS_SSAPI(){


        document.addEventListener("TopOrdersReceive", function(e){
            dati_topOrders.DATALIST(e.detail);
        }, false);

    }
}

let iTopOrders = new i_TopOrders();