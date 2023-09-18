let Ui_updateRestau = class {
    constructor() {
        this.reviews = [];
        this.EVENT_UI();
        this.translate = {};
        this.contact = {};
        this.contactDb = {};
    }

    ENABLE_TIME() {
        var val = $("[DATI-ID=switcherUpdateRestau]").find("[type=checkbox]").is(":checked");
        if (val) {
            $("[DATI-ID=opening_Time_Update_Restau]").slideDown();
            $("main").animate({scrollTop: $("[DATI-PAGE=editRestauPage]").height()}, 'slow');
        } else {
            $("[DATI-ID=opening_Time_Update_Restau]").slideUp();
        }
    }


    READ_VALUE_INPUT() {
        if (restaurantCard_ui.selectedRest != null) {

            $("[DATI-PAGE=editRestauPage]").find("[DATI-ID=val_title]").val(restaurantCard_ui.selectedRest.title);
            $("[DATI-PAGE=editRestauPage]").find("[DATI-ID=val_desc]").val(restaurantCard_ui.selectedRest.descrip);
            $("[DATI-PAGE=editRestauPage]").find("[DATI-ID=val_summary]").val(restaurantCard_ui.selectedRest.summary);

            setTimeout(function(){
            if (restaurantCard_ui.selectedRest.type === 0) {

                $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").attr("button-checked", "false");
                $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").find("[is_checked=ReservationCheckBoxRestReservationUp]").css("display", "none");
                $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").attr("button-checked", "false");
                $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").find("[is_checked=OrderCheckBoxRestOrderUp]").css("display", "none");

            }
                if (restaurantCard_ui.selectedRest.type === 1) {

                    $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").attr("button-checked", "false");
                    $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").find("[is_checked=ReservationCheckBoxRestReservationUp]").css("display", "none");
                    $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").attr("button-checked", "true");
                    $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").find("[is_checked=OrderCheckBoxRestOrderUp]").css("display", "inline-block");

                }
            if (restaurantCard_ui.selectedRest.type === 2) {

                $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").attr("button-checked", "true");
                $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").find("[is_checked=ReservationCheckBoxRestReservationUp]").css("display", "inline-block");
                $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").attr("button-checked", "false");
                $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").find("[is_checked=OrderCheckBoxRestOrderUp]").css("display", "none");

            }
                if (restaurantCard_ui.selectedRest.type === 3) {

                    $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").attr("button-checked", "true");
                    $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").find("[is_checked=ReservationCheckBoxRestReservationUp]").css("display", "inline-block");
                    $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").attr("button-checked", "true");
                    $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").find("[is_checked=OrderCheckBoxRestOrderUp]").css("display", "inline-block");
                }
            }, 500);

            $("[DATI-PAGE=editRestauPage]").find("[dati-role=clickableTrans]").css('background-image', 'url(' + restaurantCard_ui.selectedRest.image + ')');
            $("[dati-title-restau]").html(restaurantCard_ui.selectedRest.title);
            $("[dati-description-restau]").html(restaurantCard_ui.selectedRest.descrip);
            $("[dati-image-restau]").attr("src", restaurantCard_ui.selectedRest.image);
            $("[  class=preview_Rest]").find("[ class=time_shift]").html('<img src="/assets/img/ui/clock.png" alt="image" style="width: 12px;"  > <p>Open</p>');
            $("[  class=preview_Rest]").find("[ class=rating]").html(
                '<span class="fa fa-star "></span>' +
                '<span class="fa fa-star "></span>' +
                '<span class="fa fa-star "></span>' +
                '<span class="fa fa-star"></span>' +
                '<span class="fa fa-star" ></span>');

            if (restaurantCard_ui.selectedRest.time_shift != null) {


                var elem = $("[DATI-ID=switcherUpdateRestau]");
                $(elem).attr("DATI-DEFAULt_VALUE", true);
                $("[DATI-ID=opening_Time_Update_Restau]").slideDown();
                $("main").animate({scrollTop: $("[DATI-PAGE=editRestauPage]").height()}, 'slow');


                if (restaurantCard_ui.selectedRest.time_shift["mon"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[FIRST_SHIFT_MONDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["mon"][0][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["mon"][0][1]);
                    } catch (e) {

                    }

                }
                if (restaurantCard_ui.selectedRest.time_shift["mon"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[SECOND_SHIFT_MONDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["mon"][1][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["mon"][1][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["mon"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[THIRD_SHIFT_MONDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["mon"][2][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["mon"][2][1]);
                    } catch (e) {

                    }
                }

                if (restaurantCard_ui.selectedRest.time_shift["tue"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[FIRST_SHIFT_TUESDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["tue"][0][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["tue"][0][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["tue"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[SECOND_SHIFT_TUESDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["tue"][1][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["tue"][1][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["tue"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[THIRD_SHIFT_TUESDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["tue"][2][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["tue"][2][1]);
                    } catch (e) {

                    }
                }

                if (restaurantCard_ui.selectedRest.time_shift["wed"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[FIRST_SHIFT_WEDNESDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["wed"][0][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["wed"][0][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["wed"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[SECOND_SHIFT_WEDNESDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["wed"][1][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["wed"][1][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["wed"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[THIRD_SHIFT_WEDNESDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["wed"][2][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["wed"][2][1]);
                    } catch (e) {

                    }
                }

                if (restaurantCard_ui.selectedRest.time_shift["thu"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[FIRST_SHIFT_THURSDAY]").html("1.Opening : " + restaurantCard_ui.selectedRest.time_shift["thu"][0][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["thu"][0][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["thu"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[SECOND_SHIFT_THURSDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["thu"][1][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["thu"][1][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["thu"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[THIRD_SHIFT_THURSDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["thu"][2][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["thu"][2][1]);
                    } catch (e) {

                    }
                }

                if (restaurantCard_ui.selectedRest.time_shift["fri"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[FIRST_SHIFT_FRYDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["fri"][0][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["fri"][0][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["fri"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[SECOND_SHIFT_FRYDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["fri"][1][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["fri"][1][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["fri"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[THIRD_SHIFT_FRYDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["fri"][2][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["fri"][2][1]);
                    } catch (e) {

                    }
                }

                if (restaurantCard_ui.selectedRest.time_shift["sat"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[FIRST_SHIFT_SATURDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["sat"][0][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["sat"][0][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["sat"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[SECOND_SHIFT_SATURDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["sat"][1][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["sat"][1][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["sat"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[THIRD_SHIFT_SATURDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["sat"][2][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["sat"][2][1]);
                    } catch (e) {

                    }
                }

                if (restaurantCard_ui.selectedRest.time_shift["sun"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[FIRST_SHIFT_SUNDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["sun"][0][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["sun"][0][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["sun"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[SECOND_SHIFT_SUNDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["sun"][1][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["sun"][1][1]);
                    } catch (e) {

                    }
                }
                if (restaurantCard_ui.selectedRest.time_shift["sun"] != null) {
                    try {
                        $("[DATI-ID=opening_Time_Update_Restau]").find("[THIRD_SHIFT_SUNDAY]").html("Opening : " + restaurantCard_ui.selectedRest.time_shift["sun"][2][0] + " Closing :" + restaurantCard_ui.selectedRest.time_shift["sun"][2][1]);
                    } catch (e) {

                    }
                }
            } else {
                var elem = $("[DATI-ID=switcherUpdateRestau]");
                $(elem).attr("DATI-DEFAULt_VALUE", false);
                this.ENABLE_TIME();
                $("[DATI-ID=opening_Time_Update_Restau]").css("display", "none");
            }

        }
    }


    EVENT_UI() {


        $("[DATI-INPUT-TITLE-REST-UPDATE]").on('keyup', function () {
            $("[dati-title-restau]").html($("[DATI-INPUT-TITLE-REST-UPDATE]").val());
            /*    $("[dati-image-restau]").attr("src", " https://fa42cf2086b5b4ffa910-42905546d373f150b1b6e131d3710cf2.ssl.cf3.rackcdn.com/exemple-de-business-plan.jpg");*/

        });


        $("[DATI-INPUT-DESCRIPTION-REST-UPDATE]").on('keyup', function () {
            $("[dati-description-restau]").html($("[DATI-INPUT-DESCRIPTION-REST-UPDATE]").val());

        });


        /* ******************************** End PREVIEW REST ****************************************** */

    }
};

let UpdateRestau_ui = new Ui_updateRestau();

