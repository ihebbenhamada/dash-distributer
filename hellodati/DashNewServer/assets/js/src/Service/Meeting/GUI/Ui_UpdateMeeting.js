let Ui_updateMeeting = class {
    constructor() {
        this.EVENT_UI();
        this.translate = {};
        this.contact = {};
        this.contactDb = {};
    }

    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherUpdateMeeting]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Update_Meeting]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=editMeetingPage]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Update_Meeting]").slideUp();
        }
    }
    READ_VALUE_INPUT(){
    /*    Language_Item.translateLear = null;*/
        $("[DATI-PAGE=editMeetingPage]").find("[DATI-ID=val_title]").val(meetingCard_ui.selectedMeeting.title);
        $("[DATI-PAGE=editMeetingPage]").find("[DATI-ID=val_desc]").val(meetingCard_ui.selectedMeeting.descrip);
        $("[DATI-PAGE=editMeetingPage]").find("[DATI-INPUT-NAME=price]").val(meetingCard_ui.selectedMeeting.price);
        $("[DATI-PAGE=editMeetingPage]").find("[dati-role=clickableTrans]").css('background-image','url('+meetingCard_ui.selectedMeeting.image+')');
        $("[dati-title-meeting]").html(meetingCard_ui.selectedMeeting.title);
        $("[dati-description-meeting]").html(meetingCard_ui.selectedMeeting.descrip);
        $("[dati-image-meeting]").attr("src",meetingCard_ui.selectedMeeting.image);
        $("[ class=details_preview_Meet]").find("[ class=rating]").html(
            '<span class="fa fa-star "></span>'+
            '<span class="fa fa-star "></span>'+
            '<span class="fa fa-star "></span>'+
            '<span class="fa fa-star"></span>'+
            '<span class="fa fa-star" ></span>');
        setTimeout(function(){
        if (meetingCard_ui.selectedMeeting.type === 0) {
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").find("[is_checked=OrderCheckBoxMeetingOrderUp]").css("display", "none");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").find("[is_checked=ReservationCheckBoxMeetingReservationUp]").css("display", "none");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").find("[is_checked=RequestCheckBoxMeetingResquestUp]").css("display", "none");
        }
        if (meetingCard_ui.selectedMeeting.type === 1) {
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").find("[is_checked=OrderCheckBoxMeetingOrderUp]").css("display", "inline-block");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").find("[is_checked=ReservationCheckBoxMeetingReservationUp]").css("display", "none");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").find("[is_checked=RequestCheckBoxMeetingResquestUp]").css("display", "none");
        }
        if (meetingCard_ui.selectedMeeting.type === 2) {
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").find("[is_checked=OrderCheckBoxMeetingOrderUp]").css("display", "none");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").find("[is_checked=ReservationCheckBoxMeetingReservationUp]").css("display", "inline-block");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").find("[is_checked=RequestCheckBoxMeetingResquestUp]").css("display", "none");
        }
        if (meetingCard_ui.selectedMeeting.type === 3) {
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").find("[is_checked=OrderCheckBoxMeetingOrderUp]").css("display", "inline-block");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").find("[is_checked=ReservationCheckBoxMeetingReservationUp]").css("display", "inline-block");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").find("[is_checked=RequestCheckBoxMeetingResquestUp]").css("display", "none");
        }
        if (meetingCard_ui.selectedMeeting.type === 4) {
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").find("[is_checked=OrderCheckBoxMeetingOrderUp]").css("display", "none");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").find("[is_checked=ReservationCheckBoxMeetingReservationUp]").css("display", "none");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").find("[is_checked=RequestCheckBoxMeetingResquestUp]").css("display", "inline-block");
        }
        if (meetingCard_ui.selectedMeeting.type === 5) {
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").find("[is_checked=OrderCheckBoxMeetingOrderUp]").css("display", "inline-block");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").find("[is_checked=ReservationCheckBoxMeetingReservationUp]").css("display", "none");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").find("[is_checked=RequestCheckBoxMeetingResquestUp]").css("display", "inline-block");
        }
        if (meetingCard_ui.selectedMeeting.type === 6) {
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked", "false");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").find("[is_checked=OrderCheckBoxMeetingOrderUp]").css("display", "none");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").find("[is_checked=ReservationCheckBoxMeetingReservationUp]").css("display", "inline-block");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").find("[is_checked=RequestCheckBoxMeetingResquestUp]").css("display", "inline-block");
        }
        if (meetingCard_ui.selectedMeeting.type === 7) {
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").find("[is_checked=OrderCheckBoxMeetingOrderUp]").css("display", "inline-block");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").find("[is_checked=ReservationCheckBoxMeetingReservationUp]").css("display", "inline-block");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked", "true");
            $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").find("[is_checked=RequestCheckBoxMeetingResquestUp]").css("display", "inline-block");
        }
        }, 500);

        /* send translates to ui_languageItem */
   /*     Language_Item.translateLear = meetingCard_ui.selectedMeeting.translate;
        console.log( meetingCard_ui.selectedMeeting.translate,"trandsss");*/
        /* end send translates to ui_languageItem */

        if (meetingCard_ui.selectedMeeting.time_shift != null) {

            var elem = $("[DATI-ID=switcherUpdateMeeting]");
            $(elem).find("[class=flipswitch-switch]").css("background-color","rgb(224, 205, 8)");
            $(elem).attr("DATI-DEFAULt_VALUE", true);
            $("[DATI-ID=opening_Time_Update_Meeting]").slideDown();
            $("main").animate({scrollTop: $("[DATI-PAGE=editMeetingPage]").height()}, 'slow');

            if (meetingCard_ui.selectedMeeting.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[FIRST_SHIFT_MONDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["mon"][0][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["mon"][0][1]);
                } catch (e) {

                }

            }
            if (meetingCard_ui.selectedMeeting.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[SECOND_SHIFT_MONDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["mon"][1][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["mon"][1][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["mon"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[THIRD_SHIFT_MONDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["mon"][2][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["mon"][2][1]);
                } catch (e) {

                }
            }

            if (meetingCard_ui.selectedMeeting.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[FIRST_SHIFT_TUESDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["tue"][0][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["tue"][0][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[SECOND_SHIFT_TUESDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["tue"][1][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["tue"][1][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["tue"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[THIRD_SHIFT_TUESDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["tue"][2][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["tue"][2][1]);
                } catch (e) {

                }
            }

            if (meetingCard_ui.selectedMeeting.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[FIRST_SHIFT_WEDNESDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["wed"][0][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["wed"][0][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[SECOND_SHIFT_WEDNESDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["wed"][1][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["wed"][1][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["wed"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[THIRD_SHIFT_WEDNESDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["wed"][2][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["wed"][2][1]);
                } catch (e) {

                }
            }

            if (meetingCard_ui.selectedMeeting.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[FIRST_SHIFT_THURSDAY]").html("1.Opening : " + meetingCard_ui.selectedMeeting.time_shift["thu"][0][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["thu"][0][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[SECOND_SHIFT_THURSDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["thu"][1][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["thu"][1][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["thu"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[THIRD_SHIFT_THURSDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["thu"][2][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["thu"][2][1]);
                } catch (e) {

                }
            }

            if (meetingCard_ui.selectedMeeting.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[FIRST_SHIFT_FRYDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["fri"][0][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["fri"][0][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[SECOND_SHIFT_FRYDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["fri"][1][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["fri"][1][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["fri"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[THIRD_SHIFT_FRYDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["fri"][2][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["fri"][2][1]);
                } catch (e) {

                }
            }

            if (meetingCard_ui.selectedMeeting.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[FIRST_SHIFT_SATURDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["sat"][0][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["sat"][0][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[SECOND_SHIFT_SATURDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["sat"][1][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["sat"][1][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["sat"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[THIRD_SHIFT_SATURDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["sat"][2][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["sat"][2][1]);
                } catch (e) {

                }
            }

            if (meetingCard_ui.selectedMeeting.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[FIRST_SHIFT_SUNDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["sun"][0][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["sun"][0][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[SECOND_SHIFT_SUNDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["sun"][1][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["sun"][1][1]);
                } catch (e) {

                }
            }
            if (meetingCard_ui.selectedMeeting.time_shift["sun"] != null) {
                try {
                    $("[DATI-ID=opening_Time_Update_Meeting]").find("[THIRD_SHIFT_SUNDAY]").html("Opening : " + meetingCard_ui.selectedMeeting.time_shift["sun"][2][0] + " Closing :" + meetingCard_ui.selectedMeeting.time_shift["sun"][2][1]);
                } catch (e) {

                }
            }
            $(elem).attr("DATI-DEFAULt_VALUE", true);
            $(elem).find("[type=checkbox]").attr("checked",true);
            $("[DATI-ID=opening_Time_Update_Meeting]").css("display","block");

            /*$(elem).find(".flipswitch-switch").css("background-color","rgb(224, 205, 8)")*/
           // $("main").animate({scrollTop: $("[DATI-PAGE=editMeetingPage]").height()}, 'slow');

        } else {
            var elem = $("[DATI-ID=switcherUpdateMeeting]");
            $(elem).attr("DATI-DEFAULt_VALUE", false);
            updateMeeting_ui.ENABLE_TIME();
            $("[DATI-ID=opening_Time_Update_Meeting]").css("display", "none");

        }
    }
    EVENT_UI(){


        $("[DATI-INPUT-TITLE-MEETING-UPDATE]").on('keyup', function() {
            $("[dati-title-meeting]").html($("[DATI-INPUT-TITLE-MEETING-UPDATE]").val());
            /*    $("[dati-image-restau]").attr("src", " https://fa42cf2086b5b4ffa910-42905546d373f150b1b6e131d3710cf2.ssl.cf3.rackcdn.com/exemple-de-business-plan.jpg");*/

        });


        $("[DATI-INPUT-DESCRIPTION-MEETING-UPDATE]").on('keyup', function() {
            $("[dati-description-meeting]").html( $("[DATI-INPUT-DESCRIPTION-MEETING-UPDATE]").val());

        });



        /* ******************************** End PREVIEW REST ****************************************** */

    }
};

let updateMeeting_ui = new Ui_updateMeeting();

