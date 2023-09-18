class imp_Reservation {
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    GET_ALL_SERVICES() {
        SSAPI.SUBMIT({
            uri: "/Cart/getAllReservedService",
            onsuccess: "ServiceReservationReceive",
            onerror: "ServiceReservationReceive_error",
        })
    }
    GET_RESERVATION() {
        console.log("0000000000000000000000000");
        var roomN = $("[dati-id=searchBarReservation]").find("[dati-id=listReservations_search_byroomnumber]").val();
        var guestN = $("[dati-id=searchBarReservation]").find("[dati-id=listReservations_search_byguestname]").val();
        var status = $("[dati-id=searchBarReservation]").find("[dati-id=listreservation_search_byStatus]").val();
        var service = $("[dati-id=searchBarReservation]").find("[dati-id=listreservation_search_byItem]").val();
        if (roomN != "") {
            console.log("111111111111111111");
            this.GET_RESERVATION_BY_ROOM_NUMBER(roomN, false);
        } else if (guestN != "") {
            this.GET_RESERVATION_BY_GUEST_NAME()(guestN, false);
            console.log("33333333333333333333333");
        } else if (status != "") {
            this.GET_RESERVATION_BY_STATUS(status, false);
            console.log("444444444444444444444");
        } else if (service != "") {
            this.GET_RESEVATION_BY_ITEM(service, false);
            console.log("5555555555555555555");
        } else {
            console.log("666666666666666666");
            this.GET_ALL_RESERVATION();
        }
    }
    GET_ALL_RESERVATION() {
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_reservationList]")[0]).find("[dati_composent=PAGES]").val();
            if (!page_nbr) {
                page_nbr = 0;
            }
        } catch (e) {
            page_nbr = 0
        }
        if (reservationList_ui.lastSearchBy != "") {
            if (reservationList_ui.lastSearchBy == "guestName") {
                this.GET_RESERVATION_BY_GUEST_NAME($("[DATI-ID=listReservations_search_byguestname]").val(), true);
            }
            if (reservationList_ui.lastSearchBy == "roomNumber") {
                this.GET_RESERVATION_BY_ROOM_NUMBER($("[DATI-ID=listReservations_search_byroomnumber]").val(), true);
            }
            if (reservationList_ui.lastSearchBy == "status") {
                this.GET_RESERVATION_BY_STATUS($("[DATI-ID=listreservation_search_byStatus]").val(), true);
            }
            if (reservationList_ui.lastSearchBy == "item") {
                this.GET_RESEVATION_BY_ITEM($("[DATI-ID=listreservation_search_byItem]").val(), true);
            }

            return false;
        }

        var btime = null;
        var etime = null;
        if (reservationList_ui.selectedDate["timefrom"] != null) {
            btime = reservationList_ui.selectedDate["timefrom"];
        }

        if (reservationList_ui.selectedDate["timeto"] != null) {
            etime = reservationList_ui.selectedDate["timeto"];
        }

        var data = {
            begin_date: reservationList_ui.selectedDate["datefrom"],
            end_date: reservationList_ui.selectedDate["dateto"],
            begin_time: btime,
            end_time: etime,
            pagination: {
                page: page_nbr,
                quantity: reservationList_ui.nbrRows
            }
        };
        SSAPI.SUBMIT({
            uri: "/Cart/getAllReservations",
            data: data,
            onsuccess: "ListReservationsReceive",
            onerror: "ListReservationsReceive_error",
        })
        console.log(data, "data and timeeeee");
    }
    GET_ALL_RESERVATION2() {
        var page_nbr = 0;

        reservationList_ui.lastSearchBy = "";
        $("[DATI-ID=reservationList]").attr("header_created", true);
        dati_table.init("reservationList");
        var data = {
            begin_date: reservationList_ui.selectedDate["datefrom"],
            end_date: reservationList_ui.selectedDate["dateto"],
            begin_time: reservationList_ui.selectedDate["timefrom"],
            end_time: reservationList_ui.selectedDate["timeto"],
            pagination: {
                page: page_nbr,
                quantity: reservationList_ui.nbrRows
            }
        };
        SSAPI.SUBMIT({
            uri: "/Cart/getAllReservations",
            data: data,
            onsuccess: "ListReservationsReceive",
            onerror: "ListReservationsReceive_error",
        });

        console.log(data, "data and time");
    }
    GET_RESERVATION_BY_GUEST_NAME(val, page) {
        reservationList_ui.lastSearchBy = "guestName";
        if (page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_reservationList]")[0]).find("[dati_composent=PAGES]").val();
                if (!page_nbr) {
                    page_nbr = 0;
                }
            } catch (e) {
                page_nbr = 0
            }
        } else {
            page_nbr = 0;
        }
        var data = {
            name: val,
            begin_date: reservationList_ui.selectedDate["datefrom"],
            end_date: reservationList_ui.selectedDate["dateto"],
            begin_time: reservationList_ui.selectedDate["timefrom"],
            end_time: reservationList_ui.selectedDate["timeto"],
            pagination: {
                page: page_nbr,
                quantity: reservationList_ui.nbrRows
            }
        };
        SSAPI.SUBMIT({
            uri: "/Cart/getAllReservationsByGuestName",
            onsuccess: "ResearchReservationsByGuestNameReceive",
            data: data
        })
    }
    GET_RESERVATION_BY_ROOM_NUMBER(val, page) {
        reservationList_ui.lastSearchBy = "roomNumber";
        if (page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_reservationList]")[0]).find("[dati_composent=PAGES]").val();
                if (!page_nbr) {
                    page_nbr = 0;
                }
            } catch (e) {
                page_nbr = 0
            }
        } else {
            page_nbr = 0;
        }
        var data = {
            room_number: val,
            begin_date: reservationList_ui.selectedDate["datefrom"],
            end_date: reservationList_ui.selectedDate["dateto"],
            begin_time: reservationList_ui.selectedDate["timefrom"],
            end_time: reservationList_ui.selectedDate["timeto"],
            pagination: {
                page: page_nbr,
                quantity: reservationList_ui.nbrRows
            }
        };
        SSAPI.SUBMIT({
            uri: "/Cart/getAllReservationsByRoomNumber",
            onsuccess: "ResearchReservationsByRoomNumberReceive",
            data: data
        })
    }
    GET_RESERVATION_BY_STATUS(val, page) {
        reservationList_ui.lastSearchBy = "status";
        if (page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_reservationList]")[0]).find("[dati_composent=PAGES]").val();
                if (!page_nbr) {
                    page_nbr = 0;
                }
            } catch (e) {
                page_nbr = 0
            }
        } else {
            page_nbr = 0;
        }
        var data = {
            status: val,
            status_detail: 1,
            begin_date: reservationList_ui.selectedDate["datefrom"],
            end_date: reservationList_ui.selectedDate["dateto"],
            begin_time: reservationList_ui.selectedDate["timefrom"],
            end_time: reservationList_ui.selectedDate["timeto"],
            pagination: {
                page: page_nbr,
                quantity: reservationList_ui.nbrRows
            }
        };
        SSAPI.SUBMIT({
            uri: "/Cart/getAllReservationsByStatus",
            onsuccess: "ResearchReservationsByStatusReceive",
            data: data
        })

        console.log(data, "rererer");
    }
    GET_RESEVATION_BY_ITEM(val, page) {
        reservationList_ui.lastSearchBy = "item";
        if (page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_reservationList]")[0]).find("[dati_composent=PAGES]").val();
                if (!page_nbr) {
                    page_nbr = 0;
                }
            } catch (e) {
                page_nbr = 0
            }
        } else {
            page_nbr = 0;
        }
        var data = {
            service_type: val,
            begin_date: reservationList_ui.selectedDate["datefrom"],
            end_date: reservationList_ui.selectedDate["dateto"],
            begin_time: reservationList_ui.selectedDate["timefrom"],
            end_time: reservationList_ui.selectedDate["timeto"],
            pagination: {
                page: page_nbr,
                quantity: reservationList_ui.nbrRows
            }
        };
        SSAPI.SUBMIT({
            uri: "/Cart/getAllReservationsByServiceType",
            onsuccess: "ResearchReservationsByItemReceive",
            data: data
        })


    }


    GET_RESERVATIONS_BETWEEN_TODATES() {
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_reservationList]")[0]).find("[dati_composent=PAGES]").val();
            if (!page_nbr) {
                page_nbr = 0;
            }
        } catch (e) {
            page_nbr = 0
        }
        if (reservationList_ui.lastSearchBy != "") {
            if (reservationList_ui.lastSearchBy == "guestName") {
                this.GET_RESERVATION_BY_GUEST_NAME($("[DATI-ID=listReservations_search_byguestname]").val(), true);
            }
            if (reservationList_ui.lastSearchBy == "roomNumber") {
                this.GET_RESERVATION_BY_ROOM_NUMBER($("[DATI-ID=listReservations_search_byroomnumber]").val(), true);
            }
            if (reservationList_ui.lastSearchBy == "status") {
                this.GET_RESERVATION_BY_STATUS($("[DATI-ID=listreservation_search_byStatus]").val(), true);
            }
            if (reservationList_ui.lastSearchBy == "item") {
                this.GET_RESEVATION_BY_ITEM($("[DATI-ID=listreservation_search_byItem]").val(), true);
            }

            return false;
        }
        var data = {
            begin_date: reservationList_ui.selectedDate["datefrom"],
            end_date: reservationList_ui.selectedDate["dateto"],
            begin_time: reservationList_ui.selectedDate["timefrom"],
            end_time: reservationList_ui.selectedDate["timeto"],
            pagination: {
                page: page_nbr,
                quantity: reservationList_ui.nbrRows
            }

        };
        SSAPI.SUBMIT({
            uri: "/Cart/getAllReservations",
            data: data,
            onsuccess: "ListReservationsReceive",
            onerror: "ListReservationsReceive_error",
        })
    }

    EVENTS_UI() {
        $(document).ready(function() {

        });
        $(document).on('keyup', '[DATI-ID=listReservations_search_byguestname]', function() {
            reservationList_ui.lastSearchBy = "guestName";
            var val = $(this).val();
            if (val.length > 1) {
                $("[DATI-ID=reservationList]").attr("header_created", true);
                dati_table.init("reservationList");
                IReservation.GET_RESERVATION_BY_GUEST_NAME(val, false);
            } else if (val.length < 1) {
                reservationList_ui.lastSearchBy = "";
                $("[DATI-ID=reservationList]").attr("header_created", true);
                dati_table.init("reservationList");
                IReservation.GET_ALL_RESERVATION();
            }
        });
        $(document).on('keyup', '[DATI-ID=listReservations_search_byroomnumber]', function() {
            reservationList_ui.lastSearchBy = "roomNumber";
            var val = $(this).val();
            if (val.length > 0) {
                $("[DATI-ID=reservationList]").attr("header_created", true);
                dati_table.init("reservationList");
                IReservation.GET_RESERVATION_BY_ROOM_NUMBER(val, false);
            } else if (val.length < 1) {
                reservationList_ui.lastSearchBy = "";
                $("[DATI-ID=reservationList]").attr("header_created", true);
                dati_table.init("reservationList");
                IReservation.GET_ALL_RESERVATION();
            }
        });
        $(document).on('change', '[DATI-ID=listreservation_search_byStatus]', function() {
            reservationList_ui.lastSearchBy = "status";
            var val = $(this).val();

            if (val == "") {
                reservationList_ui.lastSearchBy = "";
                $("[DATI-ID=reservationList]").attr("header_created", true);
                dati_table.init("reservationList");
                IReservation.GET_ALL_RESERVATION();
            } else {
                $("[DATI-ID=reservationList]").attr("header_created", true);
                dati_table.init("reservationList");
                IReservation.GET_RESERVATION_BY_STATUS(val, false);
            }
        });
        $(document).on('change', '[DATI-ID=listreservation_search_byItem]', function() {
            reservationList_ui.lastSearchBy = "item";
            var val = $(this).val();

            if (val == "") {
                reservationList_ui.lastSearchBy = "";
                $("[DATI-ID=reservationList]").attr("header_created", true);
                dati_table.init("reservationList");
                IReservation.GET_ALL_RESERVATION();
            } else {
                $("[DATI-ID=reservationList]").attr("header_created", true);
                dati_table.init("reservationList");
                IReservation.GET_RESEVATION_BY_ITEM(val, false);
            }
        });
        document.addEventListener("SHOW_PAGE", function(e) {
            var page = e.detail.pageLink;

            if (page == "ReservationPage") {

                reservationList_ui.lastSearchBy = "";
                dati_table.init("reservationList");

                var event1 = new CustomEvent("ReservationListPageReady");
                document.dispatchEvent(event1);
                $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_search_byroomnumber]").css("display", "inline-block");
                $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_search_byguestname]").css("display", "none");
                $("[DATI-ID=searchBarReservation] [DATI-ID=listreservation_search_byStatus]").css("display", "none");
                $("[DATI-ID=searchBarReservation] [DATI-ID=listreservation_search_byItem]").css("display", "none");
                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                IReservation.GET_ALL_SERVICES();
                //IReservation.GET_ALL_RESERVATION();
                dati_searchBar.UPDATE("searchBarReservation");
                var event = new CustomEvent("ReservationDateTimePicker");
                document.dispatchEvent(event);
            }
        }, false);
    }


    EVENTS_SSAPI() {
        document.addEventListener("ServiceReservationReceive", function(e) {
            reservationList_ui.SERVICE_LIST(e.detail.res);
            console.log(e.detail.res);
            dati_searchBar.UPDATE("searchBarReservation");

        }, false);

        document.addEventListener("ListReservationsReceive", function(e) {
            reservationList_ui.DATALIST(e.detail.res);
            console.log(e.detail.res);
            try {
                reservationList_ui.totalS = e.detail.res[0].count1;
                reservationList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", reservationList_ui.nbrRowsS);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", reservationList_ui.totalS);
                dati_pagination.UPDATE("pagination_reservationList");
            } catch (e) {
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_reservationList");
            }
            //dati_pagination.UPDATE("pagination_reservationList");
        }, false);

        document.addEventListener("ListReservationsReceive_error", function(e) {
            console.log(e.detail);
        }, false);

        document.addEventListener("makeReservationConfirmed", function(e) {
            var pos = roomList_ui.GET_POSITION_IN_TAB(reservationList_ui.reservations, e.detail.res);
            reservationList_ui.reservations[pos]["status"] = 1;
            reservationList_ui.VALIDE(reservationList_ui.reservations[pos].id);
            dati_table.UPDATE("reservationList");
        }, false);

        document.addEventListener("makeReservationConfirmed_error", function(e) {

            console.log(e.detail);
        }, false);

        document.addEventListener("makeReservationRejected", function(e) {
            console.log("order confirmed", e.detail.res);
            var pos = roomList_ui.GET_POSITION_IN_TAB(reservationList_ui.reservations, e.detail.res);
            reservationList_ui.reservations[pos]["status"] = 2;
            dati_table.UPDATE("reservationList");
        }, false);

        document.addEventListener("makeReservationRejected_error", function(e) {

            console.log(e.detail);
        }, false);

        document.addEventListener("makeReservationValidated", function(e) {
            console.log("order confirmed", e.detail.res);
            var pos = roomList_ui.GET_POSITION_IN_TAB(reservationList_ui.reservations, e.detail.res);
            reservationList_ui.reservations[pos]["status_detail"] = 1;
            dati_table.UPDATE("reservationList");
        }, false);

        document.addEventListener("makeReservationValidated_error", function(e) {

            console.log(e.detail);
        }, false);

        document.addEventListener("makeReservationNotValidated", function(e) {
            console.log("order confirmed", e.detail.res);
            var pos = roomList_ui.GET_POSITION_IN_TAB(reservationList_ui.reservations, e.detail.res);
            reservationList_ui.reservations[pos]["status_detail"] = 2;
            dati_table.UPDATE("reservationList");
        }, false);

        document.addEventListener("makeReservationNotValidated_error", function(e) {

            console.log(e.detail);
        }, false);

        document.addEventListener("ResearchReservationsByGuestNameReceive", function(e) {
            console.log(e.detail.res, "e.detail.res");
            try {
                reservationList_ui.totalS = e.detail.res[0].count1;
                reservationList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", reservationList_ui.nbrRowsS);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", reservationList_ui.totalS);
                dati_pagination.UPDATE("pagination_reservationList");
            } catch (e) {
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_reservationList");
            }

            var event = new CustomEvent("ResearchReservationsByGuestNameReceiveEvent", { detail: { list: e.detail.res } });
            document.dispatchEvent(event);
        }, false);

        document.addEventListener("ResearchReservationsByGuestNameReceiveEvent", function(e) {
            reservationList_ui.RESEARCH_BY_GUEST_NAME(e.detail.list);
            console.log(e.detail.list, "maryoumyeeeet");
        }, false);

        document.addEventListener("ResearchReservationsByRoomNumberReceive", function(e) {
            console.log(e.detail.res, "e.detail.res");
            try {
                reservationList_ui.totalS = e.detail.res[0].count1;
                reservationList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", reservationList_ui.nbrRowsS);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", reservationList_ui.totalS);
                dati_pagination.UPDATE("pagination_reservationList");
            } catch (e) {
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_reservationList");
            }
            dati_pagination.UPDATE("pagination_reservationList");
            var event = new CustomEvent("ResearchReservationsByRoomNumberReceiveEvent", { detail: { list: e.detail.res } });
            document.dispatchEvent(event);
        }, false);

        document.addEventListener("ResearchReservationsByRoomNumberReceiveEvent", function(e) {
            reservationList_ui.RESEARCH_BY_ROOM_NUMBER(e.detail.list);
            console.log(e.detail.list, "maryoumyeeeet");
        }, false);

        document.addEventListener("ResearchReservationsByStatusReceive", function(e) {
            console.log(e.detail.res, "e.detail.res");
            try {
                reservationList_ui.totalS = e.detail.res[0].count1;
                reservationList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", reservationList_ui.nbrRowsS);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", reservationList_ui.totalS);
                dati_pagination.UPDATE("pagination_reservationList");
            } catch (e) {
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_reservationList");
            }
            dati_pagination.UPDATE("pagination_reservationList");
            var event = new CustomEvent("ResearchReservationsByStatusReceiveEvent", { detail: { list: e.detail.res } });
            document.dispatchEvent(event);
        }, false);

        document.addEventListener("ResearchReservationsByStatusReceiveEvent", function(e) {
            reservationList_ui.RESEARCH_BY_STATUS(e.detail.list);
            console.log(e.detail.list, "maryoumyeeeet");
        }, false);

        document.addEventListener("ResearchReservationsByItemReceive", function(e) {
            console.log(e.detail.res, "e.detail.res");
            try {
                reservationList_ui.totalS = e.detail.res[0].count1;
                reservationList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", reservationList_ui.nbrRowsS);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", reservationList_ui.totalS);
                dati_pagination.UPDATE("pagination_reservationList");
            } catch (e) {
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_reservationList");
            }
            dati_pagination.UPDATE("pagination_reservationList");
            var event = new CustomEvent("ResearchReservationsByItemReceiveEvent", { detail: { list: e.detail.res } });
            document.dispatchEvent(event);
        }, false);

        document.addEventListener("ResearchReservationsByItemReceiveEvent", function(e) {
            reservationList_ui.RESEARCH_BY_ITEM(e.detail.list);
            console.log(e.detail.list, "maryoumyeeeet");
        }, false);


        document.addEventListener("FilterAllReservationsBetweenTwoDate", function(e) {
            console.log(e.detail.res, "e.detail.res tesssssttttttt");

            try {
                reservationList_ui.totalS = e.detail.res[0].count1;
                reservationList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", reservationList_ui.nbrRowsS);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", reservationList_ui.totalS);
                dati_pagination.UPDATE("pagination_reservationList");
            } catch (e) {
                $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_reservationList");
            }
            dati_pagination.UPDATE("pagination_orderList");
            var event = new CustomEvent("FilterAllReservationsBetweenTwoDateEvent", { detail: { list: e.detail.res } });
            document.dispatchEvent(event);



        }, false);

        document.addEventListener("FilterAllReservationsBetweenTwoDateEvent", function(e) {
            reservationList_ui.RESEARCH_BETWEEN_TO_DATES(e.detail.list);
            console.log(e.detail.list, "maryoumyeeeet");
        }, false);
    }
}

let IReservation = new imp_Reservation();