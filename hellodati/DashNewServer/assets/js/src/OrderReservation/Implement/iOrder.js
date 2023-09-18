class imp_Order {

    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    GET_ALL_SERVICES() {
        SSAPI.SUBMIT({
            uri: "/Cart/getAllOrderedService",
            onsuccess: "ServiceCardOrderReservationReceive",
            onerror: "ServiceCardOrderReservationReceive_error",
        })
    }
    GET_OREDER() {
        console.log(orderList_ui.selectedDate["datefrom"], "dateeeee");
        var roomN = $("[dati-id=searchBarOrder]").find("[dati-id=listorder_search_byroomnumber]").val();
        var guestN = $("[dati-id=searchBarOrder]").find("[dati-id=listorder_search_byguestname]").val();
        var status = $("[dati-id=searchBarOrder]").find("[dati-id=listorder_search_byStatus]").val();
        var service = $("[dati-id=searchBarOrder]").find("[dati-id=listorder_search_byService]").val();
        if (roomN != "") {
            this.GET_OREDER_BY_ROOM_NUMBER(roomN, false);
        } else if (guestN != "") {
            this.GET_OREDER_BY_GUEST_NAME(guestN, false);
        } else if (status != "") {
            this.GET_OREDER_BY_STATUS(status, false);
        } else if (service != "") {
            this.GET_OREDER_BY_SERVICE(service, false);
        } else {
            this.GET_ALL_OREDER();
        }
    }
    GET_ALL_OREDER() {
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_orderList]")[0]).find("[dati_composent=PAGES]").val();
            if (!page_nbr) {
                page_nbr = 0;
            }
        } catch (e) {
            page_nbr = 0
        }
        if (orderList_ui.lastSearchBy != "") {
            if (orderList_ui.lastSearchBy == "guestName") {
                this.GET_OREDER_BY_GUEST_NAME($("[DATI-ID=listorder_search_byguestname]").val(), true);
            }
            if (orderList_ui.lastSearchBy == "roomNumber") {
                this.GET_OREDER_BY_ROOM_NUMBER($("[DATI-ID=listorder_search_byroomnumber]").val(), true);
            }
            if (orderList_ui.lastSearchBy == "status") {
                this.GET_OREDER_BY_STATUS($("[DATI-ID=listorder_search_byStatus]").val(), true);
            }
            if (orderList_ui.lastSearchBy == "service") {
                this.GET_OREDER_BY_SERVICE($("[DATI-ID=listorder_search_byService]").val(), true);
            }

            return false;
        }

        var btime = null;
        var etime = null;
        if (orderList_ui.selectedDate["timefrom"] != null) {
            btime = orderList_ui.selectedDate["timefrom"];
        }

        if (orderList_ui.selectedDate["timeto"] != null) {
            etime = orderList_ui.selectedDate["timeto"];
        }

        var data = {
            begin_date: orderList_ui.selectedDate["datefrom"],
            end_date: orderList_ui.selectedDate["dateto"],
            begin_time: btime,
            end_time: etime,
            pagination: {
                page: page_nbr,
                quantity: orderList_ui.nbrRows
            }
        };

        SSAPI.SUBMIT({
            uri: "/Cart/getAllOrders",
            data: data,
            onsuccess: "ListOrdersReceive",
            onerror: "ListOrdersReceive_error",
        });

        console.log("data iheb :", data);
    }
    GET_ALL_OREDER2() {
        var page_nbr = 0;
        orderList_ui.lastSearchBy = "";
        $("[DATI-ID=orderList]").attr("header_created", true);
        dati_table.init("orderList");
        var data = {
            begin_date: orderList_ui.selectedDate["datefrom"],
            end_date: orderList_ui.selectedDate["dateto"],
            begin_time: orderList_ui.selectedDate["timefrom"],
            end_time: orderList_ui.selectedDate["timeto"],
            pagination: {
                page: page_nbr,
                quantity: orderList_ui.nbrRows
            }
        };

        SSAPI.SUBMIT({
            uri: "/Cart/getAllOrders",
            data: data,
            onsuccess: "ListOrdersReceive",
            onerror: "ListOrdersReceive_error",
        });

        console.log("data iheb :", data);
    }

    GET_OREDER_BY_GUEST_NAME(val, page) {
        orderList_ui.lastSearchBy = "guestName";
        if (page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_orderList]")[0]).find("[dati_composent=PAGES]").val();
                if (!page_nbr) {
                    page_nbr = 0;
                }
            } catch (e) {
                page_nbr = 0
            }
        } else {
            page_nbr = 0;
        }

        SSAPI.SUBMIT({
            uri: "/Cart/getAllOrdersByGuestName",
            onsuccess: "ResearchOrderByGuestNameReceive",
            data: {
                name: val,
                begin_date: orderList_ui.selectedDate["datefrom"],
                end_date: orderList_ui.selectedDate["dateto"],
                begin_time: orderList_ui.selectedDate["timefrom"],
                end_time: orderList_ui.selectedDate["timeto"],
                pagination: {
                    page: page_nbr,
                    quantity: orderList_ui.nbrRows
                }
            }
        })
    }

    GET_OREDER_BY_ROOM_NUMBER(val, page) {
        orderList_ui.lastSearchBy = "roomNumber";
        if (page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_orderList]")[0]).find("[dati_composent=PAGES]").val();
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
            begin_date: orderList_ui.selectedDate["datefrom"],
            end_date: orderList_ui.selectedDate["dateto"],
            begin_time: orderList_ui.selectedDate["timefrom"],
            end_time: orderList_ui.selectedDate["timeto"],
            pagination: {
                page: page_nbr,
                quantity: orderList_ui.nbrRows
            }
        };
        SSAPI.SUBMIT({
            uri: "/Cart/getAllOrdersByRoomNumber",
            onsuccess: "ResearchOrderByRoomNumberReceive",
            data: data
        })

        console.log(data, "from search by room");
    }

    GET_OREDER_BY_STATUS(val, page) {
        orderList_ui.lastSearchBy = "status";
        if (page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_orderList]")[0]).find("[dati_composent=PAGES]").val();
                if (!page_nbr) {
                    page_nbr = 0;
                }
            } catch (e) {
                page_nbr = 0
            }
        } else {
            page_nbr = 0;
        }
        SSAPI.SUBMIT({
            uri: "/Cart/getAllOrdersByStatus",
            onsuccess: "ResearchOrderByStatus",
            data: {
                status: val,
                status_detail: 1,
                begin_date: orderList_ui.selectedDate["datefrom"],
                end_date: orderList_ui.selectedDate["dateto"],
                begin_time: orderList_ui.selectedDate["timefrom"],
                end_time: orderList_ui.selectedDate["timeto"],
                pagination: {
                    page: page_nbr,
                    quantity: orderList_ui.nbrRows
                }
            }
        })
    }

    GET_OREDER_BY_SERVICE(val, page) {
        orderList_ui.lastSearchBy = "service";
        if (page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_orderList]")[0]).find("[dati_composent=PAGES]").val();
                if (!page_nbr) {
                    page_nbr = 0;
                }
            } catch (e) {
                page_nbr = 0
            }
        } else {
            page_nbr = 0;
        }
        SSAPI.SUBMIT({
            uri: "/Cart/getAllOrdersByServiceType",
            onsuccess: "ResearchOrderByService",
            data: {
                service_type: val,
                begin_date: orderList_ui.selectedDate["datefrom"],
                end_date: orderList_ui.selectedDate["dateto"],
                begin_time: orderList_ui.selectedDate["timefrom"],
                end_time: orderList_ui.selectedDate["timeto"],
                pagination: {
                    page: page_nbr,
                    quantity: orderList_ui.nbrRows
                }
            }
        })
    }

    /*GET_OREDER_BETWEEN_TODATES(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_orderList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }
        if(orderList_ui.lastSearchBy != ""){
            if(orderList_ui.lastSearchBy == "guestName"){
                this.GET_OREDER_BY_GUEST_NAME($("[DATI-ID=listorder_search_byguestname]").val(),true);
            }
            if(orderList_ui.lastSearchBy == "roomNumber"){
                this.GET_OREDER_BY_ROOM_NUMBER($("[DATI-ID=listorder_search_byroomnumber]").val(),true);
            }
            if(orderList_ui.lastSearchBy == "status"){
                this.GET_OREDER_BY_STATUS($("[DATI-ID=listorder_search_byStatus]").val(),true);
            }
            if(orderList_ui.lastSearchBy == "service"){
                this.GET_OREDER_BY_SERVICE($("[DATI-ID=listorder_search_byService]").val(),true);
            }

            return false;
        }

        console.log("from order");
        var data ={
            begin_date:orderList_ui.selectedDate["datefrom"],
            end_date:orderList_ui.selectedDate["dateto"],
            begin_time:orderList_ui.selectedDate["timefrom"],
            end_time:orderList_ui.selectedDate["timeto"],
            pagination:{
                page: page_nbr,
                quantity:orderList_ui.nbrRows
            }

        };
        SSAPI.SUBMIT({
            uri:"/Cart/getAllOrders",
            data:data,
            onsuccess:"ListOrdersReceive",
            onerror:"ListOrdersReceive_error",
        });

        console.log(data,"tttttttttiiiiiimmeeee");
    }*/

    EVENTS_UI() {
        $(document).ready(function() {

        });

        $(document).on('keyup', '[DATI-ID=listorder_search_byguestname]', function() {
            orderList_ui.lastSearchBy = "guestName";
            var val = $(this).val();
            if (val.length > 1) {
                $("[DATI-ID=orderList]").attr("header_created", true);
                dati_table.init("orderList");
                IOrder.GET_OREDER_BY_GUEST_NAME(val, false);
            } else if (val.length < 1) {
                orderList_ui.lastSearchBy = "";
                $("[DATI-ID=orderList]").attr("header_created", true);
                dati_table.init("orderList");
                IOrder.GET_ALL_OREDER();
            }
        });

        $(document).on('keyup', '[DATI-ID=listorder_search_byroomnumber]', function() {
            orderList_ui.lastSearchBy = "roomNumber";
            var val = $(this).val();
            if (val.length > 0) {
                $("[DATI-ID=orderList]").attr("header_created", true);
                dati_table.init("orderList");
                IOrder.GET_OREDER_BY_ROOM_NUMBER(val, false);
            } else if (val.length < 1) {
                orderList_ui.lastSearchBy = "";
                $("[DATI-ID=orderList]").attr("header_created", true);
                dati_table.init("orderList");
                IOrder.GET_ALL_OREDER();
            }
        });

        $(document).on('change', '[DATI-ID=listorder_search_byStatus]', function() {
            orderList_ui.lastSearchBy = "status";
            console.log(orderList_ui.lastSearchBy, "staaaaaaaaatuuuuus");
            var val = $(this).val();

            if (val == "") {
                orderList_ui.lastSearchBy = "";
                $("[DATI-ID=orderList]").attr("header_created", true);
                dati_table.init("orderList");
                IOrder.GET_ALL_OREDER();
            } else {
                $("[DATI-ID=orderList]").attr("header_created", true);
                dati_table.init("orderList");
                IOrder.GET_OREDER_BY_STATUS(val, false);
            }
        });

        $(document).on('change', '[DATI-ID=listorder_search_byService]', function() {
            orderList_ui.lastSearchBy = "service";
            var val = $(this).val();

            if (val == "") {
                orderList_ui.lastSearchBy = "";
                $("[DATI-ID=orderList]").attr("header_created", true);
                dati_table.init("orderList");
                IOrder.GET_ALL_OREDER();
            } else {
                $("[DATI-ID=orderList]").attr("header_created", true);
                dati_table.init("orderList");
                IOrder.GET_OREDER_BY_SERVICE(val, false);
            }
        });

        document.addEventListener("SHOW_PAGE", function(e) {
            var page = e.detail.pageLink;

            if (page == "OrderPage") {
                undefined
                orderList_ui.lastSearchBy = "";
                dati_table.init("orderList");
                var event1 = new CustomEvent("OrderListPageReady");
                document.dispatchEvent(event1);
                var event = new CustomEvent("GetDateTimePickerOrder");
                document.dispatchEvent(event);

                $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byroomnumber]").css("display", "inline-block");
                $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byguestname]").css("display", "none");
                $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byStatus]").css("display", "none");
                $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byService]").css("display", "none");
                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                IOrder.GET_ALL_SERVICES();
                //IOrder.GET_ALL_OREDER();
                dati_searchBar.UPDATE("searchBarOrder");

            }
        }, false);
    }


    EVENTS_SSAPI() {
        document.addEventListener("ServiceCardOrderReservationReceive", function(e) {
            orderList_ui.SERVICES_LIST(e.detail.res);
            console.log(e.detail.res, "listSERVICES");
            dati_searchBar.UPDATE("searchBarOrder");
        }, false);

        document.addEventListener("ListOrdersReceive", function(e) {
            orderList_ui.DATALIST(e.detail.res);
            orderList_ui.INIT_DATATABLE_ORDER();
            console.log(e.detail.res, "receiveAll");


            try {
                orderList_ui.totalS = e.detail.res[0].count1;
                orderList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", orderList_ui.nbrRowsS);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", orderList_ui.totalS);
                dati_pagination.UPDATE("pagination_orderList");
            } catch (e) {
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_orderList");
            }


        }, false);


        document.addEventListener("ListOrdersReceive_error", function(e) {
            console.log(e.detail);
        }, false);

        document.addEventListener("CartConfirmed", function(e) {
            console.log("cart confirmed", e.detail.res);
            var pos = roomList_ui.GET_POSITION_IN_TAB(orderList_ui.orders, e.detail.res);
            console.log(orderList_ui.orders[pos][status], "pos de order");
            orderList_ui.orders[pos]["status"] = 1;
            dati_table.UPDATE("orderList");
            //            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);

        document.addEventListener("CartConfirmed_error", function(e) {
            console.log(e.detail);
        }, false);

        document.addEventListener("CartRejected", function(e) {
            var pos = roomList_ui.GET_POSITION_IN_TAB(orderList_ui.orders, e.detail.res);
            console.log(orderList_ui.orders[pos][status], "pos de order");
            orderList_ui.orders[pos]["status"] = 2;
            dati_table.UPDATE("orderList");
        }, false);

        document.addEventListener("CartRejected_error", function(e) {
            console.log(e.detail);
        }, false);

        document.addEventListener("OrderConfirmed", function(e) {
            console.log("order confirmed", e.detail.res[0]);
            orderList_ui.nbrOrderWaiting = orderList_ui.nbrOrderWaiting - 1;
            orderList_ui.nbrOrderInPreparation = orderList_ui.nbrOrderInPreparation + 1;
            orderList_ui.totalOrderInProgress = orderList_ui.totalOrderInProgress + 1;
            console.log("2311", orderList_ui.nbrOrderWaiting);
            if (orderList_ui.nbrOrderWaiting == 0) {
                for (var i = 0; i < orderList_ui.orders.length; i++) {
                    for (var j = 0; j < orderList_ui.orders[i]["CartOrdered"].length; j++) {
                        if (orderList_ui.orders[i]["CartOrdered"][j].id == e.detail.res[0]) {
                            orderList_ui.orders[i].status = 1;
                        }
                    }
                }
            }

            orderList_ui.selectedOrderDetail["status"] = 1;
            dati_table.UPDATE("orderDetailsList");
            dati_table.UPDATE("orderList");
            console.log(orderList_ui.nbrOrderWaiting, "waitiiiiiing");
            console.log(orderList_ui.nbrOrderDelivered, "delivereeed");
            console.log(orderList_ui.nbrOrderRejected, "rejecteeeed");
            console.log(orderList_ui.nbrOrderInPreparation, "inPreparation");
            console.log(orderList_ui.nbrOrderInDelivery, "inDeliveryyyyy");
            console.log(orderList_ui.totalOrderInProgress, "inProgresss");
        }, false);

        document.addEventListener("OrderConfirmed_error", function(e) {
            console.log(e.detail);
        }, false);

        document.addEventListener("OrderRejected", function(e) {
            console.log(e.detail);
            console.log("teeeesssst", orderList_ui.selectedOrderDetail["status"]);
            if (orderList_ui.selectedOrderDetail["status"] == 0) {
                orderList_ui.nbrOrderWaiting = orderList_ui.nbrOrderWaiting - 1;
                orderList_ui.nbrOrderRejected = orderList_ui.nbrOrderRejected + 1;
            } else {
                orderList_ui.totalOrderInProgress = orderList_ui.totalOrderInProgress - 1;
                orderList_ui.nbrOrderRejected = orderList_ui.nbrOrderRejected + 1;
            }
            console.log("2311", orderList_ui.nbrOrderInDelivery);
            if (orderList_ui.totalOrderInProgress == 0 && orderList_ui.nbrOrderWaiting == 0) {
                for (var i = 0; i < orderList_ui.orders.length; i++) {
                    for (var j = 0; j < orderList_ui.orders[i]["CartOrdered"].length; j++) {
                        if (orderList_ui.orders[i]["CartOrdered"][j].id == e.detail.res[0]) {
                            orderList_ui.orders[i].status = 2;
                        }
                    }
                }
            }

            orderList_ui.selectedOrderDetail["status"] = 2;
            dati_table.UPDATE("orderDetailsList");
            dati_table.UPDATE("orderList");
            console.log(orderList_ui.nbrOrderWaiting, "waitiiiiiing");
            console.log(orderList_ui.nbrOrderDelivered, "delivereeed");
            console.log(orderList_ui.nbrOrderRejected, "rejecteeeed");
            console.log(orderList_ui.nbrOrderInPreparation, "inPreparation");
            console.log(orderList_ui.nbrOrderInDelivery, "inDeliveryyyyy");
            console.log(orderList_ui.totalOrderInProgress, "inProgresss");
        }, false);

        document.addEventListener("OrderRejected_error", function(e) {

            console.log(e.detail);
        }, false);

        document.addEventListener("makeOrderPrepered", function(e) {
            console.log("order confirmed", e.detail.res[0]);
            orderList_ui.nbrOrderInPreparation = orderList_ui.nbrOrderInPreparation - 1;
            orderList_ui.nbrOrderInDelivery = orderList_ui.nbrOrderInDelivery + 1;
            /*orderList_ui.nbrOrderInprogress=orderList_ui.nbrOrderInprogress-1;
            console.log("2311",orderList_ui.nbrOrderInprogress);
            if (orderList_ui.nbrOrderInprogress==0 && orderList_ui.nbrOrderWaiting==0){
                for (var i=0;i<orderList_ui.orders.length;i++){
                    for (var j=0;j<orderList_ui.orders[i]["CartOrdered"].length;j++){
                        if (orderList_ui.orders[i]["CartOrdered"][j].id==e.detail.res[0]){
                            orderList_ui.orders[i].status=2;
                        }
                    }
                }
            }*/
            orderList_ui.selectedOrderDetail["status_detail"] = 1;
            dati_table.UPDATE("orderDetailsList");
            dati_table.UPDATE("orderList");
            console.log(orderList_ui.nbrOrderWaiting, "waitiiiiiing");
            console.log(orderList_ui.nbrOrderDelivered, "delivereeed");
            console.log(orderList_ui.nbrOrderRejected, "rejecteeeed");
            console.log(orderList_ui.nbrOrderInPreparation, "inPreparation");
            console.log(orderList_ui.nbrOrderInDelivery, "inDeliveryyyyy");
            console.log(orderList_ui.totalOrderInProgress, "inProgresss");
        }, false);

        document.addEventListener("makeOrderPrepered_error", function(e) {

            console.log(e.detail);
        }, false);

        document.addEventListener("makeOrderDelivered", function(e) {
            console.log("order confirmed", e.detail.res[0]);
            orderList_ui.nbrOrderInDelivery = orderList_ui.nbrOrderInDelivery - 1;
            orderList_ui.totalOrderInProgress = orderList_ui.totalOrderInProgress - 1;
            orderList_ui.nbrOrderDelivered = orderList_ui.nbrOrderDelivered + 1;
            console.log("2311", orderList_ui.nbrOrderInDelivery);
            if (orderList_ui.nbrOrderInPreparation == 0 && orderList_ui.nbrOrderWaiting == 0 && orderList_ui.nbrOrderInDelivery == 0) {
                for (var i = 0; i < orderList_ui.orders.length; i++) {
                    for (var j = 0; j < orderList_ui.orders[i]["CartOrdered"].length; j++) {
                        if (orderList_ui.orders[i]["CartOrdered"][j].id == e.detail.res[0]) {
                            orderList_ui.orders[i].status = 2;
                        }
                    }
                }
            }
            orderList_ui.selectedOrderDetail["status_detail"] = 2;
            dati_table.UPDATE("orderDetailsList");
            dati_table.UPDATE("orderList");
            console.log(orderList_ui.nbrOrderWaiting, "waitiiiiiing");
            console.log(orderList_ui.nbrOrderDelivered, "delivereeed");
            console.log(orderList_ui.nbrOrderRejected, "rejecteeeed");
            console.log(orderList_ui.nbrOrderInPreparation, "inPreparation");
            console.log(orderList_ui.nbrOrderInDelivery, "inDeliveryyyyy");
            console.log(orderList_ui.totalOrderInProgress, "inProgresss");
        }, false);

        document.addEventListener("makeOrderDelivered_error", function(e) {

            console.log(e.detail);
        }, false);

        document.addEventListener("ResearchOrderByGuestNameReceive", function(e) {
            console.log(e.detail.res, "e.detail.res");
            try {
                orderList_ui.totalS = e.detail.res[0].count1;
                orderList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", orderList_ui.nbrRowsS);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", orderList_ui.totalS);
                dati_pagination.UPDATE("pagination_orderList");
            } catch (e) {
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_orderList");
            }

            var event = new CustomEvent("ResearchOrderByGuestNameReceiveEvent", { detail: { list: e.detail.res } });
            document.dispatchEvent(event);

        }, false);

        document.addEventListener("ResearchOrderByGuestNameReceiveEvent", function(e) {
            orderList_ui.RESEARCH_BY_GUEST_NAME(e.detail.list);
            console.log(e.detail.list, "maryoumyeeeet");
        }, false);

        document.addEventListener("ResearchOrderByRoomNumberReceive", function(e) {
            console.log(e.detail.res, "e.detail.res");
            try {
                orderList_ui.totalS = e.detail.res[0].count1;
                orderList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", orderList_ui.nbrRowsS);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", orderList_ui.totalS);
                dati_pagination.UPDATE("pagination_orderList");
            } catch (e) {
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_orderList");
            }
            dati_pagination.UPDATE("pagination_orderList");
            var event = new CustomEvent("ResearchOrderByRoomNumberReceiveEvent", { detail: { list: e.detail.res } });
            document.dispatchEvent(event);
        }, false);

        document.addEventListener("ResearchOrderByRoomNumberReceiveEvent", function(e) {
            orderList_ui.RESEARCH_BY_ROOM_NUMBER(e.detail.list);
            console.log(e.detail.list, "maryoumyeeeet");
        }, false);

        document.addEventListener("ResearchOrderByStatus", function(e) {
            console.log(e.detail.res, "e.detail.res tesssssttttttt");

            try {
                orderList_ui.totalS = e.detail.res[0].count1;
                orderList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", orderList_ui.nbrRowsS);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", orderList_ui.totalS);
                dati_pagination.UPDATE("pagination_orderList");
            } catch (e) {
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_orderList");
            }

            dati_pagination.UPDATE("pagination_orderList");
            var event = new CustomEvent("ResearchOrderByStatusEvent", { detail: { list: e.detail.res } });
            document.dispatchEvent(event);



        }, false);

        document.addEventListener("ResearchOrderByStatusEvent", function(e) {
            orderList_ui.RESEARCH_BY_STATUS(e.detail.list);
            console.log(e.detail.list, "maryoumyeeeet");
        }, false);

        document.addEventListener("ResearchOrderByService", function(e) {
            console.log(e.detail.res, "e.detail.res tesssssttttttt");

            try {
                orderList_ui.totalS = e.detail.res[0].count1;
                orderList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", orderList_ui.nbrRowsS);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", orderList_ui.totalS);
                dati_pagination.UPDATE("pagination_orderList");
            } catch (e) {
                $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", 0);
                $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", 0);
                dati_pagination.UPDATE("pagination_orderList");
            }
            dati_pagination.UPDATE("pagination_orderList");
            var event = new CustomEvent("ResearchOrderByServiceEvent", { detail: { list: e.detail.res } });
            document.dispatchEvent(event);



        }, false);

        document.addEventListener("ResearchOrderByServiceEvent", function(e) {
            orderList_ui.RESEARCH_BY_SERVICE(e.detail.list);
            console.log(e.detail.list, "maryoumyeeeet");
        }, false);

    }
}

let IOrder = new imp_Order();