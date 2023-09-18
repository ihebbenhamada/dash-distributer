let Ui_orderList = class {
    constructor() {
        this.total = 0;
        this.selectedOrder = null;
        this.selectedOrderDetail = null;
        this.nbrRows = 10;
        this.totalS = 0;
        this.nbrRowsS = 10;
        this.lastSearchBy = "";
        this.nbrOrderWaiting = 0;
        this.nbrOrderInPreparation = 0;
        this.totalOrderInProgress = 0;
        this.nbrOrderInDelivery = 0;
        this.nbrOrderDelivered = 0;
        this.nbrOrderRejected = 0;
        this.selectedDateFrom = null;
        this.selectedDateTo = null;
        this.selectedTimeFrom = null;
        this.selectedTimeTo = null;
        $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", this.nbrRows);
        this.optionsStatus = {
            "All": "",
            "Waiting": 0,
            "In Progress": 3,
            "Finished": 4,
        };
        this.optionsServices = {};
        this.optionsServices["All Service"] = "";
        this.selectedDate = [];
        this.filterBy = {
            "Room Number": 1,
            "Guest Name": 2,
            "Status": 3,
            "Service": 4,
        };

        $(document).on('change', '[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]', function () {
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1" :
                    IOrder.GET_ALL_OREDER2();
                    $("[DATI-ID=searchBarOrder] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarOrder] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byroomnumber]").css("display", "inline-block");
                    break;
                case "2" :
                    IOrder.GET_ALL_OREDER2();
                    $("[DATI-ID=searchBarOrder] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarOrder] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byguestname]").css("display", "inline-block");
                    break;
                case "3" :
                    IOrder.GET_ALL_OREDER2();
                    $("[DATI-ID=searchBarOrder] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarOrder] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byStatus]").css("display", "inline-block");
                    break;
                case "4" :
                    IOrder.GET_ALL_OREDER2();
                    $("[DATI-ID=searchBarOrder] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarOrder] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byService]").css("display", "inline-block");
                    break;
            }
        });

    }

    SERVICES_LIST(data) {
        this.optionsServices = {};
        this.optionsServices["All Service"] = "";
        for (var i = 0; i < data.length; i++) {
            this.optionsServices[data[i].name] = data[i]["Service_Type"].id
        }
        console.log(this.optionsServices);
    }

    getRoomNumber(attribute) {
        if (attribute != null && attribute != "null" && attribute != "") {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.orders, attribute);
            if (this.orders[pos] != null) {
                var section = "";
                var floor = "";
                var room_number = "";
                if (this.orders[pos]["Guest"]["Room"].section != null) {
                    section = "S" + this.orders[pos]["Guest"]["Room"].section;
                } else {
                    section = "S";
                }
                if (this.orders[pos]["Guest"]["Room"].floor != null) {
                    floor = "F" + this.orders[pos]["Guest"]["Room"].floor;
                } else {
                    floor = "F";
                }
                if (this.orders[pos]["Guest"]["Room"].room_number != null) {
                    room_number = "N" + this.orders[pos]["Guest"]["Room"].room_number;
                } else {
                    room_number = "N";
                }

                return section + "-" + floor + "-" + room_number;
            } else {
                return "--";
            }
        } else {
            return "- -";
        }
    }

    getGuestName(attribute) {
        if (attribute != null && attribute != "null" && attribute != "") {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.orders, attribute);
            if (this.orders[pos]["Guest"] != null) {
                return this.orders[pos]["Guest"].f_name + " " + this.orders[pos]["Guest"].l_name;
            } else {
                return "--";
            }
        } else {
            return "- -";
        }
    }

    getBoutique(attribute) {
        if (attribute != null && attribute != "null" && attribute != "") {
            return attribute;
        } else {
            return "- -";
        }
    }

    DATALIST(data) {

        this.orders = data;
        try {
            this.total = data[0].count1;
            this.nbrRows = data[0].quantity1;
            $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", orderList_ui.nbrRows);
            $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", orderList_ui.total);
            dati_pagination.UPDATE("pagination_orderList");
        } catch (e) {
            $("[DATI-ID=pagination_orderList]").attr("DATI-NBR-ROW", 0);
            $("[DATI-ID=pagination_orderList]").attr("DATI-TOTAL-PAGE", 10);
            dati_pagination.UPDATE("pagination_orderList");
        }


    }

    SELECTED_STATUS(s, k) {
        console.log(s, k, "azazazazazaz");
        setTimeout(function () {
            $("[DATI-ID=listOrders_filter_by]").val(s);
            $("[DATI-ID=listorder_search_byStatus]").val(k);
            $("[DATI-ID=OrderDateTimePicker]").attr("default-value","oneYear");
            dati_date_time_picker.UPDATE("OrderDateTimePicker");
            if (s == 3) {
                $("[DATI-ID=searchBarOrder] [dati-composent=input]").css("display", "none");
                $("[DATI-ID=searchBarOrder] [dati-composent=input]").val("");
                $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").val(s);
                $("[DATI-ID=searchBarOrder] [DATI-ID=listOrders_filter_by]").css("display", "inline-block");
                $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byStatus]").css("display", "inline-block");
                $("[DATI-ID=searchBarOrder] [DATI-ID=listorder_search_byStatus]").val(k);
                $("[DATI-ID=orderList]").attr("header_created", true);
                dati_table.init("orderList");
                IOrder.GET_OREDER_BY_STATUS(k, false);

            }

        }, 1000);
    }

    RESEARCH_BY_GUEST_NAME(data) {
        orderList_ui.orders = data;
        dati_table.UPDATE("orderList");
    }

    RESEARCH_BY_ROOM_NUMBER(data) {
        orderList_ui.orders = data;
        dati_table.UPDATE("orderList");
    }

    RESEARCH_BY_STATUS(data) {
        orderList_ui.orders = data;
        dati_table.UPDATE("orderList");
    }

    RESEARCH_BY_SERVICE(data) {
        orderList_ui.orders = data;
        dati_table.UPDATE("orderList");
    }

    RESEARCH_BETWEEN_TO_DATES(data) {
        orderList_ui.orders = data;
        dati_table.UPDATE("orderList");
    }

    getPayedAmount(attribute) {
        if (attribute != null && attribute != "null" && attribute != "") {
            return attribute + " DT";
        } else {
            return "0 DT";
        }
    }

    itemsInCart(attribute) {
        if (attribute != null) {
            try {
                var pos = roomList_ui.GET_POSITION_IN_TAB(this.orders, attribute);
                var count = this.orders[pos]["CartOrdered"].length;
                return count;
            } catch (e) {
                return '';
            }
        } else {
            return ''
        }
    }

    getDate(attribute) {
        if (attribute != null) {

            var pos = roomList_ui.GET_POSITION_IN_TAB(this.orders, attribute);
            var date = this.orders[pos].insered_at_date;
            var time = this.orders[pos].insered_at_time;
            var index1 = time.indexOf(":");
            if (index1 != -1) {
                var index2 = time.indexOf(":", index1 + 1);
                if (index2 != -1) {
                    time = time.substr(0, index2);
                }
            }
            var dateTime = date + " " + time;
            return dateTime;


        } else {
            return "";
        }
    }

    getStatut(attribute) {

        if (attribute != null) {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.orders, attribute);
            var status = this.orders[pos].status;
            if (status == 0) {
                return '<div style="width: 100px;text-align: center;color: rgb(228,175,131);background-color: rgb(255,235,214);border-radius: 20px;padding: 8px;font-size: 13px">Waiting</div>';
            } else if (status == 2) {
                return '<div style="width: 100px;text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Finished</div>';
            } else if (status == 1) {
                var pos1 = roomList_ui.GET_POSITION_IN_TAB(this.orders, attribute);
                var statusDetail = this.orders[pos1].status_detail;
                if (statusDetail == 0) {
                    return '<div style="width: 100px;text-align: center;color: rgb(117,141,180);background-color: rgb(225,236,253);border-radius: 20px;padding: 8px;font-size: 13px;text-overflow: ellipsis;white-space: nowrap;">In Progress</div>';
                } else if (statusDetail == 1) {
                    return '<div style="width: 100px;text-align: center;color: rgb(117,141,180);background-color: rgb(225,236,253);border-radius: 20px;padding: 8px;font-size: 13px">In Progress</div>';
                } else {
                    return '<div style="width: 100px;text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Finished</div>';
                }
            }
        } else {
            return "";
        }
    }

    INIT_DATATABLE_ORDER() {
        /* var action = '<tr DATI-COMPOSENT="datatable-btn-details" onclick="orderList_ui.setSelected(this)"></tr>';
         $("[DATI-ID=orderList]").append(action)*/
    }

    // Accept / Reject CartOrder
    ACCEPT(btnAccept) {
        var i = $(btnAccept).parent().parent().parent().attr("DATI-ROW");
        this.selectedOrder = this.orders[i];
        var id = this.selectedOrder.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeCartConfirmed",
            data: data,
            onsuccess: "CartConfirmed",
            onerror: "CartConfirmed_error"
        });


    }

    REJECT(btnReject) {
        var i = $(btnReject).parent().parent().parent().attr("DATI-ROW");
        this.selectedOrder = this.orders[i];
        var id = this.selectedOrder.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeCartRejected",
            data: data,
            onsuccess: "CartRejected",
            onerror: "CartRejected_error"
        });
    }

    REJECT_FROM_DIV(btnReject) {
        var i = $(btnReject).parent().parent().parent().parent().attr("DATI-ROW");
        this.selectedOrder = this.orders[i];
        var id = this.selectedOrder.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeCartRejected",
            data: data,
            onsuccess: "CartRejected",
            onerror: "CartRejected_error"
        });
    }

    START_DELIVERY(element) {

        var i = $(element).parent().parent().parent().parent().attr("DATI-ROW");
        /*this.selectedOrder = this.orders[i];
        console.log("from accept",this.selectedOrder);
        var id = this.selectedOrder.id;

        var data={
            id:id,
        };

        SSAPI.SUBMIT({
            uri:"/Cart/makeCartConfirmed",
            data:data,
            onsuccess:"CartConfirmed",
            onerror:"CartConfirmed_error"
        });*/
    }

    DELIVERED(element) {
        var i = $(element).parent().parent().parent().parent().attr("DATI-ROW");

        /*this.selectedOrder = this.orders[i];
        console.log("from accept",this.selectedOrder);
        var id = this.selectedOrder.id;

        var data={
            id:id,
        };

        SSAPI.SUBMIT({
            uri:"/Cart/makeCartConfirmed",
            data:data,
            onsuccess:"CartConfirmed",
            onerror:"CartConfirmed_error"
        });*/
    }

    getPriceItem(attribute) {
        if (attribute != null || attribute != "" || attribute != "null") {
            return attribute + " DT"
        }
    }

    //Select order onClick
    setSelected(iconDetail) {
        this.nbrOrderWaiting = 0;
        this.nbrOrderDelivered = 0;
        this.nbrOrderRejected = 0;
        this.nbrOrderInDelivery = 0;
        this.nbrOrderInPreparation = 0;
        this.totalOrderInProgress = 0;

        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedOrder = this.orders[i];
        console.log(this.selectedOrder, "hobbbbbbba");
        for (var k = 0; k < this.selectedOrder["CartOrdered"].length; k++) {
            if (this.selectedOrder["CartOrdered"][k].status == 0) {
                this.nbrOrderWaiting++
            }
            if (this.selectedOrder["CartOrdered"][k].status == 1 && this.selectedOrder["CartOrdered"][k].status_detail == 0) {
                this.nbrOrderInPreparation++
            }
            if (this.selectedOrder["CartOrdered"][k].status == 1 && this.selectedOrder["CartOrdered"][k].status_detail == 1) {
                this.nbrOrderInDelivery++
            }
            if (this.selectedOrder["CartOrdered"][k].status == 1 && this.selectedOrder["CartOrdered"][k].status_detail == 2) {
                this.nbrOrderDelivered++
            }
            if (this.selectedOrder["CartOrdered"][k].status == 2) {
                this.nbrOrderRejected++
            }
        }

        this.totalOrderInProgress = this.nbrOrderInPreparation + this.nbrOrderInDelivery;
        console.log(this.nbrOrderWaiting, "waitiiiiiing");
        console.log(this.nbrOrderDelivered, "delivereeed");
        console.log(this.nbrOrderRejected, "rejecteeeed");
        console.log(this.nbrOrderInPreparation, "inPreparation");
        console.log(this.nbrOrderInDelivery, "inDeliveryyyyy");
        console.log(this.totalOrderInProgress, "inProgresss");
        $("[DATI-FORM-POPUP-DETAIL-ORDER]").css("display", "flex");
        dati_table.UPDATE("orderDetailsList");
        try {
            if (this.orders[i]["Guest"] != "null" && this.orders[i]["Guest"] != null && this.orders[i]["Guest"] != "") {

                try {
                    $("[DATI-COUNTRY-GUEST-ORDER]").html("" + this.selectedOrder["Guest"]["Country"].name);
                } catch (e) {
                    $("[DATI-COUNTRY-GUEST-ORDER]").html("--");
                }

                $("[DATI-MAIL-GUEST-ORDER]").html(this.selectedOrder["Guest"].email);
                $("[DATI-PHONE-GUEST-ORDER]").html(this.selectedOrder["Guest"].phone_number);
                $("[DATI-ROOM-GUEST-ORDER]").html(this.selectedOrder["Guest"]["Room"].room_number);
                $("[DATI-NAME-GUEST-ORDER]").html(this.selectedOrder["Guest"].f_name + " " + this.selectedOrder["Guest"].l_name);
            } else {

                $("[ DATI-MAIL-GUEST-ORDER]").html("");
                $("[DATI-PHONE-GUEST-ORDER]").html("");
                $("[DATI-ROOM-GUEST-ORDER]").html("");
                $("[DATI-COUNTRY-GUEST-ORDER]").html("");
                $("[DATI-NAME-GUEST-ORDER]").html("");
            }
        } catch (e) {
        }
    }

    CLOSE_POPUP() {
        $("[DATI-FORM-POPUP-DETAIL-ORDER]").css("display", "none")
    }

    GET_DETAIL_BUTTOM_HTML(attribute) {
        var btnAccept = '<input class="demande-btn-details" type="submit" onclick="orderList_ui.setSelected(this)" value="Details"/>';
        return btnAccept;
    }

    GET_ACCEPT_REJECT_PROGRESS(attribute) {

        if (attribute != null) {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.orders, attribute);
            var status = this.orders[pos].status;
            if (status == 0) {
                var btnAcceptReject = '<div style="display:inline-block;width: 100%;" >' +
                    '<input style="float: right" class="demande-btn-accept" type="submit" onclick="orderList_ui.ACCEPT(this)" value="Accept"/>' +
                    '<input style="float: right; margin-right: 5px" class="demande-btn-reject" type="submit" onclick="orderList_ui.REJECT(this)" value="Reject"/>' +
                    '</div>';
                return btnAcceptReject;
            } else if (status == 2) {
                return '<div style="width: 100%;height: 3px;background-color: #d86060">' +
                    '</div>';
            } else if (status == 1) {
                var pos1 = roomList_ui.GET_POSITION_IN_TAB(this.orders, attribute);
                var statusDetail = this.orders[pos1].status_detail;
                if (statusDetail == 0) {
                    return '<div>' +
                        '<div style="display: flex;justify-content: space-between">' +
                        '<div DATI-PROGRESS class="animated-progress progress-green">\n' +
                        '   <span span data-progress="50"></span>\n' +
                        '</div>' +
                        '<div DATI-PROGRESS class="animated-progress progress-orange">\n' +
                        '   <span span data-progress="70"></span>\n' +
                        '</div>' +
                        '<div DATI-PROGRESS class="animated-progress progress-red">\n' +
                        '   <span span data-progress="30"></span>\n' +
                        '</div>' +
                        '</div>' +
                        /*'<div style="width: 100%;height: 3px;background-color: #dfdfdf;margin-bottom: 6px"><div style="width: 33%;height: 3px;background-color: #4bb81d"></div></div>' +*/
                        '<div style="display:inline-block;width: 100%;" >' +
                        '<input style="display:inline-block; padding-left: 0.1vw !important;padding-right: 0.1vw !important; width: 6vw; float: left;height: 20px !important; font-size: .8vw !important;" class="demande-btn-accept"  type="submit" onclick="orderList_ui.START_DELIVERY(this)" value="Next Status"/>' +
                        '<input style="isplay:inline-block; width: 6vw; padding-left: 0.1vw !important;padding-right: 0.1vw !important; float: left;height: 20px !important;font-size: .8vw !important;" class="demande-btn-reject"  type="submit" onclick="orderList_ui.REJECT_FROM_DIV(this)" value="Discard"/>' +
                        '</div>' +
                        '</div>'
                } else if (statusDetail == 1) {
                    return '<div>' +
                        '<div style="width: 100%;height: 3px;background-color: #dfdfdf;margin-bottom: 6px"><div style="width: 66%;height: 3px;background-color: #4bb81d"></div></div>' +
                        '<div style="display:inline-block;width: 100%;" >' +
                        '<input style="display:inline-block; padding-left: 0.1vw !important;padding-right: 0.1vw !important; width: 6vw; float: left;height: 20px !important; font-size: .8vw !important;" class="demande-btn-accept"  type="submit" onclick="orderList_ui.DELIVERED(this)" value="Next Status"/>' +
                        '<input style="isplay:inline-block; width: 6vw; padding-left: 0.1vw !important;padding-right: 0.1vw !important; float: right;height: 20px !important;font-size: .8vw !important;" class="demande-btn-reject"  type="submit" onclick="orderList_ui.REJECT_FROM_DIV(this)" value="Discard"/>' +
                        '</div>' +
                        '</div>'
                } else {
                    return '<div style="width: 100%;height: 3px;background-color: #dfdfdf"><div style="width: 100%;height: 3px;background-color: #4bb81d"></div>'
                }
            }

        } else {
            return "";
        }
    }

    //*******************************************************ItemOrder***************************************************//
    //Accept / Reject Order
    ACCEPT_ORDER(btnAccept) {
        var i = $(btnAccept).parent().parent().parent().attr("DATI-ROW");
        this.selectedOrderDetail = this.selectedOrder.CartOrdered[i];
        var id = this.selectedOrderDetail.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeOrderConfirmed",
            data: data,
            onsuccess: "OrderConfirmed",
            onerror: "OrderConfirmed_error"
        });
    }

    REJECT_ORDER(btnReject) {
        var i = $(btnReject).parent().parent().parent().attr("DATI-ROW");
        this.selectedOrderDetail = this.selectedOrder.CartOrdered[i];
        var id = this.selectedOrderDetail.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeOrderRejected",
            data: data,
            onsuccess: "OrderRejected",
            onerror: "OrderRejected_error"
        });
    }

    REJECT_ORDER_FROM_DIV(btnReject) {
        var i = $(btnReject).parent().parent().parent().parent().attr("DATI-ROW");
        this.selectedOrderDetail = this.selectedOrder.CartOrdered[i];
        var id = this.selectedOrderDetail.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeOrderRejected",
            data: data,
            onsuccess: "OrderRejected",
            onerror: "OrderRejected_error"
        });
    }

    getStatutItem(attribute) {
        if (attribute != null) {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.selectedOrder.CartOrdered, attribute);
            var status = this.selectedOrder.CartOrdered[pos].status;
            if (status == 0) {
                return '<div style="text-align: center;color: rgb(228,175,131);background-color: rgb(255,235,214);border-radius: 20px;padding: 8px;font-size: 13px">Waiting</div>';
            } else if (status == 2) {
                return '<div style="text-align: center;color: rgb(215,92,84);background-color: rgb(247,240,241);border-radius: 20px;padding: 8px;font-size: 13px">Rejected</div>';
            } else if (status == 1) {
                var pos1 = roomList_ui.GET_POSITION_IN_TAB(this.selectedOrder.CartOrdered, attribute);
                var statusDetail = this.selectedOrder.CartOrdered[pos1].status_detail;
                if (statusDetail == 0) {
                    return '<div style="text-align: center;color: rgb(117,141,180);background-color: rgb(225,236,253);border-radius: 20px;padding: 8px;font-size: 13px;text-overflow: ellipsis;white-space: nowrap;">In Preparation</div>';
                } else if (statusDetail == 1) {
                    return '<div style="text-align: center;color: rgb(117,141,180);background-color: rgb(225,236,253);border-radius: 20px;padding: 8px;font-size: 13px">In Delivery</div>';
                } else {
                    return '<div style="text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Delivered</div>'
                }
            }

        } else {
            return "";
        }
    }

    START_DELIVERY_ITEM(element) {

        var i = $(element).parent().parent().parent().parent().attr("DATI-ROW");
        this.selectedOrderDetail = this.selectedOrder.CartOrdered[i];
        var id = this.selectedOrderDetail.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeOrderPrepered",
            data: data,
            onsuccess: "makeOrderPrepered",
            onerror: "makeOrderPrepered_error"
        });
    }

    DELIVERED_ITEM(element) {
        var i = $(element).parent().parent().parent().parent().attr("DATI-ROW");
        this.selectedOrderDetail = this.selectedOrder.CartOrdered[i];
        var id = this.selectedOrderDetail.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeOrderDelivered",
            data: data,
            onsuccess: "makeOrderDelivered",
            onerror: "makeOrderDelivered_error"
        });
    }

    GET_ACCEPT_REJECT_PROGRESS_ITEM_CART(attribute) {
        setTimeout(function () {
            $("[DATI-PAGE=OrderPage]").find("[DATI-PROGRESS]").find("[span]").each(function () {
                $(this).animate(
                    {
                        width: $(this).attr("data-progress") + "%",
                    },
                    1000
                );
                $(this).text($(this).attr("data-progress") + "%");
            });
        }, 200);

        if (attribute != null) {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.selectedOrder.CartOrdered, attribute);
            var status = this.selectedOrder.CartOrdered[pos].status;
            if (status == 0) {
                var btnAcceptReject = '<div style="display:inline-block;width: 100%;" >' +
                    '<input style="float: right" class="demande-btn-accept" type="submit" onclick="orderList_ui.ACCEPT_ORDER(this)" value="Accept"/>' +
                    '<input style="float: right; margin-right: 5px" class="demande-btn-reject" type="submit" onclick="orderList_ui.REJECT_ORDER(this)" value="Reject"/>' +

                    '</div>';
                return btnAcceptReject;
            } else if (status == 2) {
                return '<div DATI-PROGRESS class="animated-progress progress-red">\n' +
                    '   <span span data-progress="100"></span>\n' +
                    '</div>';
            } else if (status == 1) {
                var pos1 = roomList_ui.GET_POSITION_IN_TAB(this.selectedOrder.CartOrdered, attribute);
                var statusDetail = this.selectedOrder.CartOrdered[pos1].status_detail;
                if (statusDetail == 0) {
                    return '<div>' +
                        '<div DATI-PROGRESS class="animated-progress progress-green">\n' +
                        '   <span span data-progress="33"></span>\n' +
                        '</div>' +
                        '<div style="display:inline-block;width: 100%;" >' +
                        '<input style="float: left;height: 20px !important;width: 45%; font-size: 12px; !important;" class="demande-btn-accept"  type="submit" onclick="orderList_ui.START_DELIVERY_ITEM(this)" value="Next Status"/>' +
                        '<input style="float: right;height: 20px !important;width: 45%;font-size: 12px;!important;" class="demande-btn-reject"  type="submit" onclick="orderList_ui.REJECT_ORDER_FROM_DIV(this)" value="Discard"/>' +
                        '</div>' +
                        '</div>'
                } else if (statusDetail == 1) {
                    return '<div>' +
                        '<div DATI-PROGRESS class="animated-progress progress-green">\n' +
                        '   <span span data-progress="66"></span>\n' +
                        '</div>' +
                        '<div style="display:inline-block;width: 100%;" >' +
                        '<input style="float: left;height: 20px !important; width:45%; font-size: 12px; !important;" class="demande-btn-accept"  type="submit" onclick="orderList_ui.DELIVERED_ITEM(this)" value="Next Status"/>' +
                        '<input style="float: right;height: 20px !important;width:45%; font-size: 12px; !important;" class="demande-btn-reject"  type="submit" onclick="orderList_ui.REJECT_ORDER_FROM_DIV(this)" value="Discard"/>' +
                        '</div>' +
                        '</div>'
                } else {
                    return '<div DATI-PROGRESS class="animated-progress progress-green">\n' +
                        '   <span span data-progress="100"></span>\n' +
                        '</div>';
                }
            }

        } else {
            return "";
        }
    }
};

let orderList_ui = new Ui_orderList();