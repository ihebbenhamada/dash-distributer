class imp_MeetingCard{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgMeetingUploaded=null ;
    }
    DELETE_MEETING(id){

        SSAPI.SUBMIT({
            uri:"/Meeting/delete",
            onsuccess:"MeetingDeleted",
            onerror:"MeetingDeleted_error",
            data:{
                meeting_id:id
            }
        })
    }
    ENABLE_MEETING(list){
        var id =list.id;
        if(list.enable){
            SSAPI.SUBMIT({
                uri:"/Meeting/disableMeeting",
                data:{
                    meeting_id: id
                },
                onsuccess:"eventDisabled"
            })
            //if changed in database
            list.enable=false;

        }else{
            SSAPI.SUBMIT({
                uri:"/Meeting/enableMeeting",
                data:{
                    meeting_id: id
                },
                onsuccess:"eventEnabled"
            })
            //if changed in database
            list.enable=true;
        }
    }



    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page != "addMeetingServices" ){
                $("[DATI-ID=opening_Time_Meeting]").slideUp();
                meetingCard_ui.RESET_FORM_ADD();
                meetingCard_ui.VIDE_PREVIEW_MEETING();
                meetingCard_ui.msgErreurMeeting = [];
                dati_Erreurs.UPDATE("MeetingErreurs");
                $("[ DATI-ID=contactListServiceMeeting]").css("display","none");
            }

            if(page == "addMeetingServices"){
                setTimeout(function(){
                    $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked","false");
                    $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").find("[is_checked=OrderCheckBoxMeetingOrder]").css("display","none");
                    $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked","false");
                    $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").find("[is_checked=ReservationCheckBoxMeetingReservation]").css("display","none");
                    $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked","false");
                    $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").find("[is_checked=RequestCheckBoxMeetingResquest]").css("display","none");
                }, 300);
                dati_contactForm.contact={};
                $("[dati-image-meeting]").attr("src", "/assets/img/ui/white.png");
                $("[dati-role=clickableTrans]").css("background-image","");
                var event = new CustomEvent("showPageAddMeeting");
                document.dispatchEvent(event);
                var eventTrans = new CustomEvent("showformTranslateMeeting");
                document.dispatchEvent(eventTrans);
                var eventContact = new CustomEvent("showcontactFormMeeting");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceMeeting");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteMeeting");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxMeeting");
                document.dispatchEvent(eventTypeService);
            }else if(page == "Meetings"){

                SSAPI.SUBMIT({
                    uri:"/Meeting/getAll",
                    onsuccess:"MeetingCardReceive"
                });


                var eventAlerte = new CustomEvent("showAlerteMeeting");


                document.dispatchEvent(eventAlerte);

            /*    document.dispatchEvent(event);*/
            }
        }, false);
        $(document).on('change','[DATI-ID=uploadIamgeMeetingfile]',function(){
            console.log($(this).val(),"value");
            var image =$(this)[0].files[0];
            console.log(image);
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageMeetingUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
    }


    EVENTS_SSAPI(){
        document.addEventListener("imageMeetingUploaded", function(e){
            console.log(e.detail.res,"img_link");
            $("[dati-role=clickable]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-role=clickable]").css("background-position","center");
            $("[dati-role=clickable]").css("background-size","100% 100%");
            $("[dati-role=clickable]").css("background-repeat","no-repeat");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[dati-image-meeting]").attr("src", e.detail.res[0]);
            imeetingCard.imgMeetingUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded=e.detail.res[0] ;


        }, false);
        document.addEventListener("MeetingCardReceive", function(e){
            meetingCard_ui.DATALIST(e.detail);

        }, false);
        /* ADD MEETING */
        document.addEventListener("meetingtAdded", function(e){
            meetingCard_ui.RESET_FORM_ADD();
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
        }, false);

        document.addEventListener("meetingtAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /* DELETE MEETING */
        document.addEventListener("MeetingDeleted", function(e){

            meetingCard_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("MeetingDeleted_error", function(e){


        }, false);

        /* UPDATE MEETING */
        document.addEventListener("MeetingUpdated", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);
        document.addEventListener("MeetingUpdated_error", function(e){

            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);
    }
}

let imeetingCard = new imp_MeetingCard();