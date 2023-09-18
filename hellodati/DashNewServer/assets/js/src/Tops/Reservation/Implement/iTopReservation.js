class i_TopReservations{
    constructor() {
        document.addEventListener("SSAPI_READY", function(e){
            iTopResevations.EVENTS_UI();
            iTopResevations.EVENTS_SSAPI();
        });

    }




    EVENTS_UI(){
            SSAPI.SUBMIT({
                uri:"/Cart/getTopReservations",
                data:{
                    top: 5
                },
                onsuccess:"TopReservationsReceive"
            })
    }


    EVENTS_SSAPI(){


        document.addEventListener("TopReservationsReceive", function(e){
            dati_topReservations.DATALIST(e.detail);
        }, false);

    }
}

let iTopResevations = new i_TopReservations();