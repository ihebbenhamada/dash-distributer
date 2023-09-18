class imp_Demande{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }


    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;

            if(page == "DetailDemande"){
                demandeList_ui.fillPageDetail();

            }
            if(page == "Demande"){
                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                var event = new CustomEvent("ListDemandesReceive", {
                    detail: {
                        total: 300,
                        list:[{
                            comment:"hi !",
                            id:1,
                            date:"2019-06-04",
                            status:"active",
                            type:"111A1",
                            room_number:"A21"
                        },
                            {
                                comment:"how are you",
                                id:2,
                                date:"2019-06-04",
                                status:"active",
                                type:"111A1",
                                room_number:"A21"
                            },
                            {
                                comment:"1234",
                                id:3,
                                date:"2019-06-04",
                                status:"active",
                                type:"111A1",
                                room_number:"A21"
                            }
                            ,
                            {
                                comment:"hello",
                                id:4,
                                date:"2019-06-04",
                                status:"active",
                                type:"111A1",
                                room_number:"A21"
                            }]
                    }
                });


                document.dispatchEvent(event);
            }
        }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("ListDemandesReceive", function(e){
            demandeList_ui.DATALIST(e.detail);
            demandeList_ui.total=e.detail.total;
        }, false);
    }
}

let iDemande = new imp_Demande();