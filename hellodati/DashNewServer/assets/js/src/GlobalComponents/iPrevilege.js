class imp_Previlege {
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    GET_DEFAULT_PRIV(){

            SSAPI.SUBMIT({
                uri:"/NavBar/getDefaultPrivilege",
                onsuccess:"DefaultPrivReceive",
                onerror:"DefaultPrivReceive_error",
            })

    }

    EVENTS_UI() {


        document.addEventListener("SHOW_PAGE", function (e) {
            var page = e.detail.pageLink;

            if (page == "AddEmployee") {
                iPrevilege.GET_DEFAULT_PRIV();
            }

            if (page == "EditEmployee") {
                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                var event = new CustomEvent("ListPrevilegesUpdateReceive", {
                    detail: {
                        list: [{
                            fields: [],
                            id: 1,
                            previlege_name: "Guest",
                            privelege: 3,
                            privelege_detail: {C: true, U: true, D: true}


                            },
                            {
                                fields: [],
                                id: 2,
                                previlege_name: "Device",
                                privelege: 3,
                                privelege_detail: {C: true, U: true, D: true}

                            },
                            {
                                fields: [],
                                id: 3,
                                previlege_name: "Order Reservation",
                                privelege: 3,
                                privelege_detail: {C: true, U: true, D: true}

                            },
                            {
                                fields: [{
                                    id: 154,
                                    previlege_name: "a la carte",
                                    privelege: 1,
                                    privelege_detail: {C: false, U: false, D: false}

                                    },
                                    {
                                        id: 155,
                                        previlege_name: "a la carte1",
                                        privelege: 1,
                                        privelege_detail: {C: false, U: false, D: false}
                                    }

                                ],
                                id: 4,
                                previlege_name: "Restaurant1",
                                privelege: 1,
                                privelege_detail: {C: false, U: false, D: false}

                            },
                            {

                                fields: [{
                                    id: 160,
                                    previlege_name: "a la carte",
                                    privelege: 1,
                                    privelege_detail: {C: false, U: false, D: false}

                                },
                                    {
                                        id: 161,
                                        previlege_name: "BtoB",
                                        privelege: 1,
                                        privelege_detail: {C: false, U: false, D: false}
                                    }

                                ],
                                id: 5,
                                previlege_name: "Restaurant",
                                privelege: 1,
                                privelege_detail: {C: false, U: false, D: false}

                            },
                            {
                                fields: [],
                                id: 6,

                                previlege_name: "Demandes",

                                privelege: 1,
                                privelege_detail: {C: false, U: false, D: false}

                            }]
                    }
                });


                document.dispatchEvent(event);
            }


        }, false);
    }


    EVENTS_SSAPI() {

        document.addEventListener("DefaultPrivReceive_error", function (e) {
            console.log(e.detail);

        }, false);
        document.addEventListener("ListPrevilegesUpdateReceive", function (e) {
            dati_table_previlege.DATALISTUPDATE(e.detail);

        }, false);

    }
}

let iPrevilege = new imp_Previlege();