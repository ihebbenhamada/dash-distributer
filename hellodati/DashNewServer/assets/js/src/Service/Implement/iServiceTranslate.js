class imp_SeviceTran{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }


    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "Services"){

                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                var event = new CustomEvent("LangReceive", {
                    detail: {
                        list:[ {
                            id:1,
                            lang:"arabic",
                            title:"مطعم",
                        },{
                            id:2,
                            lang:"francais",
                            title:"Restaurant",
                        },

                            {
                                id:3,
                                lang:"englais",
                                title:"Restaurant",

                            }]
                    }
                });

                var eventEdit = new CustomEvent("showModalService");
                var eventSwitcher = new CustomEvent("ToggelTraServices");


                document.dispatchEvent(eventSwitcher);
                document.dispatchEvent(eventEdit);
                document.dispatchEvent(event);
            }
        }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("ServiceCardReceive", function(e){
            serviceCard_ui.DATALIST(e.detail);

        }, false);
    }
}

let iSeviceTran = new imp_SeviceTran();