let Ui_updateBar = class {
    constructor() {
        this.EVENT_UI();
        this.translate = {};
        this.contact = {};
        this.contactDb = {};
    }

    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherUpdateBar]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Update_Bar]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=editBarPage]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Update_Bar]").slideUp();
        }
    }

    READ_VALUE_INPUT(){

        $("[DATI-PAGE=editBarPage]").find("[DATI-ID=val_title]").val(barCard_ui.selectedBar.title);
        $("[DATI-PAGE=editBarPage]").find("[DATI-ID=val_desc]").val(barCard_ui.selectedBar.descrip);
        $("[DATI-PAGE=editBarPage]").find("[DATI-ID=val_summary]").val(barCard_ui.selectedBar.summary);
        $("[DATI-PAGE=editBarPage]").find("[dati-role=clickableTrans]").css('background-image','url('+barCard_ui.selectedBar.image+')');
        $("[dati-title-bar]").html(barCard_ui.selectedBar.title);
        $("[dati-description-bar]").html(barCard_ui.selectedBar.descrip);
        $("[dati-image-bar]").attr("src", barCard_ui.selectedBar.image);
        $("[  class=preview_Bar]").find("[ class=time_shift]").html('<img src="/assets/img/ui/clock.png" alt="image" style="width: 12px;"  > <p>Open</p>');
        $("[  class=preview_Bar]").find("[ class=rating]").html(
            '<span class="fa fa-star "></span>'+
            '<span class="fa fa-star "></span>'+
            '<span class="fa fa-star "></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star" ></span>');
        setTimeout(function(){
        if (barCard_ui.selectedBar.type === 0) {
            $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").attr("button-checked", "false");
            $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").find("[is_checked=ReservationCheckBoxBarReservationUp]").css("display", "none");
            $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").attr("button-checked", "false");
            $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").find("[is_checked=ReservationCheckBoxBarReservationUp]").css("display", "none");

        }
        if (barCard_ui.selectedBar.type === 1) {
                $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").attr("button-checked", "false");
                $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").find("[is_checked=ReservationCheckBoxBarReservationUp]").css("display", "none");
                $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").attr("button-checked", "false");
                $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").find("[is_checked=OrderCheckBoxBarOrderUp]").css("display", "none");

            }
        if (barCard_ui.selectedBar.type === 2) {
            $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").attr("button-checked", "true");
            $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").find("[is_checked=ReservationCheckBoxBarReservationUp]").css("display", "inline-block");
            $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").attr("button-checked", "false");
            $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").find("[is_checked=OrderCheckBoxBarOrderUp]").css("display", "none");

        }
          if (barCard_ui.selectedBar.type === 3) {
              $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").attr("button-checked", "true");
              $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").find("[is_checked=ReservationCheckBoxBarReservationUp]").css("display", "inline-block");
              $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").attr("button-checked", "true");
              $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").find("[is_checked=OrderCheckBoxBarOrderUp]").css("display", "inline-block");

            }
        }, 500);
        if (barCard_ui.selectedBar.time_shift != null) {


            var elem = $("[DATI-ID=switcherUpdateBar]");
            $(elem).attr("DATI-DEFAULt_VALUE", true);
            $("[DATI-ID=opening_Time_Update_Bar]").slideDown();
            $("main").animate({scrollTop: $("[DATI-PAGE=editBarPage]").height()}, 'slow');


            if (barCard_ui.selectedBar.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[FIRST_SHIFT_MONDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["mon"][0][0] + " Closing :" + barCard_ui.selectedBar.time_shift["mon"][0][1]);
                } catch (e) {

                }

            }
            if (barCard_ui.selectedBar.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[SECOND_SHIFT_MONDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["mon"][1][0] + " Closing :" + barCard_ui.selectedBar.time_shift["mon"][1][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[THIRD_SHIFT_MONDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["mon"][2][0] + " Closing :" + barCard_ui.selectedBar.time_shift["mon"][2][1]);
                } catch (e) {

                }
            }

            if (barCard_ui.selectedBar.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[FIRST_SHIFT_TUESDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["tue"][0][0] + " Closing :" + barCard_ui.selectedBar.time_shift["tue"][0][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[SECOND_SHIFT_TUESDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["tue"][1][0] + " Closing :" + barCard_ui.selectedBar.time_shift["tue"][1][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[THIRD_SHIFT_TUESDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["tue"][2][0] + " Closing :" + barCard_ui.selectedBar.time_shift["tue"][2][1]);
                } catch (e) {

                }
            }

            if (barCard_ui.selectedBar.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[FIRST_SHIFT_WEDNESDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["wed"][0][0] + " Closing :" + barCard_ui.selectedBar.time_shift["wed"][0][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[SECOND_SHIFT_WEDNESDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["wed"][1][0] + " Closing :" + barCard_ui.selectedBar.time_shift["wed"][1][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[THIRD_SHIFT_WEDNESDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["wed"][2][0] + " Closing :" + barCard_ui.selectedBar.time_shift["wed"][2][1]);
                } catch (e) {

                }
            }

            if (barCard_ui.selectedBar.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[FIRST_SHIFT_THURSDAY]").html("1.Opening : " + barCard_ui.selectedBar.time_shift["thu"][0][0] + " Closing :" + barCard_ui.selectedBar.time_shift["thu"][0][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[SECOND_SHIFT_THURSDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["thu"][1][0] + " Closing :" + barCard_ui.selectedBar.time_shift["thu"][1][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[THIRD_SHIFT_THURSDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["thu"][2][0] + " Closing :" + barCard_ui.selectedBar.time_shift["thu"][2][1]);
                } catch (e) {

                }
            }

            if (barCard_ui.selectedBar.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[FIRST_SHIFT_FRYDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["fri"][0][0] + " Closing :" + barCard_ui.selectedBar.time_shift["fri"][0][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[SECOND_SHIFT_FRYDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["fri"][1][0] + " Closing :" + barCard_ui.selectedBar.time_shift["fri"][1][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[THIRD_SHIFT_FRYDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["fri"][2][0] + " Closing :" + barCard_ui.selectedBar.time_shift["fri"][2][1]);
                } catch (e) {

                }
            }

            if (barCard_ui.selectedBar.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[FIRST_SHIFT_SATURDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["sat"][0][0] + " Closing :" + barCard_ui.selectedBar.time_shift["sat"][0][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[SECOND_SHIFT_SATURDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["sat"][1][0] + " Closing :" + barCard_ui.selectedBar.time_shift["sat"][1][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[THIRD_SHIFT_SATURDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["sat"][2][0] + " Closing :" + barCard_ui.selectedBar.time_shift["sat"][2][1]);
                } catch (e) {

                }
            }

            if (barCard_ui.selectedBar.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[FIRST_SHIFT_SUNDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["sun"][0][0] + " Closing :" + barCard_ui.selectedBar.time_shift["sun"][0][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[SECOND_SHIFT_SUNDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["sun"][1][0] + " Closing :" + barCard_ui.selectedBar.time_shift["sun"][1][1]);
                } catch (e) {

                }
            }
            if (barCard_ui.selectedBar.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Bar]").find("[THIRD_SHIFT_SUNDAY]").html("Opening : " + barCard_ui.selectedBar.time_shift["sun"][2][0] + " Closing :" + barCard_ui.selectedBar.time_shift["sun"][2][1]);
                } catch (e) {

                }
            }
        } else {
            var elem = $("[DATI-ID=switcherUpdateBar]");
            $(elem).attr("DATI-DEFAULt_VALUE", false);
            this.ENABLE_TIME();
            $("[DATI-ID=opening_Time_Update_Bar]").css("display", "none");
        }

    }
    READ_VALUE_INPUT_TRANS(){
        /*console.log(Language_Item.selectedLang,"selecteeeeed")
        $("[DATI-PAGE=formAddLanguage]").find("[dati-language-title-placeholder]").val("tesssssssssssst");*/
    }
    EVENT_UI(){


        $("[DATI-INPUT-TITLE-BAR-UPDATE]").on('keyup', function() {
            $("[dati-title-bar]").html($("[DATI-INPUT-TITLE-BAR-UPDATE]").val());
            /*    $("[dati-image-restau]").attr("src", " https://fa42cf2086b5b4ffa910-42905546d373f150b1b6e131d3710cf2.ssl.cf3.rackcdn.com/exemple-de-business-plan.jpg");*/

        });


        $("[DATI-INPUT-DESCRIPTION-BAR-UPDATE]").on('keyup', function() {
            $("[dati-description-bar]").html( $("[DATI-INPUT-DESCRIPTION-BAR-UPDATE]").val());

        });



        /* ******************************** End PREVIEW REST ****************************************** */

    }
};

let updateBar_ui = new Ui_updateBar();

