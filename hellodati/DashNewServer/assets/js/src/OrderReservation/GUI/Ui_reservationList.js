let Ui_reservationList = class {
    constructor() {
        this.total = 0;
        this.selectedReservation = null;
        this.nbrRows = 10;
        this.totalS = 0;
        this.nbrRowsS = 10;
        this.lastSearchBy = "";
        this.selectedDateFrom = null;
        this.selectedDateTo = null;
        this.selectedTimeFrom = null;
        this.selectedTimeTo = null;
        $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW", this.nbrRows);
        this.optionsStatus = {
            "Status": "",
            "Waiting": 0,
            "Accepted": 1,
            "Rejected": 2,
        };
        this.optionsItems = {};
        this.optionsItems["All Services"] = "";
        this.selectedDate = [];

        this.filterBy = {
            "Room Number": 1,
            "Guest Name": 2,
            "Status": 3,
            "Articles": 4,
        };
        $(document).on('change', '[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]', function() {
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1":
                    IReservation.GET_ALL_RESERVATION2();
                    $("[DATI-ID=searchBarReservation] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarReservation] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_search_byroomnumber]").css("display", "inline-block");
                    break;
                case "2":
                    IReservation.GET_ALL_RESERVATION2();
                    $("[DATI-ID=searchBarReservation] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarReservation] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_search_byguestname]").css("display", "inline-block");
                    break;
                case "3":
                    IReservation.GET_ALL_RESERVATION2();
                    $("[DATI-ID=searchBarReservation] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarReservation] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listreservation_search_byStatus]").css("display", "inline-block");
                    break;
                case "4":
                    IReservation.GET_ALL_RESERVATION2();
                    $("[DATI-ID=searchBarReservation] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarReservation] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarReservation] [DATI-ID=listreservation_search_byItem]").css("display", "inline-block");
                    break;
            }
        });
    }
    DATALIST(data) {
        this.reservations = data;
        try {
            this.total = data[0].count1;
            this.nbrRows = data[0].quantity1;
            $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW",reservationList_ui.nbrRows);
            $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE",reservationList_ui.total);
            dati_pagination.UPDATE("pagination_reservationList");
        }catch (e) {
            $("[DATI-ID=pagination_reservationList]").attr("DATI-NBR-ROW",0);
            $("[DATI-ID=pagination_reservationList]").attr("DATI-TOTAL-PAGE",10);
            dati_pagination.UPDATE("pagination_reservationList");
        }

        console.log(this.reservations, "reservations");
    }
    SERVICE_LIST(data) {
        this.optionsItems = {};
        this.optionsItems["All Services"] = "";
        for (var i = 0; i < data.length; i++) {
            this.optionsItems[data[i].name] = data[i]["Service_Type"].id
        }
    }
    getRoomNumber(attribute) {
        if (attribute != null && attribute != "" && attribute != "NULL") {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.reservations, attribute);
            if (this.reservations[pos] != null) {
                var section = "";
                var floor = "";
                var room_number = "";
                if (this.reservations[pos]["Guest"]["Room"].section != null) {
                    section = "S" + this.reservations[pos]["Guest"]["Room"].section;
                } else {
                    section = "S";
                }
                if (this.reservations[pos]["Guest"]["Room"].floor != null) {
                    floor = "F" + this.reservations[pos]["Guest"]["Room"].floor;
                } else {
                    floor = "F";
                }
                if (this.reservations[pos]["Guest"]["Room"].room_number != null) {
                    room_number = "N" + this.reservations[pos]["Guest"]["Room"].room_number;
                } else {
                    room_number = "N";
                }

                return section + "-" + floor + "-" + room_number;
            } else {
                return "--";
            }
        } else {
            return '';
        }
    }
    RESEARCH_BY_GUEST_NAME(data) {
        reservationList_ui.reservations = data;
        dati_table.UPDATE("reservationList");
    }
    RESEARCH_BY_ROOM_NUMBER(data) {
        reservationList_ui.reservations = data;
        dati_table.UPDATE("reservationList");
    }
    RESEARCH_BY_STATUS(data) {
        reservationList_ui.reservations = data;
        dati_table.UPDATE("reservationList");
    }
    RESEARCH_BY_ITEM(data) {
        reservationList_ui.reservations = data;
        dati_table.UPDATE("reservationList");
    }
    RESEARCH_BETWEEN_TO_DATES(data) {
        reservationList_ui.reservations = data;
        dati_table.UPDATE("reservationList");
    }
    getDate(attribute) {
        if (attribute != null) {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.reservations, attribute);
            var date = this.reservations[pos].inserted_at;
            var d = date.substring(0, date.length - 3);
            return d;
        } else {
            return "";
        }
    }
    ITEM_RESERVED(attribute) {
        if (attribute != null && attribute != "" && attribute != "NULL") {
            return attribute;
        } else {
            return '';
        }
    }
    getGustName(attribute) {
        if (attribute != null) {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.reservations, attribute);
            try {
                var guest = this.reservations[pos]["Guest"].f_name + " " + this.reservations[pos]["Guest"].l_name;
                return guest;
            } catch (e) {
                return "Guest Not Resident";
            }

        } else {
            return '';
        }
    }
    setSelected(iconDetail) {
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedReservation = this.reservations[i];
    }

    getStatutItem(attribute) {
        if (attribute != null) {

            var pos = roomList_ui.GET_POSITION_IN_TAB(this.reservations, attribute);
            var status = this.reservations[pos].status;
            if (status == 0) {
                return '<div style="text-align: center;color: rgb(228,175,131);background-color: rgb(255,235,214);border-radius: 20px;padding: 8px;font-size: 13px">Waiting</div>';
            } else if (status == 2) {
                return '<div style="text-align: center;color: rgb(215,92,84);background-color: rgb(247,240,241);border-radius: 20px;padding: 8px;font-size: 13px">Rejected</div>';
            } else if (status == 1) {
                return '<div style="text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Accepted</div>';
                /*var pos1 = roomList_ui.GET_POSITION_IN_TAB(this.reservations,attribute);
                var statusDetail = this.reservations[pos1].status_detail;
                if (statusDetail == 0 || statusDetail == null || statusDetail =="null"){
                    return '<div style="text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Accepted</div>';
                }else if (statusDetail==1 || statusDetail == null || statusDetail =="null") {
                    return '<div style="text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Accepted</div>';
                }else {
                    return '<div style="text-align: center;color: rgb(215,92,84);background-color: rgb(247,240,241);border-radius: 20px;padding: 8px;font-size: 13px;text-overflow: ellipsis;white-space: nowrap;">Rejected</div>';
                }*/
            }

        } else {
            return "";
        }
    }
    ACCEPT(element) {
        var i = $(element).parent().parent().parent().attr("DATI-ROW");
        this.selectedReservation = this.reservations[i];
        var id = this.selectedReservation.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeReservationConfirmed",
            data: data,
            onsuccess: "makeReservationConfirmed",
            onerror: "makeReservationConfirmed_error"
        });
    }
    REJECT(element) {
        var i = $(element).parent().parent().parent().attr("DATI-ROW");
        this.selectedReservation = this.reservations[i];
        var id = this.selectedReservation.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeReservationRejected",
            data: data,
            onsuccess: "makeReservationRejected",
            onerror: "makeReservationRejected_error"
        });
    }
    VALIDE(id) {


        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeReservationValidated",
            data: data,
            onsuccess: "makeReservationValidated",
            onerror: "makeReservationValidated"
        });
    }
    NOT_VALIDATE(element) {
        var i = $(element).parent().parent().parent().parent().attr("DATI-ROW");
        this.selectedReservation = this.reservations[i];
        var id = this.selectedReservation.id;

        var data = {
            id: id,
        };

        SSAPI.SUBMIT({
            uri: "/Cart/makeReservationNotValidated",
            data: data,
            onsuccess: "makeReservationNotValidated",
            onerror: "makeReservationNotValidated_error"
        });
    }

    SELECTED_STATUS(s, k) {
        console.log(s, k, "azazazazazaz");
        setTimeout(function () {
            $("[DATI-ID=listReservations_filter_by]").val(s);
            $("[DATI-ID=listreservation_search_byStatus]").val(k);
            if (s == 3) {
                $("[DATI-ID=searchBarReservation] [dati-composent=input]").css("display", "none");
                $("[DATI-ID=searchBarReservation] [dati-composent=input]").val("");
                $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").val(s);
                $("[DATI-ID=searchBarReservation] [DATI-ID=listReservations_filter_by]").css("display", "inline-block");
                $("[DATI-ID=searchBarReservation] [DATI-ID=listreservation_search_byStatus]").css("display", "inline-block");
                $("[DATI-ID=searchBarReservation] [DATI-ID=listreservation_search_byStatus]").val(k);
                $("[DATI-ID=reservationList]").attr("header_created", true);
                dati_table.init("reservationList");
                IReservation.GET_RESERVATION_BY_STATUS(k, false);

            }

        }, 500);
    }
    GET_ACCEPT_REJECT_VALIDATE_INVALIDATE(attribute) {
        setTimeout(function() {
            $("[DATI-PAGE=ReservationPage]").find("[DATI-PROGRESS]").find("[span]").each(function() {
                console.log(222, $(this).attr("data-progress") + "%", );
                $(this).animate({
                        width: $(this).attr("data-progress") + "%",
                    },
                    1000
                );
                $(this).text($(this).attr("data-progress") + "%");
            });
        }, 200);
        if (attribute != null) {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.reservations, attribute);
            var status = this.reservations[pos].status;
            if (status == 0) {
                var btnAcceptReject = '<div style="display:inline-block;width: 100%;" >' +
                    '<input style="float: left" class="demande-btn-accept" type="submit" onclick="reservationList_ui.ACCEPT(this)" value="Accept"/>' +
                    '<input style="float: right" class="demande-btn-reject" type="submit" onclick="reservationList_ui.REJECT(this)" value="Reject"/>' +
                    '</div>';
                return btnAcceptReject;
            } else if (status == 1) {
                return '<div DATI-PROGRESS class="animated-progress progress-green">\n' +
                    '   <span span data-progress="100"></span>\n' +
                    '</div>';
                /*var pos1 = roomList_ui.GET_POSITION_IN_TAB(this.reservations,attribute);
                var statusDetail = this.reservations[pos1].status_detail;
                if (statusDetail ==1) {
                    return '<div DATI-PROGRESS class="animated-progress progress-green">\n' +
                        '   <span span data-progress="100"></span>\n' +
                        '</div>';
                }*/
            } else if (status == 2) {
                return '<div DATI-PROGRESS class="animated-progress progress-red">\n' +
                    '   <span span data-progress="100"></span>\n' +
                    '</div>';
            }

        } else {
            return '';
        }
    }
};
let reservationList_ui = new Ui_reservationList();