let Ui_swapDevice = class {
    constructor() {
        this.UI_EVENT();
        this.SSAPI_EVENT();
        this.allRooms = null;
        this.list_rooms_without_guest = [];
        this.selectedRoom = null;
        this.selectedToRoom = null;
        this.pos = null;
        this.data = null;
        this.toRoomFilter=null;
        this.msgErreurSwap=[];
    }


    DATALIST_AVAILABLE_DEVICE(data) {
        var options = "<option value=''>select imei</option>";
        for (var i = 0; i < data.length; i++) {
            options = options + '<option value="' + data[i].id + '">'+data[i].imei+'</option>';
        }
        $("[dati-input-name=select_available_device]").html(options);
    }

    GET_ALL_ROOMS_LINKED_TO_DEVICE(data) {
        this.allRooms = data;

        var options = '<option value="">Select Room</option>';
        for (var i = 0; i < data.length; i++) {
            options = options + '<option value="' + data[i].id + '">' + "Room number:&emsp;" + data[i].room_number + "&emsp;&emsp;Section:&emsp;" + data[i].section + "&emsp;&emsp;Floor:&emsp;" + data[i].floor + '</option>';
        }
        try {
            $("[DATI-INPUT-NAME=fromRoom]").html(options);

        } catch (e) {
            $("[DATI-INPUT-NAME=fromRoom]").html("<option value=''>Select Room</option>" + options);

        }
    }

    getPositionRoom(list, id) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    setSelectedFromRoom(id) {
        var pos = swapDevice_ui.getPositionRoom(this.allRooms, id);
        if (pos != -1) {
            var selected = swapDevice_ui.allRooms[pos];
            this.selectedRoom = swapDevice_ui.allRooms[pos];
            try {
                $("[DATI-ID=swap_imei_from_room]").html(selected.Device.imei);
                $("[DATI-ID=recap_imei]").html(selected.Device.imei);
                $("[DATI-ID=recap_room_number]").html($("[dati-input-name=fromRoom] :selected").text());

            } catch (e) {
                $("[DATI-ID=swap_imei_from_room]").html("Not linked to device");
            }
        }
    }

    setSelectedToRoom(id) {
        var pos = swapDevice_ui.getPositionRoom(this.allRooms, id);
        if (pos != -1) {
            var selected = swapDevice_ui.allRooms[pos];
            this.selectedToRoom = swapDevice_ui.allRooms[pos];
            try {
                $("[DATI-ID=swap_imei_to_room]").html(selected.Device.imei);
            } catch (e) {
                $("[DATI-ID=swap_imei_to_room]").html("Not linked to device");
            }
        }
    }

    DATALIST_AVAILABLE_WITHOUT_GUEST(data) {

        if (swapDevice_ui.selectedRoom!=null){
            swapDevice_ui.data = data.filter(room => room.id != swapDevice_ui.selectedRoom.id);
            var options = "<option value=''>Select Room</option>";
            for (var i = 0; i < swapDevice_ui.data.length; i++) {
                options = options + '<option value="' + swapDevice_ui.data[i].id + '">' + "Room number:&emsp;" + swapDevice_ui.data[i].room_number + "&emsp;&emsp;Section:&emsp;" + swapDevice_ui.data[i].section + "&emsp;&emsp;Floor:&emsp;" + swapDevice_ui.data[i].floor + '</option>';
            }
            $("[dati-input-name=select_device_from_room_not_linked]").html(options);
        }



    }

    RESET_SWAP(){
        $("[dati-input-name=select_reason]").val("");
        $("[dati-id=swap_imei_from_room]").html("");
        $("[dati-id=swap_imei_to_room]").html("");
        $("[dati-id=firstStepContainer]").css("display","inline-block");
        $("[dati-id=firstStepReason]").css("display","inline-block");
        $("[dati-id=secondStepContainer]").css("display","none");
        $("[ dati-input-name=toRoom]").val("");



        $("[dati-id=btn_second_step_swap_device]").css("background-color","rgb(224, 231, 243)");
        $("[dati-id=btn_first_step_swap_device]").css("background-color","rgb(103, 127, 168)");

        $("[DATI-ID=firststepNumberIcon]").removeClass("secondstep_number_icon").addClass("firststep_number_icon");
        $("[DATI-ID=secondstepNumberIcon]").removeClass("firststep_number_icon").addClass("secondstep_number_icon");
        $("[DATI-ID=firststepText]").removeClass("secondstep_text").addClass("firststep_text");
        $("[DATI-ID=secondstepText]").removeClass("firststep_text").addClass("secondstep_text");


        $("[dati-id=btnNext]").css("display","inline-block");
        $("[dati-id=btnNext]").removeClass("next_active");
        $("[dati-id=btnConfirm]").css("display","none");
        $("[dati-id=btnPrevious]").css("display","none");

        $("[dati-input-name=select_after_lost_damage]").val("");
        $("[dati-id=div_av_device]").css("display","none");
        $("[dati-id=div_from_room_not_linked]").css("display","none");
        $("[dati-id=div_select_problem]").css("display","none");

    }


    UI_EVENT() {

        $(document).ready(function () {

            $("[DATI-INPUT-NAME=select_device_from_room_not_linked]").on('change', function () {
                swapDevice_ui.pos = $("[DATI-INPUT-NAME=select_device_from_room_not_linked]").prop('selectedIndex') - 1;
            });
            $("[DATI-INPUT-NAME=fromRoom]").on('change', function () {
                swapDevice_ui.setSelectedFromRoom(this.value);
                if ($("[DATI-INPUT-NAME=fromRoom]").val() == "" || $("[DATI-INPUT-NAME=select_reason]").val() == "") {
                    $("[dati-id=btnNext]").removeClass("next_active");
                } else {
                    $("[dati-id=btnNext]").addClass("next_active");
                }

                swapDevice_ui.toRoomFilter= swapDevice_ui.allRooms.filter((room => room.id != swapDevice_ui.selectedRoom.id) && (room => room.Guest == null));
                console.log(swapDevice_ui.toRoomFilter,"hihihihih");

                var optionsfiltred = '<option value="">Select Room</option>';
                for (var i = 0; i < swapDevice_ui.toRoomFilter.length; i++) {
                    optionsfiltred = optionsfiltred + '<option value="' + swapDevice_ui.toRoomFilter[i].id + '">' + "Room number:&emsp;" + swapDevice_ui.toRoomFilter[i].room_number + "&emsp;&emsp;Section:&emsp;" + swapDevice_ui.toRoomFilter[i].section + "&emsp;&emsp;Floor:&emsp;" + swapDevice_ui.toRoomFilter[i].floor + '</option>';
                }
                try {
                    $("[DATI-INPUT-NAME=toRoom]").html(optionsfiltred);
                }
               catch (e) {
                   $("[DATI-INPUT-NAME=toRoom]").html("<option value=''>Select Room</option>" + optionsfiltred);
               }


            });
            $("[DATI-INPUT-NAME=select_reason]").on('change', function () {

                if ($("[DATI-INPUT-NAME=select_reason]").val() == "" || $("[DATI-INPUT-NAME=fromRoom]").val() == "") {
                    $("[dati-id=btnNext]").removeClass("next_active");
                } else {
                    $("[dati-id=btnNext]").addClass("next_active");
                }

            });
            $("[DATI-INPUT-NAME=toRoom]").on('change', function () {
                swapDevice_ui.setSelectedToRoom(this.value)
            });
            $("[DATI-INPUT-NAME=select_after_lost_damage]").on('change', function () {
                if ($("[DATI-INPUT-NAME=select_after_lost_damage]").val() == "2") {
                    $("[DATI-ID=div_av_device]").css("display", "inline-block");
                } else {
                    $("[DATI-ID=div_av_device]").css("display", "none");
                }

                if ($("[DATI-INPUT-NAME=select_after_lost_damage]").val() == "3") {
                    iRoom.GET_RD_WITHOUT_GUEST();
                    $("[DATI-ID=div_from_room_not_linked]").css("display", "inline-block");
                } else {
                    $("[DATI-ID=div_from_room_not_linked]").css("display", "none");
                }
            });

            $(document).on('click', '[dati-id=btnNext]', function () {
                swapDevice_ui.msgErreurSwap=[];
                dati_Erreurs.UPDATE("SwapErreurs");
                if ($("[DATI-INPUT-NAME=fromRoom]").val() !== "") {
                    if ($("[DATI-INPUT-NAME=select_reason]").val() !== "") {
                        if ($("[DATI-INPUT-NAME=select_reason]").val() == "1" || $("[DATI-INPUT-NAME=select_reason]").val() == "2") {
                            $("[DATI-ID=lost_damage_reason_content]").css("display", "inline-block");
                            $("[DATI-ID=recap_room_number]").val($("[dati-id=swap_imei_from_room]").val());
                            if ($("[DATI-INPUT-NAME=select_reason]").val() == "2") {
                                $("[DATI-INPUT-NAME=select_after_lost_damage]").on('change', function () {
                                    if ($("[DATI-INPUT-NAME=select_after_lost_damage]").val() == "1") {
                                        $("[DATI-ID=div_select_problem]").css("display", "inline-block");
                                    } else {
                                        $("[DATI-ID=div_select_problem]").css("display", "none");
                                    }
                                });
                            } else if ($("[DATI-INPUT-NAME=select_reason]").val() == "1") {
                                $("[DATI-INPUT-NAME=select_after_lost_damage]").on('change', function () {
                                    if ($("[DATI-INPUT-NAME=select_after_lost_damage]").val() == "1") {
                                        $("[DATI-ID=div_select_problem]").css("display", "none");
                                    }
                                });
                            }

                        } else {
                            $("[DATI-ID=lost_damage_reason_content]").css("display", "none");
                        }
                        if ($("[DATI-INPUT-NAME=select_reason]").val() == "3") {
                            $("[DATI-ID=guest_change_reason_content]").css("display", "inline-block");
                        } else {
                            $("[DATI-ID=guest_change_reason_content]").css("display", "none");
                        }


                        $("[DATI-ID=firstStepContainer]").css("display", "none");
                        $("[DATI-ID=secondStepContainer]").css("display", "inline-block");
                        $("[DATI-ID=firstStepReason]").css("display", "none");
                        $("[DATI-ID=btnNext]").css("display", "none");
                        $("[DATI-ID=btnConfirm]").css("display", "inline-block");
                        $("[DATI-ID=btnPrevious]").css("display", "inline-block");
                        $("[DATI-ID=btn_first_step_swap_device]").css("background-color", "rgb(224,231,243)");
                        $("[DATI-ID=btn_second_step_swap_device]").css("background-color", "rgb(103,127,168)");
                        $("[DATI-ID=firststepNumberIcon]").removeClass("firststep_number_icon").addClass("secondstep_number_icon");
                        $("[DATI-ID=secondstepNumberIcon]").removeClass("secondstep_number_icon").addClass("firststep_number_icon");
                        $("[DATI-ID=firststepText]").removeClass("firststep_text").addClass("secondstep_text");
                        $("[DATI-ID=secondstepText]").removeClass("secondstep_text").addClass("firststep_text");

                    } else {
                        swapDevice_ui.msgErreurSwap.push("Select the reason");
                        //console.log(swapDevice_ui.msgErreurSwap,"swapDevice_ui.msgErreurSwap");
                        dati_Erreurs.UPDATE("SwapErreurs");
                    }


                } else {
                    swapDevice_ui.msgErreurSwap.push("Select the room");
                    dati_Erreurs.UPDATE("SwapErreurs");
                    //console.log(swapDevice_ui.msgErreurSwap,"swapDevice_ui.msgErreurSwap");

                }


            });

            $(document).on('click', '[dati-id=btnPrevious]', function () {
                swapDevice_ui.msgErreurSwap=[];
                dati_Erreurs.UPDATE("SwapErreurs");
                $("[DATI-ID=firstStepContainer]").css("display", "inline-block");
                $("[DATI-ID=secondStepContainer]").css("display", "none");
                $("[DATI-ID=firstStepReason]").css("display", "inline-block");
                $("[DATI-ID=btnNext]").css("display", "inline-block");
                $("[DATI-ID=btnConfirm]").css("display", "none");
                $("[DATI-ID=btnPrevious]").css("display", "none");
                $("[DATI-ID=div_select_problem]").css("display", "none");
                $("[DATI-ID=div_av_device]").css("display", "none");
                $("[DATI-ID=guest_change_reason_content]").css("display", "none");
                $("[DATI-ID=lost_damage_reason_content]").css("display", "none");
                $("[DATI-ID=div_from_room_not_linked]").css("display", "none");
                $("[DATI-INPUT-NAME=select_after_lost_damage]").val('');
                $("[ dati-input-name=toRoom]").val("");
                $("[dati-id=swap_imei_to_room]").html("");
                $("[DATI-ID=btn_first_step_swap_device]").css("background-color", "rgb(103,127,168)");
                $("[DATI-ID=btn_second_step_swap_device]").css("background-color", "rgb(224,231,243)");
                $("[DATI-ID=firststepNumberIcon]").removeClass("secondstep_number_icon").addClass("firststep_number_icon");
                $("[DATI-ID=secondstepNumberIcon]").removeClass("firststep_number_icon").addClass("secondstep_number_icon");
                $("[DATI-ID=firststepText]").removeClass("secondstep_text").addClass("firststep_text");
                $("[DATI-ID=secondstepText]").removeClass("firststep_text").addClass("secondstep_text");
            });

            $(document).on('click', '[dati-id=btnConfirm]', function () {
                swapDevice_ui.msgErreurSwap=[];
                dati_Erreurs.UPDATE("SwapErreurs");
                var css = $("[dati-id=lost_damage_reason_content]").css("display");

                if (css == 'block') {
                    if ($("[dati-input-name=select_reason]").val() == "1") {

                        if ($("[dati-input-name=select_after_lost_damage]").val() != "") {
                            if ($("[dati-input-name=select_after_lost_damage]").val() == "1") {
                                /*SSAPI REPORT*/
                                var raison = $("[dati-input-name=select_reason]").val();
                                var action = $("[dati-input-name=select_after_lost_damage]").val();
                                var device_id = swapDevice_ui.selectedRoom.Device.id;
                                var old_room = swapDevice_ui.selectedRoom.id;
                                var data = {
                                    raison: raison,
                                    action: action,
                                    device_id: device_id,
                                    problem: "Device Lost",
                                    old_room_id: old_room
                                };
                                SSAPI.SUBMIT({
                                    uri: "/Device/swape",
                                    data: data,
                                    onsuccess: "SwapLostReportReceive",
                                    onerror: "SwapLostReportReceive_error",
                                });
                            } else if ($("[dati-input-name=select_after_lost_damage]").val() == "2") {
                                var raison1 = $("[dati-input-name=select_reason]").val();
                                var action1 = $("[dati-input-name=select_after_lost_damage]").val();
                                var old_device_id = swapDevice_ui.selectedRoom.Device.id;
                                var device_id1 = $("[dati-input-name=select_available_device]").val();
                                var room_id = swapDevice_ui.selectedRoom.id;
                                var data1 = {
                                    raison: raison1,
                                    action: action1,
                                    device_id: device_id1,
                                    old_device_id: old_device_id,
                                    room_id: room_id,
                                    problem: "Device Lost"
                                };
                                SSAPI.SUBMIT({
                                    uri: "/Device/swape",
                                    data: data1,
                                    onsuccess: "SwapLostFromAvRoomReceive",
                                    onerror: "SwapLostFromAvRoomReceive_error",
                                });
                            } else if ($("[dati-input-name=select_after_lost_damage]").val() == "3") {
                                var raison2 = $("[dati-input-name=select_reason]").val();
                                var action2 = $("[dati-input-name=select_after_lost_damage]").val();
                                var room_id2 = $("[dati-input-name=select_device_from_room_not_linked]").val();
                                var device_id2 = swapDevice_ui.data[swapDevice_ui.pos].Device.id;
                                var old_room_id = swapDevice_ui.selectedRoom.id;
                                var old_device_id2 = swapDevice_ui.selectedRoom.Device.id;
                                var data2 = {
                                    raison: raison2,
                                    action: action2,
                                    device_id: device_id2,
                                    old_device_id: old_device_id2,
                                    old_room_id: old_room_id,
                                    room_id: room_id2,
                                    problem: "Device Lost"
                                };
                                SSAPI.SUBMIT({
                                    uri: "/Device/swape",
                                    data: data2,
                                    onsuccess: "SwapLostFromDeviceInRoomReceive",
                                    onerror: "SwapLostFromDeviceInRoomReceive_error",
                                });
                            }
                        } else {
                            swapDevice_ui.msgErreurSwap.push("select action");
                            dati_Erreurs.UPDATE("SwapErreurs");
                        }
                    } else if ($("[dati-input-name=select_reason]").val() == "2") {

                        if ($("[dati-input-name=select_after_lost_damage]").val() != "") {
                            if ($("[dati-input-name=select_after_lost_damage]").val() == "1") {
                                /*SSAPI REPORT*/
                                var raison5 = $("[dati-input-name=select_reason]").val();
                                var action5 = $("[dati-input-name=select_after_lost_damage]").val();
                                var device_id5 = swapDevice_ui.selectedRoom.Device.id;
                                var problem = $("[dati-input-name=select_problem_device] :selected").text();
                                var old_room1 = swapDevice_ui.selectedRoom.id;
                                var data5 = {
                                    raison: raison5,
                                    action: action5,
                                    device_id: device_id5,
                                    problem: problem,
                                    old_room_id: old_room1
                                };
                                SSAPI.SUBMIT({
                                    uri: "/Device/swape",
                                    data: data5,
                                    onsuccess: "SwapDamageReportReceive",
                                    onerror: "SwapDamageReportReceive_error",
                                });
                            } else if ($("[dati-input-name=select_after_lost_damage]").val() == "2") {
                                var raison6 = $("[dati-input-name=select_reason]").val();
                                var action6 = $("[dati-input-name=select_after_lost_damage]").val();
                                var old_device_id6 = swapDevice_ui.selectedRoom.Device.id;
                                var device_id6 = $("[dati-input-name=select_available_device]").val();
                                var room_id6 = swapDevice_ui.selectedRoom.id;
                                var data6 = {
                                    raison: raison6,
                                    action: action6,
                                    device_id: device_id6,
                                    old_device_id: old_device_id6,
                                    room_id: room_id6,
                                    problem: "Device Damaged"
                                };
                                SSAPI.SUBMIT({
                                    uri: "/Device/swape",
                                    data: data6,
                                    onsuccess: "SwapDamageFromAvRoomReceive",
                                    onerror: "SwapDamageFromAvRoomReceive_error",
                                });
                            } else if ($("[dati-input-name=select_after_lost_damage]").val() == "3") {
                                var raison7 = $("[dati-input-name=select_reason]").val();
                                var action7 = $("[dati-input-name=select_after_lost_damage]").val();
                                var room_id7 = $("[dati-input-name=select_device_from_room_not_linked]").val();
                                var device_id7 = swapDevice_ui.data[swapDevice_ui.pos].Device.id;
                                var old_room_id7 = swapDevice_ui.selectedRoom.id;
                                var old_device_id7 = swapDevice_ui.selectedRoom.Device.id;
                                var data7 = {
                                    raison: raison7,
                                    action: action7,
                                    device_id: device_id7,
                                    old_room_id: old_room_id7,
                                    old_device_id: old_device_id7,
                                    room_id: room_id7,
                                    problem: "Device Damaged"
                                };
                                SSAPI.SUBMIT({
                                    uri: "/Device/swape",
                                    data: data7,
                                    onsuccess: "SwapDamageFromDeviceInRoomReceive",
                                    onerror: "SwapDamageFromDeviceInRoomReceive_error",
                                });
                            }
                        } else {
                            swapDevice_ui.msgErreurSwap.push("select action");
                            dati_Erreurs.UPDATE("SwapErreurs");
                        }
                    }
                } else {
                    if ($("[dati-input-name=select_reason]").val() == "3") {

                        try {
                            var guest_id = swapDevice_ui.selectedRoom.Guest.id;
                            var room_id4 = swapDevice_ui.selectedToRoom.id;
                            var old_room_id4 = swapDevice_ui.selectedRoom.id;
                            var raison4 = $("[dati-input-name=select_reason]").val();
                            var device_id4 = swapDevice_ui.selectedToRoom.Device.id;
                            var old_device_id4 = swapDevice_ui.selectedRoom.Device.id;
                            var data4 = {
                                raison: raison4,
                                guest_id: guest_id,
                                old_room_id: old_room_id4,
                                room_id: room_id4,
                                device_id: device_id4,
                                old_device_id: old_device_id4
                            };

                            SSAPI.SUBMIT({
                                uri: "/Device/swape",
                                data: data4,
                                onsuccess: "SwapLostFromRoomToRoomReceive",
                                onerror: "SwapLostFromRoomToRoomReceive_error",
                            });
                        } catch (e) {
                            swapDevice_ui.msgErreurSwap.push("you shoold select Room linked to guest");
                            dati_Erreurs.UPDATE("SwapErreurs");
                        }

                    }
                }
            });
        });
    }

    SSAPI_EVENT() {
        document.addEventListener("SwapLostReportReceive", function (e) {
            dati_add_guest.SHOW_POPUP_SUCCESS_REPORT_DEVICE();

        }, false);

        document.addEventListener("SwapLostReportReceive_error", function (e) {

            dati_add_guest.SHOW_POPUP_ERROR();

        }, false);

        document.addEventListener("SwapLostFromAvRoomReceive", function (e) {
            dati_add_guest.SHOW_POPUP_SUCCESS_SWAPED();
        }, false);

        document.addEventListener("SwapLostFromAvRoomReceive_error", function (e) {
            console.log(e.detail);
            dati_add_guest.SHOW_POPUP_ERROR();

        }, false);

        document.addEventListener("SwapLostFromDeviceInRoomReceive", function (e) {
            dati_add_guest.SHOW_POPUP_SUCCESS_SWAPED();
        }, false);

        document.addEventListener("SwapLostFromDeviceInRoomReceive_error", function (e) {
            console.log(e.detail);
            dati_add_guest.SHOW_POPUP_ERROR();

        }, false);


        document.addEventListener("SwapLostFromRoomToRoomReceive", function (e) {
            dati_add_guest.SHOW_POPUP_SUCCESS_SWAPED();
        }, false);

        document.addEventListener("SwapLostFromRoomToRoomReceive_error", function (e) {
            console.log(e.detail);
            dati_add_guest.SHOW_POPUP_ERROR();

        }, false);

        /*******************************************************/
        document.addEventListener("SwapDamageReportReceive", function (e) {
            dati_add_guest.SHOW_POPUP_SUCCESS_SWAPED();
        }, false);

        document.addEventListener("SwapDamageReportReceive_error", function (e) {

            dati_add_guest.SHOW_POPUP_ERROR();

        }, false);
        document.addEventListener("SwapDamageFromAvRoomReceive", function (e) {
            dati_add_guest.SHOW_POPUP_SUCCESS_SWAPED();
        }, false);

        document.addEventListener("SwapDamageFromAvRoomReceive_error", function (e) {

            dati_add_guest.SHOW_POPUP_ERROR();

        }, false);
        document.addEventListener("SwapDamageFromDeviceInRoomReceive", function (e) {
            dati_add_guest.SHOW_POPUP_SUCCESS_SWAPED();
        }, false);

        document.addEventListener("SwapDamageFromDeviceInRoomReceive_error", function (e) {

            dati_add_guest.SHOW_POPUP_ERROR();

        }, false);
    }
};

let swapDevice_ui = new Ui_swapDevice();



