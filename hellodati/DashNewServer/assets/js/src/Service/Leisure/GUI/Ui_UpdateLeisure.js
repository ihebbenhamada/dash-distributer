let Ui_updateLeisure = class {
    constructor() {
        this.EVENT_UI();
        this.translate = {};
        this.contact = {};
        this.contactDb = {};
    }

    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherUpdateLeisure]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Update_Leisure]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=editLeisurePage]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Update_Leisure]").slideUp();
        }
    }
    READ_VALUE_INPUT(){
        $("[DATI-PAGE=editLeisurePage]").find("[DATI-ID=val_title]").val(leisureCard_ui.selectedLeisure.title);
        $("[DATI-PAGE=editLeisurePage]").find("[DATI-ID=val_desc]").val(leisureCard_ui.selectedLeisure.descrip);
        $("[DATI-PAGE=editLeisurePage]").find("[DATI-ID=val_summary]").val(leisureCard_ui.selectedLeisure.summary);
        $("[DATI-PAGE=editLeisurePage]").find("[dati-input-name=price]").val(leisureCard_ui.selectedLeisure.tarif);
        $("[DATI-PAGE=editLeisurePage]").find("[dati-role=clickableTrans]").css('background-image','url('+leisureCard_ui.selectedLeisure.image+')');
        $("[dati-title-leisure]").html(leisureCard_ui.selectedLeisure.title);
        $("[dati-description-leisure]").html(leisureCard_ui.selectedLeisure.descrip);
        $("[dati-image-leisure]").attr("src", leisureCard_ui.selectedLeisure.image);
        $("[  class=preview_Leisure]").find("[ class=time_shift]").html('<img src="/assets/img/ui/clock.png" alt="image" style="width: 12px;"  > <p>Open</p>');
        $("[  class=preview_Leisure]").find("[ class=localisation]").html('<i class="fas fa-map-marker-alt"></i> <p>Salle de Sport</p>');
        setTimeout(function(){

            if (leisureCard_ui.selectedLeisure.type === 0) {
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").find("[is_checked=OrderCheckBoxLeisureOrderUp]").css("display", "none");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").find("[is_checked=ReservationCheckBoxLeisureReservationUp]").css("display", "none");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").find("[is_checked=RequestCheckBoxLeisureResquestUp]").css("display", "none");
            }
            if (leisureCard_ui.selectedLeisure.type === 1) {
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").find("[is_checked=OrderCheckBoxLeisureOrderUp]").css("display", "inline-block");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").find("[is_checked=ReservationCheckBoxLeisureReservationUp]").css("display", "none");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").find("[is_checked=RequestCheckBoxLeisureResquestUp]").css("display", "none");
            }
            if (leisureCard_ui.selectedLeisure.type === 2) {
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").find("[is_checked=OrderCheckBoxLeisureOrderUp]").css("display", "none");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").find("[is_checked=ReservationCheckBoxLeisureReservationUp]").css("display", "inline-block");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").find("[is_checked=RequestCheckBoxLeisureResquestUp]").css("display", "none");
            }
            if (leisureCard_ui.selectedLeisure.type === 3) {
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").find("[is_checked=OrderCheckBoxLeisureOrderUp]").css("display", "inline-block");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").find("[is_checked=ReservationCheckBoxLeisureReservationUp]").css("display", "inline-block");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").find("[is_checked=RequestCheckBoxLeisureResquestUp]").css("display", "none");
            }
            if (leisureCard_ui.selectedLeisure.type === 4) {
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").find("[is_checked=OrderCheckBoxLeisureOrderUp]").css("display", "none");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").find("[is_checked=ReservationCheckBoxLeisureReservationUp]").css("display", "none");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").find("[is_checked=RequestCheckBoxLeisureResquestUp]").css("display", "inline-block");
            }
            if (leisureCard_ui.selectedLeisure.type === 5) {
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").find("[is_checked=OrderCheckBoxLeisureOrderUp]").css("display", "inline-block");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").find("[is_checked=ReservationCheckBoxLeisureReservationUp]").css("display", "none");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").find("[is_checked=RequestCheckBoxLeisureResquestUp]").css("display", "inline-block");
            }
            if (leisureCard_ui.selectedLeisure.type === 6) {
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked", "false");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").find("[is_checked=OrderCheckBoxLeisureOrderUp]").css("display", "none");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").find("[is_checked=ReservationCheckBoxLeisureReservationUp]").css("display", "inline-block");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").find("[is_checked=RequestCheckBoxLeisureResquestUp]").css("display", "inline-block");
            }
            if (leisureCard_ui.selectedLeisure.type === 7) {
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").find("[is_checked=OrderCheckBoxLeisureOrderUp]").css("display", "inline-block");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").find("[is_checked=ReservationCheckBoxLeisureReservationUp]").css("display", "inline-block");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked", "true");
                $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").find("[is_checked=RequestCheckBoxLeisureResquestUp]").css("display", "inline-block");

            }
        }, 500);

        if (leisureCard_ui.selectedLeisure.time_shift != null) {

            var elem = $("[DATI-ID=switcherUpdateLeisure]");
            $(elem).attr("DATI-DEFAULt_VALUE", true);
            $("[DATI-ID=opening_Time_Update_Leisure]").slideDown();
            $("main").animate({scrollTop: $("[DATI-PAGE=editBarPage]").height()}, 'slow');


            if (leisureCard_ui.selectedLeisure.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[FIRST_SHIFT_MONDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["mon"][0][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["mon"][0][1]);
                } catch (e) {

                }

            }
            if (leisureCard_ui.selectedLeisure.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[SECOND_SHIFT_MONDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["mon"][1][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["mon"][1][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[THIRD_SHIFT_MONDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["mon"][2][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["mon"][2][1]);
                } catch (e) {

                }
            }

            if (leisureCard_ui.selectedLeisure.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[FIRST_SHIFT_TUESDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["tue"][0][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["tue"][0][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[SECOND_SHIFT_TUESDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["tue"][1][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["tue"][1][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[THIRD_SHIFT_TUESDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["tue"][2][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["tue"][2][1]);
                } catch (e) {

                }
            }

            if (leisureCard_ui.selectedLeisure.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[FIRST_SHIFT_WEDNESDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["wed"][0][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["wed"][0][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[SECOND_SHIFT_WEDNESDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["wed"][1][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["wed"][1][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[THIRD_SHIFT_WEDNESDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["wed"][2][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["wed"][2][1]);
                } catch (e) {

                }
            }

            if (leisureCard_ui.selectedLeisure.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[FIRST_SHIFT_THURSDAY]").html("1.Opening : " + leisureCard_ui.selectedLeisure.time_shift["thu"][0][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["thu"][0][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[SECOND_SHIFT_THURSDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["thu"][1][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["thu"][1][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[THIRD_SHIFT_THURSDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["thu"][2][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["thu"][2][1]);
                } catch (e) {

                }
            }

            if (leisureCard_ui.selectedLeisure.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[FIRST_SHIFT_FRYDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["fri"][0][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["fri"][0][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[SECOND_SHIFT_FRYDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["fri"][1][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["fri"][1][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[THIRD_SHIFT_FRYDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["fri"][2][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["fri"][2][1]);
                } catch (e) {

                }
            }

            if (leisureCard_ui.selectedLeisure.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[FIRST_SHIFT_SATURDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["sat"][0][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["sat"][0][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[SECOND_SHIFT_SATURDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["sat"][1][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["sat"][1][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[THIRD_SHIFT_SATURDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["sat"][2][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["sat"][2][1]);
                } catch (e) {

                }
            }

            if (leisureCard_ui.selectedLeisure.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[FIRST_SHIFT_SUNDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["sun"][0][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["sun"][0][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[SECOND_SHIFT_SUNDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["sun"][1][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["sun"][1][1]);
                } catch (e) {

                }
            }
            if (leisureCard_ui.selectedLeisure.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Leisure]").find("[THIRD_SHIFT_SUNDAY]").html("Opening : " + leisureCard_ui.selectedLeisure.time_shift["sun"][2][0] + " Closing :" + leisureCard_ui.selectedLeisure.time_shift["sun"][2][1]);
                } catch (e) {

                }
            }
        } else {
            var elem = $("[DATI-ID=switcherUpdateLeisure]");
            $(elem).attr("DATI-DEFAULt_VALUE", false);
            this.ENABLE_TIME();
            $("[DATI-ID=opening_Time_Update_Leisure]").css("display", "none");
        }
    }
    EVENT_UI(){


        $("[DATI-INPUT-TITLE-LEISURE-UPDATE]").on('keyup', function() {
            $("[dati-title-leisure]").html($("[DATI-INPUT-TITLE-LEISURE-UPDATE]").val());
            /*    $("[dati-image-restau]").attr("src", " https://fa42cf2086b5b4ffa910-42905546d373f150b1b6e131d3710cf2.ssl.cf3.rackcdn.com/exemple-de-business-plan.jpg");*/

        });


        $("[DATI-INPUT-DESCRIPTION-LEISURE-UPDATE]").on('keyup', function() {
            $("[dati-description-leisure]").html( $("[DATI-INPUT-DESCRIPTION-LEISURE-UPDATE]").val());

        });



        /* ******************************** End PREVIEW REST ****************************************** */

    }

};

let updateLeisure_ui = new Ui_updateLeisure
