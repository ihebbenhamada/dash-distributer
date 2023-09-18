let Ui_updateWellB = class {
    constructor() {
        this.EVENT_UI();
        this.translate = {};
        this.contact = {};
        this.contactDb = {};
    }

    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherUpdateWellB]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Update_WellB]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=editWellBPage]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Update_WellB]").slideUp();
        }
    }
    READ_VALUE_INPUT(){

        $("[DATI-PAGE=editWellBPage]").find("[DATI-ID=val_title]").val(WellBeingCard_ui.selectedwellB.title);
        $("[DATI-PAGE=editWellBPage]").find("[DATI-ID=val_desc]").val(WellBeingCard_ui.selectedwellB.descrip);
        $("[DATI-PAGE=editWellBPage]").find("[DATI-ID=val_summary]").val(WellBeingCard_ui.selectedwellB.summary);
        $("[DATI-PAGE=editWellBPage]").find("[dati-input-price-order-wellb-update]").val(WellBeingCard_ui.selectedwellB.tarif);
        $("[DATI-PAGE=editWellBPage]").find("[dati-input-price-reservation-wellb-update]").val(WellBeingCard_ui.selectedwellB.tarif);
        $("[DATI-PAGE=editWellBPage]").find("[dati-role=clickableTrans]").css('background-image','url('+WellBeingCard_ui.selectedwellB.image+')');
        $("[dati-title-well]").html(WellBeingCard_ui.selectedwellB.title);
        $("[dati-description-well]").html(WellBeingCard_ui.selectedwellB.descrip);
        $("[dati-image-well]").attr("src",(WellBeingCard_ui.selectedwellB.image));

        setTimeout(function(){

            if (WellBeingCard_ui.selectedwellB.type === 0) {
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").find("[is_checked=OrderCheckBoxWellBOrderUp]").css("display", "none");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").find("[is_checked=ReservationCheckBoxWellBReservationUp]").css("display", "none");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").find("[is_checked=RequestCheckBoxWellBRequestUp]").css("display", "none");
            }
            if (WellBeingCard_ui.selectedwellB.type === 1) {
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").find("[is_checked=OrderCheckBoxWellBOrderUp]").css("display", "inline-block");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").find("[is_checked=ReservationCheckBoxWellBReservationUp]").css("display", "none");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").find("[is_checked=RequestCheckBoxWellBRequestUp]").css("display", "none");
            }
            if (WellBeingCard_ui.selectedwellB.type === 2) {
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").find("[is_checked=OrderCheckBoxWellBOrderUp]").css("display", "none");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").find("[is_checked=ReservationCheckBoxWellBReservationUp]").css("display", "inline-block");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").find("[is_checked=RequestCheckBoxWellBRequestUp]").css("display", "none");
            }
            if (WellBeingCard_ui.selectedwellB.type === 3) {
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").find("[is_checked=OrderCheckBoxWellBOrderUp]").css("display", "inline-block");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").find("[is_checked=ReservationCheckBoxWellBReservationUp]").css("display", "inline-block");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").find("[is_checked=RequestCheckBoxWellBRequestUp]").css("display", "none");
            }
            if (WellBeingCard_ui.selectedwellB.type === 4) {
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").find("[is_checked=OrderCheckBoxWellBOrderUp]").css("display", "none");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").find("[is_checked=ReservationCheckBoxWellBReservationUp]").css("display", "none");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").find("[is_checked=RequestCheckBoxWellBRequestUp]").css("display", "inline-block");
            }
            if (WellBeingCard_ui.selectedwellB.type === 5) {
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").find("[is_checked=OrderCheckBoxWellBOrderUp]").css("display", "inline-block");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").find("[is_checked=ReservationCheckBoxWellBReservationUp]").css("display", "none");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").find("[is_checked=RequestCheckBoxWellBRequestUp]").css("display", "inline-block");
            }
            if (WellBeingCard_ui.selectedwellB.type === 6) {
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked", "false");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").find("[is_checked=OrderCheckBoxWellBOrderUp]").css("display", "none");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").find("[is_checked=ReservationCheckBoxWellBReservationUp]").css("display", "inline-block");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").find("[is_checked=RequestCheckBoxWellBRequestUp]").css("display", "inline-block");
            }
            if (WellBeingCard_ui.selectedwellB.type === 7) {
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").find("[is_checked=OrderCheckBoxWellBOrderUp]").css("display", "inline-block");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").find("[is_checked=ReservationCheckBoxWellBReservationUp]").css("display", "inline-block");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked", "true");
                $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").find("[is_checked=RequestCheckBoxWellBRequestUp]").css("display", "inline-block");
            }
        }, 500);

        if (WellBeingCard_ui.selectedwellB.time_shift != null) {


            var elem = $("[DATI-ID=switcherUpdateWellB]");
            $(elem).attr("DATI-DEFAULt_VALUE", true);
            $("[DATI-ID=opening_Time_Update_WellB]").slideDown();
            $("main").animate({scrollTop: $("[DATI-PAGE=editWellBPage]").height()}, 'slow');

            if (WellBeingCard_ui.selectedwellB.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[FIRST_SHIFT_MONDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["mon"][0][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["mon"][0][1]);
                } catch (e) {

                }

            }
            if (WellBeingCard_ui.selectedwellB.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[SECOND_SHIFT_MONDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["mon"][1][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["mon"][1][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[THIRD_SHIFT_MONDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["mon"][2][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["mon"][2][1]);
                } catch (e) {

                }
            }

            if (WellBeingCard_ui.selectedwellB.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[FIRST_SHIFT_TUESDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["tue"][0][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["tue"][0][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[SECOND_SHIFT_TUESDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["tue"][1][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["tue"][1][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[THIRD_SHIFT_TUESDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["tue"][2][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["tue"][2][1]);
                } catch (e) {

                }
            }

            if (WellBeingCard_ui.selectedwellB.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[FIRST_SHIFT_WEDNESDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["wed"][0][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["wed"][0][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[SECOND_SHIFT_WEDNESDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["wed"][1][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["wed"][1][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[THIRD_SHIFT_WEDNESDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["wed"][2][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["wed"][2][1]);
                } catch (e) {

                }
            }

            if (WellBeingCard_ui.selectedwellB.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[FIRST_SHIFT_THURSDAY]").html("1.Opening : " + WellBeingCard_ui.selectedwellB.time_shift["thu"][0][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["thu"][0][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[SECOND_SHIFT_THURSDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["thu"][1][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["thu"][1][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[THIRD_SHIFT_THURSDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["thu"][2][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["thu"][2][1]);
                } catch (e) {

                }
            }

            if (WellBeingCard_ui.selectedwellB.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[FIRST_SHIFT_FRYDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["fri"][0][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["fri"][0][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[SECOND_SHIFT_FRYDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["fri"][1][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["fri"][1][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[THIRD_SHIFT_FRYDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["fri"][2][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["fri"][2][1]);
                } catch (e) {

                }
            }

            if (WellBeingCard_ui.selectedwellB.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[FIRST_SHIFT_SATURDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["sat"][0][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["sat"][0][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[SECOND_SHIFT_SATURDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["sat"][1][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["sat"][1][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[THIRD_SHIFT_SATURDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["sat"][2][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["sat"][2][1]);
                } catch (e) {

                }
            }

            if (WellBeingCard_ui.selectedwellB.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[FIRST_SHIFT_SUNDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["sun"][0][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["sun"][0][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[SECOND_SHIFT_SUNDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["sun"][1][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["sun"][1][1]);
                } catch (e) {

                }
            }
            if (WellBeingCard_ui.selectedwellB.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_WellB]").find("[THIRD_SHIFT_SUNDAY]").html("Opening : " + WellBeingCard_ui.selectedwellB.time_shift["sun"][2][0] + " Closing :" + WellBeingCard_ui.selectedwellB.time_shift["sun"][2][1]);
                } catch (e) {

                }
            }
        } else {
            var elem = $("[DATI-ID=switcherUpdateWellB]");
            $(elem).attr("DATI-DEFAULt_VALUE", false);
            this.ENABLE_TIME();
            $("[DATI-ID=opening_Time_Update_WellB]").css("display", "none");
        }


    }
    EVENT_UI(){


        $("[DATI-INPUT-TITLE-WELL-UPDATE]").on('keyup', function() {
            $("[dati-title-well]").html($("[DATI-INPUT-TITLE-WELL-UPDATE]").val());


        });


        $("[DATI-INPUT-DESCRIPTION-WELL-UPDATE]").on('keyup', function() {
            $("[dati-description-well]").html( $("[DATI-INPUT-DESCRIPTION-WELL-UPDATE]").val());

        });



        /* ******************************** End PREVIEW REST ****************************************** */

    }

};

let updateWellB_ui = new Ui_updateWellB
