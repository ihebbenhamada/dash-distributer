let Ui_updateEvent = class {
    constructor() {
        this.EVENT_UI();
        this.language = formTrx_ui.langues;
        this.translate = {};
        this.btChecked={};
    }

    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherUpdateEvent]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Update_Event]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=editEventPage]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Update_Event]").slideUp();
        }
    }
    READ_VALUE_INPUT(){


        $("[DATI-PAGE=editEventPage]").find("[DATI-ID=val_title]").val(eventCard_ui.selectedEvent.title);
        $("[DATI-PAGE=editEventPage]").find("[DATI-ID=val_desc]").val(eventCard_ui.selectedEvent.descrip);
        $("[DATI-PAGE=editEventPage]").find("[DATI-ID=val_summary]").val(eventCard_ui.selectedEvent.summary);
        $("[DATI-PAGE=editEventPage]").find("[dati-input-price-order-event-update]").val(eventCard_ui.selectedEvent.tarif);
        $("[DATI-PAGE=editEventPage]").find("[dati-input-price-reservation-event-update]").val(eventCard_ui.selectedEvent.tarif);
        $("[DATI-PAGE=editEventPage]").find("[dati-role=clickableTrans]").css("background-image", "url("+eventCard_ui.selectedEvent.image+")");
        $("[dati-title-event]").html(eventCard_ui.selectedEvent.title);
        $("[dati-description-event]").html(eventCard_ui.selectedEvent.descrip);
        $("[dati-image-event]").attr("src", eventCard_ui.selectedEvent.image);
        $("[ class=preview_Event]").find("[class=time_shift]").html('<img  src="/assets/img/ui/clock.png" alt="image" style="width: 12px;"  > <p> Timinig</p> ');
        setTimeout(function(){

        if (eventCard_ui.selectedEvent.type === 0) {

            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").find("[is_checked=OrderCheckBoxEventOrderUp]").css("display", "none");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").find("[is_checked=ReservationCheckBoxEventReservationUp]").css("display", "none");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").find("[is_checked=RequestCheckBoxEventRequestUp]").css("display", "none");
        }
        if (eventCard_ui.selectedEvent.type === 1) {

            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").find("[is_checked=OrderCheckBoxEventOrderUp]").css("display", "inline-block");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").find("[is_checked=ReservationCheckBoxEventReservationUp]").css("display", "none");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").find("[is_checked=RequestCheckBoxEventRequestUp]").css("display", "none");
        }
        if (eventCard_ui.selectedEvent.type === 2) {

            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").find("[is_checked=OrderCheckBoxEventOrderUp]").css("display", "none");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").find("[is_checked=ReservationCheckBoxEventReservationUp]").css("display", "inline-block");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").find("[is_checked=RequestCheckBoxEventRequestUp]").css("display", "none");
        }
        if (eventCard_ui.selectedEvent.type === 3) {

            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").find("[is_checked=OrderCheckBoxEventOrderUp]").css("display", "inline-block");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").find("[is_checked=ReservationCheckBoxEventReservationUp]").css("display", "inline-block");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").find("[is_checked=RequestCheckBoxEventRequestUp]").css("display", "none");
        }
        if (eventCard_ui.selectedEvent.type === 4) {

            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").find("[is_checked=OrderCheckBoxEventOrderUp]").css("display", "none");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").find("[is_checked=ReservationCheckBoxEventReservationUp]").css("display", "none");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").find("[is_checked=RequestCheckBoxEventRequestUp]").css("display", "inline-block");
        }
        if (eventCard_ui.selectedEvent.type === 5) {

            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").find("[is_checked=OrderCheckBoxEventOrderUp]").css("display", "inline-block");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").find("[is_checked=ReservationCheckBoxEventReservationUp]").css("display", "none");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").find("[is_checked=RequestCheckBoxEventRequestUp]").css("display", "inline-block");
        }
        if (eventCard_ui.selectedEvent.type === 6) {

            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked", "false");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").find("[is_checked=OrderCheckBoxEventOrderUp]").css("display", "none");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").find("[is_checked=ReservationCheckBoxEventReservationUp]").css("display", "inline-block");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").find("[is_checked=RequestCheckBoxEventRequestUp]").css("display", "inline-block");
        }
        if (eventCard_ui.selectedEvent.type === 7) {
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").find("[is_checked=OrderCheckBoxEventOrderUp]").css("display", "inline-block");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").find("[is_checked=ReservationCheckBoxEventReservationUp]").css("display", "inline-block");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked", "true");
            $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").find("[is_checked=RequestCheckBoxEventRequestUp]").css("display", "inline-block");
        }
    }, 500);
        if (eventCard_ui.selectedEvent.time_shift != null) {


            var elem = $("[DATI-ID=switcherUpdateEvent]");
            $(elem).attr("DATI-DEFAULt_VALUE", true);
            $("[DATI-ID=opening_Time_Update_Event]").slideDown();
            $("main").animate({scrollTop: $("[DATI-PAGE=editEventPage]").height()}, 'slow');


            if (eventCard_ui.selectedEvent.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[FIRST_SHIFT_MONDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["mon"][0][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["mon"][0][1]);
                } catch (e) {

                }

            }
            if (eventCard_ui.selectedEvent.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[SECOND_SHIFT_MONDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["mon"][1][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["mon"][1][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[THIRD_SHIFT_MONDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["mon"][2][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["mon"][2][1]);
                } catch (e) {

                }
            }

            if (eventCard_ui.selectedEvent.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[FIRST_SHIFT_TUESDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["tue"][0][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["tue"][0][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[SECOND_SHIFT_TUESDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["tue"][1][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["tue"][1][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[THIRD_SHIFT_TUESDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["tue"][2][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["tue"][2][1]);
                } catch (e) {

                }
            }

            if (eventCard_ui.selectedEvent.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[FIRST_SHIFT_WEDNESDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["wed"][0][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["wed"][0][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[SECOND_SHIFT_WEDNESDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["wed"][1][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["wed"][1][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[THIRD_SHIFT_WEDNESDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["wed"][2][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["wed"][2][1]);
                } catch (e) {

                }
            }

            if (eventCard_ui.selectedEvent.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[FIRST_SHIFT_THURSDAY]").html("1.Opening : " + eventCard_ui.selectedEvent.time_shift["thu"][0][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["thu"][0][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[SECOND_SHIFT_THURSDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["thu"][1][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["thu"][1][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[THIRD_SHIFT_THURSDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["thu"][2][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["thu"][2][1]);
                } catch (e) {

                }
            }

            if (eventCard_ui.selectedEvent.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[FIRST_SHIFT_FRYDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["fri"][0][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["fri"][0][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[SECOND_SHIFT_FRYDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["fri"][1][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["fri"][1][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[THIRD_SHIFT_FRYDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["fri"][2][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["fri"][2][1]);
                } catch (e) {

                }
            }

            if (eventCard_ui.selectedEvent.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[FIRST_SHIFT_SATURDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["sat"][0][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["sat"][0][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[SECOND_SHIFT_SATURDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["sat"][1][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["sat"][1][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[THIRD_SHIFT_SATURDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["sat"][2][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["sat"][2][1]);
                } catch (e) {

                }
            }

            if (eventCard_ui.selectedEvent.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[FIRST_SHIFT_SUNDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["sun"][0][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["sun"][0][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[SECOND_SHIFT_SUNDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["sun"][1][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["sun"][1][1]);
                } catch (e) {

                }
            }
            if (eventCard_ui.selectedEvent.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Event]").find("[THIRD_SHIFT_SUNDAY]").html("Opening : " + eventCard_ui.selectedEvent.time_shift["sun"][2][0] + " Closing :" + eventCard_ui.selectedEvent.time_shift["sun"][2][1]);
                } catch (e) {

                }
            }
        } else {
            var elem = $("[DATI-ID=switcherUpdateEvent]");
            $(elem).attr("DATI-DEFAULt_VALUE", false);
            this.ENABLE_TIME();
            $("[DATI-ID=opening_Time_Update_Event]").css("display", "none");
        }



    }

    EVENT_UI(){


        $("[DATI-INPUT-TITLE-EVENT-UPDATE]").on('keyup', function() {
            $("[dati-title-event]").html($("[DATI-INPUT-TITLE-EVENT-UPDATE]").val());
            /*    $("[dati-image-restau]").attr("src", " https://fa42cf2086b5b4ffa910-42905546d373f150b1b6e131d3710cf2.ssl.cf3.rackcdn.com/exemple-de-business-plan.jpg");*/

        });


        $("[DATI-INPUT-DESCRIPTION-EVENT-UPDATE]").on('keyup', function() {
            $("[dati-description-event]").html( $("[DATI-INPUT-DESCRIPTION-EVENT-UPDATE]").val());

        });



        /* ******************************** End PREVIEW REST ****************************************** */

    }
};

let updateEvent_ui = new Ui_updateEvent();

