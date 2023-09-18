class imp_Notif{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }


    EVENTS_UI(){
        $(document).ready(function() {

            // CALL SSAPI  DEVICE GET LIST
            // event success ListDevicesReceive
            var event = new CustomEvent("ListNotifsReceive", {
                detail: {
                    list: [{
                        "id":1,
                        "desc":"J ai commander 3 sandwitch scalope sans onion 'il vous plais",
                        "time":"07:24",
                        "logo":"https://apitndati.com/v003/public/uploads/tourist_images/txJmRvYgU1oSJawC8eJsU4aGvjAtsRFD1iAuYLLN.png",
                    },{
                        "id":2,
                        "desc":"J ai commander 5 sandwitch jombon sans onion 'il vous plais",
                        "time":"05:24",
                        "logo":"https://apitndati.com/v003/public/uploads/tourist_images/txJmRvYgU1oSJawC8eJsU4aGvjAtsRFD1iAuYLLN.png",
                    },{
                        "id":3,
                        "desc":"J ai commander 2 sandwitch thon sans onion 'il vous plais",
                        "time":"22:24",
                        "logo":"https://apitndati.com/v003/public/uploads/tourist_images/txJmRvYgU1oSJawC8eJsU4aGvjAtsRFD1iAuYLLN.png",
                    },{
                        "id":4,
                        "desc":"J ai commander 4 sandwitch chawarma sans onion 'il vous plais",
                        "time":"00:24",
                        "logo":"https://apitndati.com/v003/public/uploads/tourist_images/txJmRvYgU1oSJawC8eJsU4aGvjAtsRFD1iAuYLLN.png",
                    },
                    ]
                }
            });


            document.dispatchEvent(event);

        });
    }


    EVENTS_SSAPI(){
        document.addEventListener("ListNotifsReceive", function(e){
            notifList_ui.DATALIST(e.detail);
        }, false);
    }
}

let iNotif = new imp_Notif();